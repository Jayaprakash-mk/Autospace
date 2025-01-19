import { PickType } from '@nestjs/swagger'
import { SlotEntity } from '../entity/slot.entity'

export class CreateSlot extends PickType(SlotEntity, [
  'createdAt',
  'updatedAt',
  'id',
  'pricePerHour',
  'garageId',
]) {}
