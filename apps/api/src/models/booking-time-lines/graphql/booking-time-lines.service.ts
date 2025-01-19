import { Injectable } from '@nestjs/common'
import {
  FindManyBookingTimeLineArgs,
  FindUniqueBookingTimeLineArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateBookingTimeLineInput } from './dtos/create-booking-time-line.input'
import { UpdateBookingTimeLineInput } from './dtos/update-booking-time-line.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class BookingTimeLinesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createBookingTimeLineInput: CreateBookingTimeLineInput) {
    return this.prisma.bookingTimeline.create({
      data: createBookingTimeLineInput,
    })
  }

  findAll(args: FindManyBookingTimeLineArgs) {
    //change later
    return this.prisma.bookingTimeline.findMany(
      args as Prisma.BookingTimelineFindManyArgs,
    )
  }

  findOne(args: FindUniqueBookingTimeLineArgs) {
    return this.prisma.bookingTimeline.findUnique(args)
  }

  update(updateBookingTimeLineInput: UpdateBookingTimeLineInput) {
    const { id, ...data } = updateBookingTimeLineInput
    return this.prisma.bookingTimeline.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueBookingTimeLineArgs) {
    return this.prisma.bookingTimeline.delete(args)
  }
}
