import { describe, expect, it } from 'vitest';

describe('domain/cryptography/hashComparer.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/domain/cryptography/hashComparer')).resolves.toBeDefined();
  });
});
