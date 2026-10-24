import { describe, expect, it } from 'vitest';

describe('server', () => {
  it('uses auth and user route modules', async () => {
    const [{ authRoutes }, { userRoutes }] = await Promise.all([
      import('@/main/routes/authRoutes'),
      import('@/main/routes/userRoutes'),
    ]);
    expect(authRoutes).toBeDefined();
    expect(userRoutes).toBeDefined();
  });
});
