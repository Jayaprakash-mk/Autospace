import { InputType, PickType } from '@nestjs/graphql'
import { Service } from '../entity/service.entity'

@InputType()
export class CreateServiceInput extends PickType(
  Service,
  ['uid', 'createdAt', 'updatedAt', 'displayName'],
  InputType,
) {}
