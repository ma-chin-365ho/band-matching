import { Test, TestingModule } from '@nestjs/testing';
import { BandMemberService } from './band-member.service';

describe('BandMemberService', () => {
  let service: BandMemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BandMemberService],
    }).compile();

    service = module.get<BandMemberService>(BandMemberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
