import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Tenant } from './models/tenant.model';
import { TenantProvider } from './providers/tenant-provider';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'mysql',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'prime_db',
    models: [Tenant],
    autoLoadModels: true,
    synchronize: true,
  })], 
  controllers: [AppController],
  providers: [AppService, ...TenantProvider],
})
export class AppModule {}
