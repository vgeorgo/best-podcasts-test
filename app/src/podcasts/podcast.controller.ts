import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PaginationQueryDto } from 'src/common/dtos/pagination-query.dto';
import { PaginationResponse } from 'src/common/response/pagination.response';
import { PodcastQueryDto } from './podcast-query.dto';
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
    @Query() pagination: PaginationQueryDto,
    @Query() where: PodcastQueryDto,
  ): Promise<PaginationResponse<Podcast>> {
    return new PaginationResponse(
      await this.podcastService.paginate(where, { ...pagination }),
      'podcasts',
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('/auth_best_podcasts')
  async getAuthBest(
    @Query() pagination: PaginationQueryDto,
    @Query() where: PodcastQueryDto,
  ): Promise<PaginationResponse<Podcast>> {
    return new PaginationResponse(
      await this.podcastService.paginate(where, { ...pagination }),
      'podcasts',
    );
  }
}
