import { Module } from '@nestjs/common';
import { HopeToWellcomeService } from './hope-to-wellcome.service';
import { HopeToWellcomeController } from './hope-to-wellcome.controller';

import { HopeToWellcome } from '../entities/hopeToWellcome.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([HopeToWellcome])],
  providers: [HopeToWellcomeService],
  controllers: [HopeToWellcomeController]
})
export class HopeToWellcomeModule {}
