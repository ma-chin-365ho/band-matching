import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BandMemberModule } from './band-member/band-member.module';
import { BandProfileModule } from './band-profile/band-profile.module';
import { MessageModule } from './message/message.module';
import { PersonalProfileModule } from './personal-profile/personal-profile.module';
import { AuthModule } from './auth/auth.module';
import { HopeToJoinModule } from './hope-to-join/hope-to-join.module';
import { HopeToWellcomeModule } from './hope-to-wellcome/hope-to-wellcome.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BandMemberModule, BandProfileModule, MessageModule, PersonalProfileModule, AuthModule, HopeToJoinModule, HopeToWellcomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
