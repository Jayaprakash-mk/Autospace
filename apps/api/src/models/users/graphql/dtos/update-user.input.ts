import { InputType, PartialType } from '@nestjs/graphql'
import { User } from '../entity/user.entity'

//TODO: This need to be changed due to changes made in Authentication and Authorization
@InputType()
export class UpdateUserInput extends PartialType(User) {
  uid: User['uid']
}
