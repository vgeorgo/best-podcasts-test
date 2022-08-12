import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PodcastController } from './podcast.controller';
import { Podcast } from './podcast.entity';
import { PodcastService } from './podcast.service';

@Module({
  imports: [TypeOrmModule.forFeature([Podcast])],
  controllers: [PodcastController],
  providers: [PodcastService],
})
export class PodcastModule {}
