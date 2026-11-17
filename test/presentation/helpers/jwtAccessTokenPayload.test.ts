import { describe, expect, it } from 'vitest';

import { parseJwtAccessTokenPayload } from '@/presentation/helpers/jwtAccessTokenPayload';

describe('parseJwtAccessTokenPayload', () => {
  it('returns null when sub is missing or invalid', () => {
    expect(parseJwtAccessTokenPayload(null)).toBeNull();
    expect(parseJwtAccessTokenPayload({})).toBeNull();
    expect(parseJwtAccessTokenPayload({ sub: 1 })).toBeNull();
    expect(parseJwtAccessTokenPayload({ sub: '' })).toBeNull();
  });

  it('returns payload when sub is a non-empty string', () => {
    expect(parseJwtAccessTokenPayload({ sub: 'user-id' })).toEqual({ sub: 'user-id' });
  });
});