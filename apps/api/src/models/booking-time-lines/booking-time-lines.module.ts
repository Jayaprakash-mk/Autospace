import { Module } from '@nestjs/common'
import { BookingTimeLinesService } from './graphql/booking-time-lines.service'
import { BookingTimeLinesResolver } from './graphql/booking-time-lines.resolver'
import { BookingTimeLinesController } from './rest/booking-time-lines.controller'

@Module({
  providers: [BookingTimeLinesResolver, BookingTimeLinesService],
  exports: [BookingTimeLinesService],
  controllers: [BookingTimeLinesController],
})
export class BookingTimeLinesModule {}
