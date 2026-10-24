import { describe, expect, it } from 'vitest';

import { adaptExpressRoute } from '@/main/adapters/express/expressRouteAdapter';

describe('adaptExpressRoute', () => {
  it('is defined', () => {
    expect(adaptExpressRoute).toBeTypeOf('function');
  });
});
