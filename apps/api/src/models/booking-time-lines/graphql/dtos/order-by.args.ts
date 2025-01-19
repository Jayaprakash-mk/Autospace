import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { BookingOrderByWithRelationInput } from 'src/models/bookings/graphql/dtos/order-by.args'
import { ManagerOrderByWithRelationInput } from 'src/models/managers/graphql/dtos/order-by.args'
import { ServiceOrderByWithRelationInput } from 'src/models/services/graphql/dtos/order-by.args'
import { ValetOrderByWithRelationInput } from 'src/models/valets/graphql/dtos/order-by.args'

@InputType()
export class BookingTimeLineOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      BookingTimeLineOrderByWithRelationInputStrict,
      Prisma.BookingTimelineOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  timestamp: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  status: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  bookingId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  valetId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  managerId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  serviceId: Prisma.SortOrder

  Booking: BookingOrderByWithRelationInput
  Valet: ValetOrderByWithRelationInput
  Manager: ManagerOrderByWithRelationInput
  Service: ServiceOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class BookingTimeLineOrderByWithRelationInput extends PartialType(
  BookingTimeLineOrderByWithRelationInputStrict,
) {}

@InputType()
export class BookingTimeLineOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
