import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { Podcast } from './podcast.entity';

@Injectable()
export class PodcastService {
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

  async paginate(options: IPaginationOptions): Promise<Pagination<Podcast>> {
    return paginate<Podcast>(this.podcastsRepository, options);
  }
}
