import { Injectable } from '@nestjs/common';
import { PersonalProfileService } from '../personal-profile/personal-profile.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private personalProfileService: PersonalProfileService,
        private jwtService: JwtService
    ) {}

    async validateLogin(loginId: string, password: string): Promise<any> {
        const pp = await this.personalProfileService.findOneByLoginId(loginId);
        if (pp && pp.password === password) {
        const { password, ...result } = pp;
        return result;
        }
        return null;
    }

    async login(loginInput: any) {
        const payload = { username: loginInput.username };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
