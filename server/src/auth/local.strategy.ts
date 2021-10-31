import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(loginId: string, password: string): Promise<any> {
    const personalProfile = await this.authService.validateLogin(loginId, password);
    console.log("validate");
    console.log(personalProfile);
    if (!personalProfile) {
      throw new UnauthorizedException();
    }
    return personalProfile;
  }
}