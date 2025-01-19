import { CreateReviewInput } from './create-review.input'
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Review } from '@prisma/client'

@InputType()
export class UpdateReviewInput extends PartialType(CreateReviewInput) {
  @Field(() => String)
  id: Review['id']
}
