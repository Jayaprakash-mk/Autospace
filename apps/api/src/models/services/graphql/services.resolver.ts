import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ServicesService } from './services.service'
import { Service } from './entity/service.entity'
import { FindManyServiceArgs, FindUniqueServiceArgs } from './dtos/find.args'
import { CreateServiceInput } from './dtos/create-service.input'
import { UpdateServiceInput } from './dtos/update-service.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => Service)
export class ServicesResolver {
  constructor(
    private readonly servicesService: ServicesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Service)
  createService(
    @Args('createServiceInput') args: CreateServiceInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.servicesService.create(args)
  }

  @Query(() => [Service], { name: 'services' })
  findAll(@Args() args: FindManyServiceArgs) {
    return this.servicesService.findAll(args)
  }

  @Query(() => Service, { name: 'service' })
  findOne(@Args() args: FindUniqueServiceArgs) {
    return this.servicesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Service)
  async updateService(
    @Args('updateServiceInput') args: UpdateServiceInput,
    @GetUser() user: GetUserType,
  ) {
    const service = await this.prisma.service.findUnique({
      where: { uid: args.uid },
    })
    checkRowLevelPermission(user, service.uid)
    return this.servicesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Service)
  async removeService(
    @Args() args: FindUniqueServiceArgs,
    @GetUser() user: GetUserType,
  ) {
    const service = await this.prisma.service.findUnique(args)
    checkRowLevelPermission(user, service.uid)
    return this.servicesService.remove(args)
  }
}
