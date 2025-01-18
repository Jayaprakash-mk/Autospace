import { Injectable } from '@nestjs/common'
import { add } from '@autospace/sample-lib'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello User: ' + add(24, 25)
  }
}
