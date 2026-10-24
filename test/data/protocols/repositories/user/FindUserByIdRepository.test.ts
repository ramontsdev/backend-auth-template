import { describe, expect, it } from 'vitest';

describe('data/protocols/repositories/user/FindUserByIdRepository.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/data/protocols/repositories/user/FindUserByIdRepository')).resolves.toBeDefined();
  });
});
