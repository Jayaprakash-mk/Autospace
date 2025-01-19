import { PickType } from '@nestjs/swagger'
import { ServiceEntity } from '../entity/service.entity'

export class CreateService extends PickType(ServiceEntity, [
  'createdAt',
  'updatedAt',
  'uid',
  'displayName',
]) {}
