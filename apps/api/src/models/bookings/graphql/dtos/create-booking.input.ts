import { InputType, PickType } from '@nestjs/graphql'
import { Booking } from '../entity/booking.entity'

@InputType()
export class CreateBookingInput extends PickType(
  Booking,
  [
    'customerId',
    'endTime',
    'startTime',
    'vehicleNumber',
    'phoneNumber',
    'slotId',
  ],
  InputType,
) {}
