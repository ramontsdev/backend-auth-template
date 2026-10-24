import { describe, expect, it } from 'vitest';

import { makeFindVerificationCodeByEmailUsecase } from '@/main/factories/usecases/verificationCode/findVerificationCodeByEmailUsecaseFactory';

describe('makeFindVerificationCodeByEmailUsecase', () => {
  it('returns an instance', () => {
    expect(makeFindVerificationCodeByEmailUsecase()).toBeDefined();
  });
});
