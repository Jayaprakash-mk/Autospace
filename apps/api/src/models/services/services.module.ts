import { Module } from '@nestjs/common'
import { ServicesService } from './graphql/services.service'
import { ServicesResolver } from './graphql/services.resolver'
import { ServicesController } from './rest/services.controller'

@Module({
  providers: [ServicesResolver, ServicesService],
  exports: [ServicesService],
  controllers: [ServicesController],
})
export class ServicesModule {}
