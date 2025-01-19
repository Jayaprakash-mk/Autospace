import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { JwtModule } from '@nestjs/jwt'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { PrismaModule } from './common/prisma/prisma.module'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigModule } from '@nestjs/config'
import { UsersModule } from './models/users/users.module'
import { AddressesModule } from './models/addresses/addresses.module'
import { BookingTimeLinesModule } from './models/booking-time-lines/booking-time-lines.module'
import { AdminsModule } from './models/admins/admins.module'
import { BookingsModule } from './models/bookings/bookings.module'
import { CompaniesModule } from './models/companies/companies.module'
import { CustomersModule } from './models/customers/customers.module'
import { GaragesModule } from './models/garages/garages.module'
import { ManagersModule } from './models/managers/managers.module'
import { ReviewsModule } from './models/reviews/reviews.module'
import { SlotsModule } from './models/slots/slots.module'
import { ValetAssignmentsModule } from './models/valet-assignments/valet-assignments.module'
import { ValetsModule } from './models/valets/valets.module'
import { VerificationsModule } from './models/verifications/verifications.module'
import { ServicesModule } from './models/services/services.module'
import { ServiceAssignmentsModule } from './models/service-assignments/service-assignments.module'

const MAX_AGE = 24 * 60 * 60

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: MAX_AGE },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      introspection: true,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
    }),

    PrismaModule,
    UsersModule,
    AdminsModule,
    CustomersModule,
    ManagersModule,
    ValetsModule,
    ServicesModule,
    CompaniesModule,
    GaragesModule,
    AddressesModule,
    SlotsModule,
    BookingsModule,
    ValetAssignmentsModule,
    ServiceAssignmentsModule,
    BookingTimeLinesModule,
    ReviewsModule,
    VerificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
