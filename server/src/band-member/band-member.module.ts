import { Module } from '@nestjs/common';
import { BandMemberService } from './band-member.service';
import { BandMemberController } from './band-member.controller';

@Module({
  providers: [BandMemberService],
  controllers: [BandMemberController]
})
export class BandMemberModule {}
