import { PartialType } from '@nestjs/swagger'
import { CreateServiceAssignment } from './create.dto'
import { ServiceAssignment } from '@prisma/client'

export class UpdateServiceAssignment extends PartialType(
  CreateServiceAssignment,
) {
  serviceId: ServiceAssignment['serviceId']
}
