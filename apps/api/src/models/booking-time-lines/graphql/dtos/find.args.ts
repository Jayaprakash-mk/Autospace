import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { BookingTimeLineOrderByWithRelationInput } from './order-by.args'
import {
  BookingTimeLineWhereInput,
  BookingTimeLineWhereUniqueInput,
} from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.BookingTimelineScalarFieldEnum, {
  name: 'BookingTimelineScalarFieldEnum',
})

@ArgsType()
class FindManyBookingTimeLineArgsStrict
  implements
    RestrictProperties<
      FindManyBookingTimeLineArgsStrict,
      Omit<Prisma.BookingTimelineFindManyArgs, 'include' | 'select' | 'omit'>
    >
{
  @Field(() => BookingTimeLineWhereInput, { nullable: true })
  where: Prisma.BookingTimelineWhereInput

  orderBy: BookingTimeLineOrderByWithRelationInput[]
  cursor: BookingTimeLineWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.BookingTimelineScalarFieldEnum])
  distinct: Prisma.BookingTimelineScalarFieldEnum[]
}

@ArgsType()
export class FindManyBookingTimeLineArgs extends PartialType(
  FindManyBookingTimeLineArgsStrict,
) {}

@ArgsType()
export class FindUniqueBookingTimeLineArgs {
  where: BookingTimeLineWhereUniqueInput
}
