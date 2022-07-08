import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger('AuthService - AppService');
  constructor(private readonly appService: AppService) {}

  @MessagePattern('hello')
  getHello(): string {
    this.logger.log('Hello world!');
    return this.appService.getHello();
  }
}
