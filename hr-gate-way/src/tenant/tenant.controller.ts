import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CreateTenantDto } from 'src/DTO/createTenant.dto';
import { TenantService } from './tenant.service';

@Controller('tenant')
export class TenantController {
    private readonly logger = new Logger('TenantController');
    constructor(private tenantService: TenantService) { }
    @Post('create')
    async create(@Body() body: CreateTenantDto) {
        this.logger.log(body);
        const res = this.tenantService.create(body);
        return res;

    }
}
