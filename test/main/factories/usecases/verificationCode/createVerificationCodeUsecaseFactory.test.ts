import { describe, expect, it } from 'vitest';

import { makeCreateVerificationCodeUsecase } from '@/main/factories/usecases/verificationCode/createVerificationCodeUsecaseFactory';

describe('makeCreateVerificationCodeUsecase', () => {
  it('returns an instance', () => {
    expect(makeCreateVerificationCodeUsecase()).toBeDefined();
  });
});
