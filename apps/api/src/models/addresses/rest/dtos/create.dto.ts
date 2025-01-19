import { PickType } from '@nestjs/swagger'
import { AddressEntity } from '../entity/address.entity'

export class CreateAddress extends PickType(AddressEntity, [
  'createdAt',
  'updatedAt',
  'id',
  'address',
  'lat',
  'lng',
  'garageId',
]) {}
