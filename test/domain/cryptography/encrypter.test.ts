import { describe, expect, it } from 'vitest';

describe('domain/cryptography/encrypter.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/domain/cryptography/encrypter')).resolves.toBeDefined();
  });
});
