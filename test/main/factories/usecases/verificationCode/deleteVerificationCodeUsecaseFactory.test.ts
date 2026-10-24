import { describe, expect, it } from 'vitest';

import { makeDeleteVerificationCodeUsecase } from '@/main/factories/usecases/verificationCode/deleteVerificationCodeUsecaseFactory';

describe('makeDeleteVerificationCodeUsecase', () => {
  it('returns an instance', () => {
    expect(makeDeleteVerificationCodeUsecase()).toBeDefined();
  });
});
