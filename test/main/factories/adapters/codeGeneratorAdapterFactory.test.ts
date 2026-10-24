import { describe, expect, it } from 'vitest';

import { makeCodeGeneratorAdapter } from '@/main/factories/adapters/codeGeneratorAdapterFactory';

describe('makeCodeGeneratorAdapter', () => {
  it('returns an instance', () => {
    expect(makeCodeGeneratorAdapter()).toBeDefined();
  });
});
