import { Test, TestingModule } from '@nestjs/testing';
import { PodcastController } from './podcast.controller';
import { PodcastService } from './podcast.service';

describe('PodcastController', () => {
  let controller: PodcastController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PodcastController],
      providers: [PodcastService],
    }).compile();

    controller = app.get<PodcastController>(PodcastController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(controller.getBest()).toBe('Hello World!');
    });
  });
});
