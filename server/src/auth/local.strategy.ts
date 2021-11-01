import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Logger } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  // この引数を変更する場合は、Customize Passportが必要。
  async validate(username: string, password: string): Promise<any> {

    const personalProfile = await this.authService.validateLogin(username, password);
    if (!personalProfile) {
      throw new UnauthorizedException();
    }
    return personalProfile;
  }
}