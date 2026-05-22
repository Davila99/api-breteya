import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  register(registerDto: RegisterDto) {
    return 'This action registers a new user';
  }

  login(loginDto: LoginDto) {
    return 'This action authenticates a user';
  }
}
