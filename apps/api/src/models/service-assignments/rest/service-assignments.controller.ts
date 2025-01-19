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
import { CreateServiceAssignment } from './dtos/create.dto'
import { ServiceAssignmentQueryDto } from './dtos/query.dto'
import { UpdateServiceAssignment } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { ServiceAssignmentEntity } from './entity/service-assignment.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/auth/util'

@ApiTags('service-assignments')
@Controller('service-assignments')
export class ServiceAssignmentsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ServiceAssignmentEntity })
  @Post()
  create(
    @Body() createServiceAssignmentDto: CreateServiceAssignment,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(
      user,
      createServiceAssignmentDto.serviceId.toString(),
    )
    return this.prisma.serviceAssignment.create({
      data: createServiceAssignmentDto,
    })
  }

  @ApiOkResponse({ type: [ServiceAssignmentEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: ServiceAssignmentQueryDto) {
    return this.prisma.serviceAssignment.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: ServiceAssignmentEntity })
  @Get(':serviceId')
  findOne(@Param('serviceId') serviceId: number) {
    return this.prisma.serviceAssignment.findUnique({ where: { serviceId } })
  }

  @ApiOkResponse({ type: ServiceAssignmentEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':serviceId')
  async update(
    @Param('serviceId') serviceId: number,
    @Body() updateServiceAssignmentDto: UpdateServiceAssignment,
    @GetUser() user: GetUserType,
  ) {
    const serviceAssignment = await this.prisma.serviceAssignment.findUnique({
      where: { serviceId },
    })
    checkRowLevelPermission(user, serviceAssignment.serviceId.toString())
    return this.prisma.serviceAssignment.update({
      where: { serviceId },
      data: updateServiceAssignmentDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':serviceId')
  async remove(
    @Param('serviceId') serviceId: number,
    @GetUser() user: GetUserType,
  ) {
    const serviceAssignment = await this.prisma.serviceAssignment.findUnique({
      where: { serviceId },
    })
    checkRowLevelPermission(user, serviceAssignment.serviceId.toString())
    return this.prisma.serviceAssignment.delete({ where: { serviceId } })
  }
}
