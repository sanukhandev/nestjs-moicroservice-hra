import { Test, TestingModule } from '@nestjs/testing';
import { TenantProvider } from './tenant-provider';

describe('TenantProvider', () => {
  let provider: TenantProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TenantProvider],
    }).compile();

    provider = module.get<TenantProvider>(TenantProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
