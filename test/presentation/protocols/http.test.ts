import { describe, expect, it } from 'vitest';

describe('presentation/protocols/http.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/presentation/protocols/http')).resolves.toBeDefined();
  });
});
