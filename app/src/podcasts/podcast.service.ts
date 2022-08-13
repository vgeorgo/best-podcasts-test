import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { createFindOptionsWhere } from 'src/common/helpers/query.helper';
import { QueryConfig } from 'src/common/interfaces/query-config.interface';
import { Repository } from 'typeorm';
import { PodcastQueryDto } from './podcast-query.dto';
import { Podcast } from './podcast.entity';

@Injectable()
export class PodcastService {
  queryConfig: QueryConfig = {
    mapColumn: new Map<string, string>([['genre_id', 'genre_ids']]),
    equal: [
      'id',
      'explicit_content',
      'itunes_id',
      'language',
      'country',
      'is_claimed',
      'type',
    ],
    partial: ['title', 'publisher'],
    jsonArrayContains: ['genre_id'],
  };

  constructor(
    @InjectRepository(Podcast)
    private podcastsRepository: Repository<Podcast>,
  ) {}

  findAll(): Promise<Podcast[]> {
    return this.podcastsRepository.find();
  }

  findOne(id: string): Promise<Podcast> {
    return this.podcastsRepository.findOneBy({ id });
  }

  async paginate(
    podcastDto: PodcastQueryDto,
    options: IPaginationOptions,
  ): Promise<Pagination<Podcast>> {
    return paginate<Podcast>(this.podcastsRepository, options, {
      where: createFindOptionsWhere(this.queryConfig, podcastDto),
    });
  }
}
