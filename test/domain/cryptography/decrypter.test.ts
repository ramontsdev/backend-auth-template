import { describe, expect, it } from 'vitest';

describe('domain/cryptography/decrypter.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/domain/cryptography/decrypter')).resolves.toBeDefined();
  });
});
