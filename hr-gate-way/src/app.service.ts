import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private readonly logger = new Logger('Gateway - AppService');
  constructor() { }

  async getHelloAsync() {
   try {
    // const message = await this.authService.send('hello', '');
    return 'Hello World!';
   } catch (error) {
    this.logger.error(error);
    
   }
  }
}
