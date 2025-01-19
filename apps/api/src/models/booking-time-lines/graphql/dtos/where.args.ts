import { Field, InputType, PartialType } from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingRelationFilter } from 'src/models/bookings/graphql/dtos/where.args'
import { ManagerRelationFilter } from 'src/models/managers/graphql/dtos/where.args'
import { ServiceRelationFilter } from 'src/models/services/graphql/dtos/where.args'
import { ValetRelationFilter } from 'src/models/valets/graphql/dtos/where.args'

@InputType()
export class BookingTimeLineWhereUniqueInput {
  id: number
}

@InputType()
export class BookingTimeLineWhereInputStrict
  implements
    RestrictProperties<
      BookingTimeLineWhereInputStrict,
      Prisma.BookingTimelineWhereInput
    >
{
  id: IntFilter
  timestamp: DateTimeFilter
  @Field(() => $Enums.BookingStatus)
  status: $Enums.BookingStatus
  bookingId: IntFilter
  valetId: StringFilter
  serviceId: StringFilter
  managerId: StringFilter
  Booking: BookingRelationFilter
  Valet: ValetRelationFilter
  Service: ServiceRelationFilter
  Manager: ManagerRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: BookingTimeLineWhereInput[]
  OR: BookingTimeLineWhereInput[]
  NOT: BookingTimeLineWhereInput[]
}

@InputType()
export class BookingTimeLineWhereInput extends PartialType(
  BookingTimeLineWhereInputStrict,
) {}

@InputType()
export class BookingTimeLineListRelationFilter {
  every?: BookingTimeLineWhereInput
  some?: BookingTimeLineWhereInput
  none?: BookingTimeLineWhereInput
}

@InputType()
export class BookingTimeLineRelationFilter {
  is?: BookingTimeLineWhereInput
  isNot?: BookingTimeLineWhereInput
}
