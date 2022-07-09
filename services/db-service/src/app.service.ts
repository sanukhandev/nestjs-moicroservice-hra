import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTenantDto } from './DTO/createTenant.dto';
import { Tenant } from './entities/tenant.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AppService {

  private readonly logger = new Logger('DB-service AppService');
  constructor(@InjectRepository(Tenant) private readonly tenantRepo: Repository<Tenant>) {}
  getHello(): string {
    return 'Hello World!';
  }

  async createTenant(body: CreateTenantDto) {
    this.logger.log(body);
    const res = await this.tenantRepo.save({ ...body, createdAt: new Date(), updatedAt: new Date(), status:1, database: uuid() });
    return res;
  }
 
}
