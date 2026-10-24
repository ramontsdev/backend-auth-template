import { describe, expect, it } from 'vitest';

import { userRoutes } from '@/main/routes/userRoutes';

describe('userRoutes', () => {
  it('exports an express router', () => {
    expect(userRoutes).toBeDefined();
    expect(typeof userRoutes.use).toBe('function');
  });
});
