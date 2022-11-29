import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { stall } from 'src/utils';

@Injectable()
export class GoogleCalendarService {
  constructor(@InjectQueue('google-calendar-queue') private filaQueue: Queue) {}

  async calendar(msg: string): Promise<boolean> {
    await this.filaQueue.add('google-calendar-job', { text: msg });

    return true;
  }
}
