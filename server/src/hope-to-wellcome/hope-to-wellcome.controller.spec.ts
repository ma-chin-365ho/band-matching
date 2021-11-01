import { Test, TestingModule } from '@nestjs/testing';
import { HopeToWellcomeController } from './hope-to-wellcome.controller';

describe('HopeToWellcomeController', () => {
  let controller: HopeToWellcomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HopeToWellcomeController],
    }).compile();

    controller = module.get<HopeToWellcomeController>(HopeToWellcomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
