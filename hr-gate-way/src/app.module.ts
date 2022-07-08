import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService, DBservice } from "./service.registery";
import { TenantController } from './tenant/tenant.controller';
import { TenantService } from './tenant/tenant.service';

@Module({
  imports: [ClientsModule.register([
    AuthService,
    DBservice
  ]),],
  controllers: [AppController, TenantController],
  providers: [AppService, TenantService],
})
export class AppModule { }
