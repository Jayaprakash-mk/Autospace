import { PickType } from '@nestjs/swagger'
import { CompanyEntity } from '../entity/company.entity'

export class CreateCompany extends PickType(CompanyEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
