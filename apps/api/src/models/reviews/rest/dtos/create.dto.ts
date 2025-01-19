import { PickType } from '@nestjs/swagger'
import { ReviewEntity } from '../entity/review.entity'

export class CreateReview extends PickType(ReviewEntity, [
  'createdAt',
  'updatedAt',
  'id',
  'customerId',
  'garageId',
]) {}
