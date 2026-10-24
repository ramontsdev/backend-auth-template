import { describe, expect, it } from 'vitest';

import { CodeGeneratorAdapter } from '@/main/adapters/CodeGeneratorAdapter';

describe('CodeGeneratorAdapter', () => {
  it('generates a 6-digit numeric code', async () => {
    const sut = new CodeGeneratorAdapter();
    const code = await sut.generate();
    expect(code).toMatch(/^\d{6}$/);
  });
});
