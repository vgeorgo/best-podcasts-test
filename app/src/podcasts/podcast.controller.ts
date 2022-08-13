import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { PaginationResponse } from 'src/common/response/pagination.response';
import { Podcast } from './podcast.entity';
import { PodcastService } from './podcast.service';

@Controller()
export class PodcastController {
  constructor(private readonly podcastService: PodcastService) {}

  @Get('/podcasts')
  findAll(): Promise<Podcast[]> {
    return this.podcastService.findAll();
  }

  @Get('/podcasts/:id')
  findOne(@Param('id') id: string): Promise<Podcast> {
    return this.podcastService.findOne(id);
  }

  @Get('/best_podcasts')
  async getBest(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ): Promise<PaginationResponse<Podcast>> {
    const response = await this.podcastService.paginate({
      page,
      limit,
    });
    return new PaginationResponse(response, 'podcasts');
  }
}
