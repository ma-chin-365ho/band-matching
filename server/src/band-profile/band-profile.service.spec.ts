import { Test, TestingModule } from '@nestjs/testing';
import { BandProfileService } from './band-profile.service';

describe('BandProfileService', () => {
  let service: BandProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BandProfileService],
    }).compile();

    service = module.get<BandProfileService>(BandProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
