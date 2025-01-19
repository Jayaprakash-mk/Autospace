import { PickType } from '@nestjs/swagger'
import { ManagerEntity } from '../entity/manager.entity'

export class CreateManager extends PickType(ManagerEntity, [
  'createdAt',
  'updatedAt',
  'uid',
]) {}
