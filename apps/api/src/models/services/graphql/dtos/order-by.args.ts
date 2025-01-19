import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CompanyOrderByWithRelationInput } from 'src/models/companies/graphql/dtos/order-by.args'
import { ServiceAssignmentOrderByRelationAggregateInput } from 'src/models/service-assignments/graphql/dtos/order-by.args'
import { UserOrderByWithRelationInput } from 'src/models/users/graphql/dtos/order-by.args'
import { BookingTimeLineOrderByRelationAggregateInput } from 'src/models/booking-time-lines/graphql/dtos/order-by.args'

@InputType()
export class ServiceOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ServiceOrderByWithRelationInputStrict,
      Prisma.ServiceOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  displayName: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  image: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  companyId: Prisma.SortOrder

  User: UserOrderByWithRelationInput
  Company: CompanyOrderByWithRelationInput
  BookingTimeline: BookingTimeLineOrderByRelationAggregateInput
  PickupAssignments: ServiceAssignmentOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class ServiceOrderByWithRelationInput extends PartialType(
  ServiceOrderByWithRelationInputStrict,
) {}

@InputType()
export class ServiceOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
