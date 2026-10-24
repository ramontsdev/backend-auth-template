import { describe, expect, it } from 'vitest';

describe('data/protocols/CodeGenerator.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/data/protocols/CodeGenerator')).resolves.toBeDefined();
  });
});
