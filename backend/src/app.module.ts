// https://docs.nestjs.com/first-steps
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { PackagesModule } from './packages/packages.module';
import { TransportModule } from './transport/transport.module';
import { BookingModule } from './booking/booking.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule,
    PackagesModule,
    TransportModule,
    BookingModule,
    EmailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
