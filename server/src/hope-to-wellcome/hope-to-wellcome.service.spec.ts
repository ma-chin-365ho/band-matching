import { Test, TestingModule } from '@nestjs/testing';
import { HopeToWellcomeService } from './hope-to-wellcome.service';

describe('HopeToWellcomeService', () => {
  let service: HopeToWellcomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HopeToWellcomeService],
    }).compile();

    service = module.get<HopeToWellcomeService>(HopeToWellcomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
