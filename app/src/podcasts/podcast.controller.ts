import { Controller, Get } from '@nestjs/common';
import { PodcastService } from './podcast.service';

@Controller()
export class PodcastController {
  constructor(private readonly podcastService: PodcastService) {}

  @Get('/best_podcasts')
  getBest(): Array<object> {
    return this.podcastService.getBest();
  }
}
