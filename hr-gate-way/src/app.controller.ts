import { Body, Controller, Get, Post,  Request,  UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService:AuthService) {}

  @Get()
  getHello() {
    return this.appService.getHelloAsync();
  }

  @Post('login')
  login() {
    return this.authService.createToken({ username: "admin", password: "admin" });
  }

  @Post('verify-token')
  @UseGuards(JwtAuthGuard)
  verifyToken( @Request() req: any ){
    return req.user;
  }
}
