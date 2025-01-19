import { PartialType } from '@nestjs/swagger'
import { CreateService } from './create.dto'
import { Service } from '@prisma/client'

export class UpdateService extends PartialType(CreateService) {
  uid: Service['uid']
}
