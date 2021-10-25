import { Test, TestingModule } from '@nestjs/testing';
import { PersonalProfileService } from './personal-profile.service';

describe('PersonalProfileService', () => {
  let service: PersonalProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalProfileService],
    }).compile();

    service = module.get<PersonalProfileService>(PersonalProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
