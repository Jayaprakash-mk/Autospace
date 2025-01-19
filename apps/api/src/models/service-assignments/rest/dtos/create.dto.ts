import { PickType } from '@nestjs/swagger'
import { ServiceAssignmentEntity } from '../entity/service-assignment.entity'

export class CreateServiceAssignment extends PickType(ServiceAssignmentEntity, [
  'createdAt',
  'updatedAt',
  'serviceId',
  'bookingId',
  'serviceType',
]) {}
