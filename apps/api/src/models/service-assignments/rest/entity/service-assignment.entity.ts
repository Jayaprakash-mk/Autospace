import { $Enums, ServiceAssignment } from '@prisma/client'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ServiceAssignmentEntity
  implements RestrictProperties<ServiceAssignmentEntity, ServiceAssignment>
{
  createdAt: Date
  updatedAt: Date
  serviceId: number
  bookingId: number
  serviceType: $Enums.ServiceType

  @IsOptional()
  assignedServiceId: string
}
