import { describe, expect, it } from 'vitest';

import { makeConstructorDeps, makeHttpRequest } from '@test/helpers/fixtures';
import { SignUpController } from '@/presentation/controllers/authentication/SignUpController';

describe('SignUpController', () => {
  it('returns bad request when body is invalid', async () => {
    const sut = new SignUpController(...makeConstructorDeps(6));
    const response = await sut.handle(makeHttpRequest({ body: {} }));
    expect(response.statusCode).toBe(400);
  });
});
