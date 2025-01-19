import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common'

import { PrismaService } from 'src/common/prisma/prisma.service'
import { ApiTags } from '@nestjs/swagger'
import { CreateBookingTimeLine } from './dtos/create.dto'
import { BookingTimeLineQueryDto } from './dtos/query.dto'
import { UpdateBookingTimeLine } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { BookingTimeLineEntity } from './entity/booking-time-line.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/auth/util'

@ApiTags('booking-time-lines')
@Controller('booking-time-lines')
export class BookingTimeLinesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: BookingTimeLineEntity })
  @Post()
  create(
    @Body() createBookingTimeLineDto: CreateBookingTimeLine,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, createBookingTimeLineDto.id.toString())
    return this.prisma.bookingTimeline.create({
      data: createBookingTimeLineDto,
    })
  }

  @ApiOkResponse({ type: [BookingTimeLineEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: BookingTimeLineQueryDto) {
    return this.prisma.bookingTimeline.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: BookingTimeLineEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.bookingTimeline.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: BookingTimeLineEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateBookingTimeLineDto: UpdateBookingTimeLine,
    @GetUser() user: GetUserType,
  ) {
    const bookingTimeline = await this.prisma.bookingTimeline.findUnique({
      where: { id },
    })
    checkRowLevelPermission(user, bookingTimeline.id.toString())
    return this.prisma.bookingTimeline.update({
      where: { id },
      data: updateBookingTimeLineDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: number, @GetUser() user: GetUserType) {
    const bookingTimeline = await this.prisma.bookingTimeline.findUnique({
      where: { id },
    })
    checkRowLevelPermission(user, bookingTimeline.id.toString())
    return this.prisma.bookingTimeline.delete({ where: { id } })
  }
}
