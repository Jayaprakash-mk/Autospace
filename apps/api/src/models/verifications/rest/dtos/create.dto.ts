import { PickType } from '@nestjs/swagger'
import { VerificationEntity } from '../entity/verification.entity'

export class CreateVerification extends PickType(VerificationEntity, [
  'createdAt',
  'updatedAt',
  'garageId',
  'adminId',
]) {}
