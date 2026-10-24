import { describe, expect, it } from 'vitest';

describe('data/protocols/repositories/authentication/UpdatePasswordRepository.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/data/protocols/repositories/authentication/UpdatePasswordRepository')).resolves.toBeDefined();
  });
});
