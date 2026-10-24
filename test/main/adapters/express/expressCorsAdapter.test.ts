import { describe, expect, it } from 'vitest';

import { expressCors } from '@/main/adapters/express/expressCorsAdapter';

describe('expressCors', () => {
  it('is defined', () => {
    expect(expressCors).toBeTypeOf('function');
  });
});
