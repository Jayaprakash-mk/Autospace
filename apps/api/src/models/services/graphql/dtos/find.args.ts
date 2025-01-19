import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ServiceOrderByWithRelationInput } from './order-by.args'
import { ServiceWhereInput, ServiceWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ServiceScalarFieldEnum, {
  name: 'ServiceScalarFieldEnum',
})

@ArgsType()
class FindManyServiceArgsStrict
  implements
    RestrictProperties<
      FindManyServiceArgsStrict,
      Omit<Prisma.ServiceFindManyArgs, 'include' | 'select' | 'omit'>
    >
{
  @Field(() => ServiceWhereInput, { nullable: true })
  where: Prisma.ServiceWhereInput

  orderBy: ServiceOrderByWithRelationInput[]
  cursor: ServiceWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ServiceScalarFieldEnum])
  distinct: Prisma.ServiceScalarFieldEnum[]
}

@ArgsType()
export class FindManyServiceArgs extends PartialType(
  FindManyServiceArgsStrict,
) {}

@ArgsType()
export class FindUniqueServiceArgs {
  where: ServiceWhereUniqueInput
}
