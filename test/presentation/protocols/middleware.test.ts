import { describe, expect, it } from 'vitest';

describe('presentation/protocols/middleware.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/presentation/protocols/middleware')).resolves.toBeDefined();
  });
});
