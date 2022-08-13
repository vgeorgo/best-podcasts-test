import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { NoPaginationPipe } from 'src/common/pipes/no-pagination.pipe';
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
    @Query(new NoPaginationPipe()) where = {},
  ): Promise<PaginationResponse<Podcast>> {
    return new PaginationResponse(
      await this.podcastService.paginate(where, { page, limit }),
      'podcasts',
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('/auth_best_podcasts')
  async getAuthBest(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    @Query(new NoPaginationPipe()) where = {},
  ): Promise<PaginationResponse<Podcast>> {
    return new PaginationResponse(
      await this.podcastService.paginate(where, { page, limit }),
      'podcasts',
    );
  }
}
