import { describe, expect, it } from 'vitest';

describe('data/protocols/repositories/user/FindUserByDocumentRepository.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/data/protocols/repositories/user/FindUserByDocumentRepository')).resolves.toBeDefined();
  });
});
