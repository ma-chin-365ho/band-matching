import { Module } from '@nestjs/common';
import { BandProfileService } from './band-profile.service';
import { BandProfileController } from './band-profile.controller';

@Module({
  providers: [BandProfileService],
  controllers: [BandProfileController]
})
export class BandProfileModule {}
