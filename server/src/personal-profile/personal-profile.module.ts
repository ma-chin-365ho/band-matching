import { Module } from '@nestjs/common';
import { PersonalProfileService } from './personal-profile.service';
import { PersonalProfileController } from './personal-profile.controller';

import { PersonalProfile } from '../entities/personalProfile.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalProfile])],
  providers: [PersonalProfileService],
  controllers: [PersonalProfileController]
})
export class PersonalProfileModule {}
