import { GoogleCalendarService } from './google-calendar.service';
import { Controller, Get } from '@nestjs/common';

import { stall } from 'src/utils';

@Controller('google-calendar')
export class GoogleCalendarController {
  constructor(private readonly googleService: GoogleCalendarService) {}

  @Get('/calendar')
  async calendar() {
    await stall(10000);
    this.googleService.calendar(
      `Job inserted now: ${new Date().toLocaleString()}`,
    );
  }
}
