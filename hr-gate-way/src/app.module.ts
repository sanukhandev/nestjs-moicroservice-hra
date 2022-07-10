import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBservice } from "./service.registery";
import { TenantController } from './tenant/tenant.controller';
import { TenantService } from './tenant/tenant.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ClientsModule.register([
    DBservice
  ]), AuthModule,],
  controllers: [AppController, TenantController],
  providers: [AppService, TenantService],
})
export class AppModule { }
