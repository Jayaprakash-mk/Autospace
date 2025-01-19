import { PickType } from '@nestjs/swagger'
import { GarageEntity } from '../entity/garage.entity'

export class CreateGarage extends PickType(GarageEntity, [
  'createdAt',
  'updatedAt',
  'id',
  'companyId',
]) {}
