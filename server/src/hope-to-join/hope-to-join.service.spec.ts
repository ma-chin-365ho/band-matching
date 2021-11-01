import { Test, TestingModule } from '@nestjs/testing';
import { HopeToJoinService } from './hope-to-join.service';

describe('HopeToJoinService', () => {
  let service: HopeToJoinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HopeToJoinService],
    }).compile();

    service = module.get<HopeToJoinService>(HopeToJoinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
