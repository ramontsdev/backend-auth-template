import { describe, expect, it } from 'vitest';

import { authRoutes } from '@/main/routes/authRoutes';

describe('authRoutes', () => {
  it('exports an express router', () => {
    expect(authRoutes).toBeDefined();
    expect(typeof authRoutes.use).toBe('function');
  });
});
