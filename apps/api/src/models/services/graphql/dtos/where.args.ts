import { InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingTimeLineRelationFilter } from 'src/models/booking-time-lines/graphql/dtos/where.args'
import { CompanyRelationFilter } from 'src/models/companies/graphql/dtos/where.args'
import { ServiceAssignmentListRelationFilter } from 'src/models/service-assignments/graphql/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'

@InputType()
export class ServiceWhereUniqueInput {
  uid: string
}

@InputType()
export class ServiceWhereInputStrict
  implements
    RestrictProperties<ServiceWhereInputStrict, Prisma.ServiceWhereInput>
{
  uid: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  displayName: StringFilter
  image: StringFilter
  companyId: IntFilter
  User: UserRelationFilter
  Company: CompanyRelationFilter
  BookingTimeline: BookingTimeLineRelationFilter
  PickupAssignments: ServiceAssignmentListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ServiceWhereInput[]
  OR: ServiceWhereInput[]
  NOT: ServiceWhereInput[]
}

@InputType()
export class ServiceWhereInput extends PartialType(ServiceWhereInputStrict) {}

@InputType()
export class ServiceListRelationFilter {
  every?: ServiceWhereInput
  some?: ServiceWhereInput
  none?: ServiceWhereInput
}

@InputType()
export class ServiceRelationFilter {
  is?: ServiceWhereInput
  isNot?: ServiceWhereInput
}
