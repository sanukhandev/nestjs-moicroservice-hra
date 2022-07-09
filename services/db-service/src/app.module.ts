import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Tenant } from './entities/tenant.entity';
import { User } from './entities/user.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'mysql',
    password: 'password',
    port: 3306,
    username: 'root',
    database: 'prime_db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([
    Tenant,
    User
  ],
  )],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }
