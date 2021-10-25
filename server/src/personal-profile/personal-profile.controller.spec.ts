import { Test, TestingModule } from '@nestjs/testing';
import { PersonalProfileController } from './personal-profile.controller';

describe('PersonalProfileController', () => {
  let controller: PersonalProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalProfileController],
    }).compile();

    controller = module.get<PersonalProfileController>(PersonalProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
