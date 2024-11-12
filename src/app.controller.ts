import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('EVENTS_SERVICE') private eventsService: ClientProxy) {}

  @Get('events')
  async getEvents() {
    return this.eventsService.send({ cmd: 'get_events' }, {});
  }
}
