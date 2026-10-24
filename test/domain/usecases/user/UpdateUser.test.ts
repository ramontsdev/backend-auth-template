import { describe, expect, it } from 'vitest';

describe('domain/usecases/user/UpdateUser.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/domain/usecases/user/UpdateUser')).resolves.toBeDefined();
  });
});
