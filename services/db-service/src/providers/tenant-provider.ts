import { Tenant } from "src/models/tenant.model";

export const TenantProvider = [{
    provide: 'TenantProvider',
    useValue: Tenant,
}];