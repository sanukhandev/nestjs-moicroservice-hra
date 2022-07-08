import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTenantDto } from 'src/DTO/createTenant.dto';

@Injectable()
export class TenantService {
    private readonly logger = new Logger('TenantService');
    constructor(@Inject('dbService') private readonly dbService:ClientProxy) {}
    async create(body: CreateTenantDto) {
       const res = await this.dbService.send<CreateTenantDto>('createTenant', body)
       return res;
    }
}
