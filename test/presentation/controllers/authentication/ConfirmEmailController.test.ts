import { describe, expect, it } from 'vitest';

import { makeConstructorDeps, makeHttpRequest } from '@test/helpers/fixtures';
import { ConfirmEmailController } from '@/presentation/controllers/authentication/ConfirmEmailController';

describe('ConfirmEmailController', () => {
  it('returns bad request when body is invalid', async () => {
    const sut = new ConfirmEmailController(...makeConstructorDeps(4));
    const response = await sut.handle(makeHttpRequest({ body: {} }));
    expect(response.statusCode).toBe(400);
  });
});
