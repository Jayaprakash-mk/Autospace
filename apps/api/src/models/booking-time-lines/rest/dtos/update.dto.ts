import { PartialType } from '@nestjs/swagger'
import { CreateBookingTimeLine } from './create.dto'
import { BookingTimeline } from '@prisma/client'

export class UpdateBookingTimeLine extends PartialType(CreateBookingTimeLine) {
  id: BookingTimeline['id']
}
