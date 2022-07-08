import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTenantDto } from './DTO/createTenant.dto';
import { Tenant } from './models/tenant.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AppService {

  private readonly logger = new Logger('DB-service AppService');
  constructor(@Inject('TenantProvider') private tenantModel: typeof Tenant) {}
  getHello(): string {
    return 'Hello World!';
  }

  async createTenant(body: CreateTenantDto) {
    this.logger.log(body);
    return await this.tenantModel.create({...body, createdAt: new Date(), updatedAt: new Date(), database: body.name + '_'+uuid(),table:''});
  }
  async createTenantDb(body: CreateTenantDto) {
    this.logger.log(body);
    return await this.tenantModel.create({...body, createdAt: new Date(), updatedAt: new Date(), database: body.name + '_'+uuid(),table:''});
  }
}
