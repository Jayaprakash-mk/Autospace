import { CreateServiceAssignmentInput } from './create-service-assignment.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { ServiceAssignment } from '@prisma/client'

@InputType()
export class UpdateServiceAssignmentInput extends PartialType(
  CreateServiceAssignmentInput,
) {
  serviceId: ServiceAssignment['serviceId']
}
