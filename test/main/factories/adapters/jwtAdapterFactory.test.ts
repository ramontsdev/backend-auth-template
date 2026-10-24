import { describe, expect, it } from 'vitest';

import { makeJwtAdapter } from '@/main/factories/adapters/jwtAdapterFactory';

describe('makeJwtAdapter', () => {
  it('returns an instance', () => {
    expect(makeJwtAdapter()).toBeDefined();
  });
});
