import { Field, InputType, PartialType } from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingRelationFilter } from 'src/models/bookings/graphql/dtos/where.args'
import { ServiceRelationFilter } from 'src/models/services/graphql/dtos/where.args'

@InputType()
export class ServiceAssignmentWhereUniqueInput {
  serviceId: number
}
@InputType()
export class EnumServiceTypeFilter {
  @Field(() => $Enums.ServiceType, { nullable: true })
  equals?: $Enums.ServiceType;
  @Field(() => [$Enums.ServiceType], { nullable: true })
  in?: $Enums.ServiceType[]
  @Field(() => [$Enums.ServiceType], { nullable: true })
  notIn?: $Enums.ServiceType[]
  @Field(() => $Enums.ServiceType, { nullable: true })
  not?: $Enums.ServiceType
}

@InputType()
export class ServiceAssignmentWhereInputStrict
  implements
    RestrictProperties<
      ServiceAssignmentWhereInputStrict,
      Prisma.ServiceAssignmentWhereInput
    >
{
  serviceId: IntFilter
  bookingId: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  serviceType: EnumServiceTypeFilter
  assignedServiceId: StringFilter
  PickupService: ServiceRelationFilter
  Booking: BookingRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ServiceAssignmentWhereInput[]
  OR: ServiceAssignmentWhereInput[]
  NOT: ServiceAssignmentWhereInput[]
}

@InputType()
export class ServiceAssignmentWhereInput extends PartialType(
  ServiceAssignmentWhereInputStrict,
) {}

@InputType()
export class ServiceAssignmentListRelationFilter {
  every?: ServiceAssignmentWhereInput
  some?: ServiceAssignmentWhereInput
  none?: ServiceAssignmentWhereInput
}

@InputType()
export class ServiceAssignmentRelationFilter {
  is?: ServiceAssignmentWhereInput
  isNot?: ServiceAssignmentWhereInput
}
