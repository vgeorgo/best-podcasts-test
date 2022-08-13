import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(): Promise<any> {
    // Since we do not have users, no need to provide any data to find the fake user
    const user = await this.authService.validateUser();
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
