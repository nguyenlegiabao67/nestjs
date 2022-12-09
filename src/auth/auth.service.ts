import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  singup() {
    return {
      message: 'Signed up',
    };
  }

  singin() {
    return {
      message: 'Signed in',
    };
  }
}
