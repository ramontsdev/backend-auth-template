import { describe, expect, it } from 'vitest';

describe('data/protocols/repositories/user/UpdateUserRepository.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/data/protocols/repositories/user/UpdateUserRepository')).resolves.toBeDefined();
  });
});
