import { Body, Controller, Logger, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateTenantDto } from 'src/DTO/createTenant.dto';
import { TenantService } from './tenant.service';

@UseGuards(JwtAuthGuard)
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
