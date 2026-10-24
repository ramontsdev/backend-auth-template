import { describe, expect, it } from 'vitest';

import { makeResendVerificationCodeController } from '@/main/factories/controllers/authentication/resendVerificationCodeControllerFactory';

describe('makeResendVerificationCodeController', () => {
  it('returns an instance', () => {
    expect(makeResendVerificationCodeController()).toBeDefined();
  });
});
