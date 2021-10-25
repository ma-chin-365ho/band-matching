import { Test, TestingModule } from '@nestjs/testing';
import { BandMemberController } from './band-member.controller';

describe('BandMemberController', () => {
  let controller: BandMemberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BandMemberController],
    }).compile();

    controller = module.get<BandMemberController>(BandMemberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
