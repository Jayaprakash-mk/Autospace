import { InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { CompanyRelationFilter } from 'src/models/companies/graphql/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'
import { ValetAssignmentListRelationFilter } from 'src/models/valet-assignments/graphql/dtos/where.args'
import { BookingTimeLineListRelationFilter } from 'src/models/booking-time-lines/graphql/dtos/where.args'

@InputType()
export class ValetWhereUniqueInput {
  uid: string
}

@InputType()
export class ValetWhereInputStrict
  implements RestrictProperties<ValetWhereInputStrict, Prisma.ValetWhereInput>
{
  User: UserRelationFilter
  uid: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  displayName: StringFilter
  image: StringFilter
  licenceID: StringFilter
  companyId: IntFilter
  Company: CompanyRelationFilter
  BookingTimeline: BookingTimeLineListRelationFilter
  PickupAssignments: ValetAssignmentListRelationFilter
  ReturnAssignments: ValetAssignmentListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ValetWhereInput[]
  OR: ValetWhereInput[]
  NOT: ValetWhereInput[]
}

@InputType()
export class ValetWhereInput extends PartialType(ValetWhereInputStrict) {}

@InputType()
export class ValetListRelationFilter {
  every?: ValetWhereInput
  some?: ValetWhereInput
  none?: ValetWhereInput
}

@InputType()
export class ValetRelationFilter {
  is?: ValetWhereInput
  isNot?: ValetWhereInput
}
