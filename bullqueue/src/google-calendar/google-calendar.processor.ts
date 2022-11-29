import { stall } from 'src/utils';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('google-calendar-queue')
export class GoogleCalendarProcessor {
  @Process('google-calendar-job')
  handleCalendar(job: Job<unknown>) {
    stall(5000);
    console.log(job.data);
  }
}
