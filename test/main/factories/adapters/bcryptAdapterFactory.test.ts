import { describe, expect, it } from 'vitest';

import { makeBcryptAdapter } from '@/main/factories/adapters/bcryptAdapterFactory';

describe('makeBcryptAdapter', () => {
  it('returns an instance', () => {
    expect(makeBcryptAdapter()).toBeDefined();
  });
});
