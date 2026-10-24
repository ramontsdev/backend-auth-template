import { describe, expect, it } from 'vitest';

describe('domain/usecases/user/CreateUser.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/domain/usecases/user/CreateUser')).resolves.toBeDefined();
  });
});
