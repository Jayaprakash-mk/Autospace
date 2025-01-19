import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { BookingTimeLinesService } from './booking-time-lines.service'
import { BookingTimeLine } from './entity/booking-time-line.entity'
import {
  FindManyBookingTimeLineArgs,
  FindUniqueBookingTimeLineArgs,
} from './dtos/find.args'
import { CreateBookingTimeLineInput } from './dtos/create-booking-time-line.input'
import { UpdateBookingTimeLineInput } from './dtos/update-booking-time-line.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => BookingTimeLine)
export class BookingTimeLinesResolver {
  constructor(
    private readonly bookingTimeLinesService: BookingTimeLinesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => BookingTimeLine)
  createBookingTimeLine(
    @Args('createBookingTimeLineInput') args: CreateBookingTimeLineInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.id.toString())
    return this.bookingTimeLinesService.create(args)
  }

  @Query(() => [BookingTimeLine], { name: 'bookingTimeLines' })
  findAll(@Args() args: FindManyBookingTimeLineArgs) {
    return this.bookingTimeLinesService.findAll(args)
  }

  @Query(() => BookingTimeLine, { name: 'bookingTimeLine' })
  findOne(@Args() args: FindUniqueBookingTimeLineArgs) {
    return this.bookingTimeLinesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => BookingTimeLine)
  async updateBookingTimeLine(
    @Args('updateBookingTimeLineInput') args: UpdateBookingTimeLineInput,
    @GetUser() user: GetUserType,
  ) {
    const bookingTimeLine = await this.prisma.bookingTimeline.findUnique({
      where: { id: args.id },
    })
    checkRowLevelPermission(user, bookingTimeLine.id.toString())
    return this.bookingTimeLinesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => BookingTimeLine)
  async removeBookingTimeLine(
    @Args() args: FindUniqueBookingTimeLineArgs,
    @GetUser() user: GetUserType,
  ) {
    const bookingTimeLine = await this.prisma.bookingTimeline.findUnique(args)
    checkRowLevelPermission(user, bookingTimeLine.id.toString())
    return this.bookingTimeLinesService.remove(args)
  }
}
