import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ServiceAssignmentsService } from './service-assignments.service'
import { ServiceAssignment } from './entity/service-assignment.entity'
import {
  FindManyServiceAssignmentArgs,
  FindUniqueServiceAssignmentArgs,
} from './dtos/find.args'
import { CreateServiceAssignmentInput } from './dtos/create-service-assignment.input'
import { UpdateServiceAssignmentInput } from './dtos/update-service-assignment.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => ServiceAssignment)
export class ServiceAssignmentsResolver {
  constructor(
    private readonly serviceAssignmentsService: ServiceAssignmentsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => ServiceAssignment)
  createServiceAssignment(
    @Args('createServiceAssignmentInput') args: CreateServiceAssignmentInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.bookingId.toString())
    return this.serviceAssignmentsService.create(args)
  }

  @Query(() => [ServiceAssignment], { name: 'serviceAssignments' })
  findAll(@Args() args: FindManyServiceAssignmentArgs) {
    return this.serviceAssignmentsService.findAll(args)
  }

  @Query(() => ServiceAssignment, { name: 'serviceAssignment' })
  findOne(@Args() args: FindUniqueServiceAssignmentArgs) {
    return this.serviceAssignmentsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => ServiceAssignment)
  async updateServiceAssignment(
    @Args('updateServiceAssignmentInput') args: UpdateServiceAssignmentInput,
    @GetUser() user: GetUserType,
  ) {
    const serviceAssignment = await this.prisma.serviceAssignment.findUnique({
      where: { serviceId: args.serviceId },
    })
    checkRowLevelPermission(user, serviceAssignment.bookingId.toString())
    return this.serviceAssignmentsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => ServiceAssignment)
  async removeServiceAssignment(
    @Args() args: FindUniqueServiceAssignmentArgs,
    @GetUser() user: GetUserType,
  ) {
    const serviceAssignment =
      await this.prisma.serviceAssignment.findUnique(args)
    checkRowLevelPermission(user, serviceAssignment.bookingId.toString())
    return this.serviceAssignmentsService.remove(args)
  }
}
