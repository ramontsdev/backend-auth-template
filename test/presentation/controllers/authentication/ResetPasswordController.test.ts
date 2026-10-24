import { describe, expect, it } from 'vitest';

import { makeConstructorDeps, makeHttpRequest } from '@test/helpers/fixtures';
import { ResetPasswordController } from '@/presentation/controllers/authentication/ResetPasswordController';

describe('ResetPasswordController', () => {
  it('returns bad request when body is invalid', async () => {
    const sut = new ResetPasswordController(...makeConstructorDeps(5));
    const response = await sut.handle(makeHttpRequest({ body: {} }));
    expect(response.statusCode).toBe(400);
  });
});
