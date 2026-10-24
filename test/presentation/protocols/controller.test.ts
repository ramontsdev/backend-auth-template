import { describe, expect, it } from 'vitest';

describe('presentation/protocols/controller.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/presentation/protocols/controller')).resolves.toBeDefined();
  });
});
