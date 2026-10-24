import { describe, expect, it } from 'vitest';

import { makeConstructorDeps, makeHttpRequest } from '@test/helpers/fixtures';
import { ResendVerificationCodeController } from '@/presentation/controllers/authentication/ResendVerificationCodeController';

describe('ResendVerificationCodeController', () => {
  it('returns bad request when body is invalid', async () => {
    const sut = new ResendVerificationCodeController(...makeConstructorDeps(5));
    const response = await sut.handle(makeHttpRequest({ body: {} }));
    expect(response.statusCode).toBe(400);
  });
});
