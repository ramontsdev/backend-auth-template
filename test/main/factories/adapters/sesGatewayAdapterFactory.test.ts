import { describe, expect, it } from 'vitest';

import { makeSESGatewayAdapter } from '@/main/factories/adapters/sesGatewayAdapterFactory';

describe('makeSESGatewayAdapter', () => {
  it('returns an instance', () => {
    expect(makeSESGatewayAdapter()).toBeDefined();
  });
});
