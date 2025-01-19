import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { BookingOrderByWithRelationInput } from 'src/models/bookings/graphql/dtos/order-by.args'
import { ServiceOrderByWithRelationInput } from 'src/models/services/graphql/dtos/order-by.args'

@InputType()
export class ServiceAssignmentOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ServiceAssignmentOrderByWithRelationInputStrict,
      Omit<Prisma.ServiceAssignmentOrderByWithRelationInput, 'ServiceType'>
    >
{
  @Field(() => Prisma.SortOrder)
  serviceId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  bookingId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  serviceType: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  assignedServiceId: Prisma.SortOrder

  PickupService: ServiceOrderByWithRelationInput
  Booking: BookingOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class ServiceAssignmentOrderByWithRelationInput extends PartialType(
  ServiceAssignmentOrderByWithRelationInputStrict,
) {}

@InputType()
export class ServiceAssignmentOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
