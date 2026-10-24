import { describe, expect, it } from 'vitest';

import { makeAuthenticationMiddleware } from '@/main/factories/middlewares/authenticationMiddlewareFactory';

describe('makeAuthenticationMiddleware', () => {
  it('returns an instance', () => {
    expect(makeAuthenticationMiddleware()).toBeDefined();
  });
});
