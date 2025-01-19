import { InputType, PickType } from '@nestjs/graphql'
import { BookingTimeLine } from '../entity/booking-time-line.entity'

@InputType()
export class CreateBookingTimeLineInput extends PickType(
  BookingTimeLine,
  ['id', 'timestamp', 'bookingId', 'status'],
  InputType,
) {}
