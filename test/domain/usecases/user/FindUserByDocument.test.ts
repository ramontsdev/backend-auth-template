import { describe, expect, it } from 'vitest';

describe('domain/usecases/user/FindUserByDocument.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/domain/usecases/user/FindUserByDocument')).resolves.toBeDefined();
  });
});
