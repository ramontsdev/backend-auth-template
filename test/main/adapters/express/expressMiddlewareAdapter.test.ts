import { describe, expect, it } from 'vitest';

import { adaptExpressMiddleware } from '@/main/adapters/express/expressMiddlewareAdapter';

describe('adaptExpressMiddleware', () => {
  it('is defined', () => {
    expect(adaptExpressMiddleware).toBeTypeOf('function');
  });
});
