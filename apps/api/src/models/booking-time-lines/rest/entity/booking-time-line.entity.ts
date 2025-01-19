import { $Enums, BookingTimeline } from '@prisma/client'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class BookingTimeLineEntity
  implements RestrictProperties<BookingTimeLineEntity, BookingTimeline>
{
  id: number
  timestamp: Date
  bookingId: number
  status: $Enums.BookingStatus

  @IsOptional()
  valetId: string

  @IsOptional()
  serviceId: string

  @IsOptional()
  managerId: string
}
