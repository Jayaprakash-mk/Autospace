import { CreateBookingTimeLineInput } from './create-booking-time-line.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { BookingTimeline } from '@prisma/client'

@InputType()
export class UpdateBookingTimeLineInput extends PartialType(
  CreateBookingTimeLineInput,
) {
  id: BookingTimeline['id']
}
