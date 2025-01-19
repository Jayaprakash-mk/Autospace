import { Field, ObjectType } from '@nestjs/graphql'
import { Service as ServiceType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Service implements RestrictProperties<Service, ServiceType> {
  createdAt: Date
  updatedAt: Date

  @Field({ nullable: true })
  image: string

  uid: string
  displayName: string

  @Field({ nullable: true })
  companyId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
