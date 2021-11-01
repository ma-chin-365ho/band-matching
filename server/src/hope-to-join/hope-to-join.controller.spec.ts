import { Test, TestingModule } from '@nestjs/testing';
import { HopeToJoinController } from './hope-to-join.controller';

describe('HopeToJoinController', () => {
  let controller: HopeToJoinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HopeToJoinController],
    }).compile();

    controller = module.get<HopeToJoinController>(HopeToJoinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
