import { describe, expect, it } from 'vitest';

import { setTestEnv } from '@test/helpers/fixtures';

describe('prismaClient', () => {
  it('exports a prisma client singleton', async () => {
    setTestEnv();
    const module = await import('@/infra/prisma/prismaClient');
    expect(module.prismaClient).toBeDefined();
  });
});
