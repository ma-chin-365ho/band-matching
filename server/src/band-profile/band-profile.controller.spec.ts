import { Test, TestingModule } from '@nestjs/testing';
import { BandProfileController } from './band-profile.controller';

describe('BandProfileController', () => {
  let controller: BandProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BandProfileController],
    }).compile();

    controller = module.get<BandProfileController>(BandProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
