import { GoogleCalendarProcessor } from './google-calendar/google-calendar.processor';
import { GoogleCalendarService } from './google-calendar/google-calendar.service';
import { GoogleCalendarController } from './google-calendar/google-calendar.controller';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'google-calendar-queue',
    }),
  ],
  controllers: [GoogleCalendarController],
  providers: [GoogleCalendarService, GoogleCalendarProcessor],
})
export class AppModule {}
