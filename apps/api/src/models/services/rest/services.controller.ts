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
import { CreateService } from './dtos/create.dto'
import { ServiceQueryDto } from './dtos/query.dto'
import { UpdateService } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { ServiceEntity } from './entity/service.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/auth/util'

@ApiTags('services')
@Controller('services')
export class ServicesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ServiceEntity })
  @Post()
  create(
    @Body() createServiceDto: CreateService,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, createServiceDto.uid)
    return this.prisma.service.create({ data: createServiceDto })
  }

  @ApiOkResponse({ type: [ServiceEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: ServiceQueryDto) {
    return this.prisma.service.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: ServiceEntity })
  @Get(':uid')
  findOne(@Param('uid') uid: string) {
    return this.prisma.service.findUnique({ where: { uid } })
  }

  @ApiOkResponse({ type: ServiceEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':uid')
  async update(
    @Param('uid') uid: string,
    @Body() updateServiceDto: UpdateService,
    @GetUser() user: GetUserType,
  ) {
    const service = await this.prisma.service.findUnique({ where: { uid } })
    checkRowLevelPermission(user, service.uid)
    return this.prisma.service.update({
      where: { uid },
      data: updateServiceDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':uid')
  async remove(@Param('uid') uid: string, @GetUser() user: GetUserType) {
    const service = await this.prisma.service.findUnique({ where: { uid } })
    checkRowLevelPermission(user, service.uid)
    return this.prisma.service.delete({ where: { uid } })
  }
}
