import { Service } from '@prisma/client'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ServiceEntity
  implements RestrictProperties<ServiceEntity, Service>
{
  uid: string
  createdAt: Date
  updatedAt: Date
  displayName: string

  @IsOptional()
  image: string

  companyId: number
}
