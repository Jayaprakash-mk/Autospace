import { PickType } from '@nestjs/swagger'
import { BookingTimeLineEntity } from '../entity/booking-time-line.entity'

export class CreateBookingTimeLine extends PickType(BookingTimeLineEntity, [
  'id',
  'timestamp',
  'status',
  'bookingId',
]) {}
