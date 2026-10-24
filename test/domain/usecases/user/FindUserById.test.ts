import { describe, expect, it } from 'vitest';

describe('domain/usecases/user/FindUserById.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/domain/usecases/user/FindUserById')).resolves.toBeDefined();
  });
});
