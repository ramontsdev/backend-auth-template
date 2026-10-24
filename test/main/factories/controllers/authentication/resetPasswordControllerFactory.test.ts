import { describe, expect, it } from 'vitest';

import { makeResetPasswordController } from '@/main/factories/controllers/authentication/resetPasswordControllerFactory';

describe('makeResetPasswordController', () => {
  it('returns an instance', () => {
    expect(makeResetPasswordController()).toBeDefined();
  });
});
