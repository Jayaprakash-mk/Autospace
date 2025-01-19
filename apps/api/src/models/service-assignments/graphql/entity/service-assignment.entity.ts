import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import {
  $Enums,
  ServiceAssignment as ServiceAssignmentType,
} from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType($Enums.ServiceType, {
  name: 'ServiceType',
})

@ObjectType()
export class ServiceAssignment
  implements RestrictProperties<ServiceAssignment, ServiceAssignmentType>
{
  createdAt: Date
  updatedAt: Date
  bookingId: number
  serviceId: number

  @Field(() => $Enums.ServiceType)
  serviceType: $Enums.ServiceType

  @Field({ nullable: true })
  assignedServiceId: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
