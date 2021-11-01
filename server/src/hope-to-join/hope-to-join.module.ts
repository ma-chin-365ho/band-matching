import { Module } from '@nestjs/common';
import { HopeToJoinService } from './hope-to-join.service';
import { HopeToJoinController } from './hope-to-join.controller';

import { HopeToJoin } from '../entities/hopeToJoin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([HopeToJoin])],
  providers: [HopeToJoinService],
  controllers: [HopeToJoinController]
})
export class HopeToJoinModule {}
