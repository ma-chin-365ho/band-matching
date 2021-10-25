import { Module } from '@nestjs/common';
import { BandProfileService } from './band-profile.service';
import { BandProfileController } from './band-profile.controller';

import { BandProfile } from '../entities/bandProfile.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BandProfile])],
  providers: [BandProfileService],
  controllers: [BandProfileController]
})
export class BandProfileModule {}
