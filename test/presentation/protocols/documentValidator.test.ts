import { describe, expect, it } from 'vitest';

describe('presentation/protocols/documentValidator.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/presentation/protocols/documentValidator')).resolves.toBeDefined();
  });
});
