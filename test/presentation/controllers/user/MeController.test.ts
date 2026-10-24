import { describe, expect, it, vi } from 'vitest';

import { makeHttpRequest, makeUser } from '@test/helpers/fixtures';
import { MeController } from '@/presentation/controllers/user/MeController';

describe('MeController', () => {
  it('returns unauthorized when account is missing', async () => {
    const sut = new MeController({ findById: vi.fn() } as never);
    const response = await sut.handle(makeHttpRequest());
    expect(response.statusCode).toBe(401);
  });

  it('returns user without password when account exists', async () => {
    const user = makeUser();
    const sut = new MeController({ findById: vi.fn().mockResolvedValue(user) } as never);
    const response = await sut.handle(makeHttpRequest({ account: { userId: user.id } }));
    expect(response.statusCode).toBe(200);
    expect(response.body).not.toHaveProperty('password');
  });
});
