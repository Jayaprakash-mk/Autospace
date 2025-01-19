import { InputType, PickType } from '@nestjs/graphql'
import { ServiceAssignment } from '../entity/service-assignment.entity'

@InputType()
export class CreateServiceAssignmentInput extends PickType(
  ServiceAssignment,
  ['bookingId', 'createdAt', 'updatedAt', 'serviceType'],
  InputType,
) {}
