import { describe, expect, it } from 'vitest';

import { makeConstructorDeps, makeHttpRequest } from '@test/helpers/fixtures';
import { SignInController } from '@/presentation/controllers/authentication/SignInController';

describe('SignInController', () => {
  it('returns bad request when body is invalid', async () => {
    const sut = new SignInController(...makeConstructorDeps(3));
    const response = await sut.handle(makeHttpRequest({ body: {} }));
    expect(response.statusCode).toBe(400);
  });
});
