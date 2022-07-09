import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, getManager, Repository } from 'typeorm';
import { CreateTenantDto } from './DTO/createTenant.dto';
import { Tenant } from './entities/tenant.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AppService {

  private readonly logger = new Logger('DB-service AppService');
  constructor(@InjectRepository(Tenant) private readonly tenantRepo: Repository<Tenant>) { }
  getHello(): string {
    return 'Hello World!';
  }

  async createTenant(body: CreateTenantDto) {
    this.logger.log(body);
    const dbName = body.name + (uuid()).split('-')[0];
    const res = await this.tenantRepo.save({ ...body, createdAt: new Date(), updatedAt: new Date(), status: 1, database: dbName });
    const dataSource: DataSource = new DataSource({
      type: 'mysql',
      host: 'mysql',
      password: 'password',
      port: 3306,
      username: 'root',
    });
    await (await dataSource.initialize()).query(`CREATE DATABASE ${res.database}`);
    await this.migrateTable(res.database);
    return res;
  }

  async migrateTable(database: string) {
    const dataSource: DataSource = new DataSource({
      type: 'mysql',
      host: 'mysql',
      password: 'password',
      port: 3306,
      username: 'root',
      database: database,
      entities: [__dirname + '/**/*.org.entity{.ts,.js}'],
    });
    await (await dataSource.initialize()).synchronize();
  }
}
