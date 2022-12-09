import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  singup() {
    return this.authService.singup();
  }

  @Post('signin')
  signin() {
    return this.authService.singin();
  }
}
