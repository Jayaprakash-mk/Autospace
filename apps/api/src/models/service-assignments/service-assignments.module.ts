import { Module } from '@nestjs/common'
import { ServiceAssignmentsService } from './graphql/service-assignments.service'
import { ServiceAssignmentsResolver } from './graphql/service-assignments.resolver'
import { ServiceAssignmentsController } from './rest/service-assignments.controller'

@Module({
  providers: [ServiceAssignmentsResolver, ServiceAssignmentsService],
  exports: [ServiceAssignmentsService],
  controllers: [ServiceAssignmentsController],
})
export class ServiceAssignmentsModule {}
