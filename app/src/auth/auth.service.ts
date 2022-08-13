import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(): Promise<any> {
    // Only returning fake user data, since database still do not have users
    return { userId: 'fake_id', username: 'fake_username' };
  }

  async login(user: any) {
    const { userId, username } = user;

    return {
      access_token: this.jwtService.sign({ userId, username }),
    };
  }
}
