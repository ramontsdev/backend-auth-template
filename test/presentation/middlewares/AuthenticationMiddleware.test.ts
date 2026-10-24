import { describe, expect, it, vi } from 'vitest';

import { makeHttpRequest, makeUser } from '@test/helpers/fixtures';
import { AuthenticationMiddleware } from '@/presentation/middlewares/AuthenticationMiddleware';

describe('AuthenticationMiddleware', () => {
  it('rejects missing authorization header', async () => {
    const sut = new AuthenticationMiddleware({ findById: vi.fn() } as never, {
      decrypt: vi.fn(),
    } as never);
    const response = await sut.handle(makeHttpRequest({ headers: {} }));
    expect(response.statusCode).toBe(401);
  });

  it('returns account when token is valid', async () => {
    const user = makeUser();
    const sut = new AuthenticationMiddleware(
      { findById: vi.fn().mockResolvedValue(user) },
      { decrypt: vi.fn().mockResolvedValue({ sub: user.id }) },
    );
    const response = await sut.handle(
      makeHttpRequest({ headers: { authorization: 'Bearer token' } }),
    );
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ account: { userId: user.id } });
  });
});
