import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ServiceAssignmentOrderByWithRelationInput } from './order-by.args'
import {
  ServiceAssignmentWhereInput,
  ServiceAssignmentWhereUniqueInput,
} from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ServiceAssignmentScalarFieldEnum, {
  name: 'ServiceAssignmentScalarFieldEnum',
})

@ArgsType()
class FindManyServiceAssignmentArgsStrict
  implements
    RestrictProperties<
      FindManyServiceAssignmentArgsStrict,
      Omit<Prisma.ServiceAssignmentFindManyArgs, 'include' | 'select' | 'omit'>
    >
{
  @Field(() => ServiceAssignmentWhereInput, { nullable: true })
  where: Prisma.ServiceAssignmentWhereInput

  orderBy: ServiceAssignmentOrderByWithRelationInput[]
  cursor: ServiceAssignmentWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ServiceAssignmentScalarFieldEnum])
  distinct: Prisma.ServiceAssignmentScalarFieldEnum[]
}

@ArgsType()
export class FindManyServiceAssignmentArgs extends PartialType(
  FindManyServiceAssignmentArgsStrict,
) {}

@ArgsType()
export class FindUniqueServiceAssignmentArgs {
  where: ServiceAssignmentWhereUniqueInput
}
