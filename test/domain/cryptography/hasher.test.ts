import { describe, expect, it } from 'vitest';

describe('domain/cryptography/hasher.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/domain/cryptography/hasher')).resolves.toBeDefined();
  });
});
