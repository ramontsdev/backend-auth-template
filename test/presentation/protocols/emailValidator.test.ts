import { describe, expect, it } from 'vitest';

describe('presentation/protocols/emailValidator.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/presentation/protocols/emailValidator')).resolves.toBeDefined();
  });
});
