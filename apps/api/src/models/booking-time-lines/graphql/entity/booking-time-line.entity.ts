import { Field, ObjectType } from '@nestjs/graphql'
import { $Enums, BookingTimeline as BookingTimeLineType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class BookingTimeLine
  implements RestrictProperties<BookingTimeLine, BookingTimeLineType>
{
  id: number
  timestamp: Date
  status: $Enums.BookingStatus
  bookingId: number

  @Field({ nullable: true })
  valetId: string

  @Field({ nullable: true })
  serviceId: string

  @Field({ nullable: true })
  managerId: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
