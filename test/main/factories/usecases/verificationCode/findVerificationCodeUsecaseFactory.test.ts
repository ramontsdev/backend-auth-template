import { describe, expect, it } from 'vitest';

import { makeFindVerificationCodeUsecase } from '@/main/factories/usecases/verificationCode/findVerificationCodeUsecaseFactory';

describe('makeFindVerificationCodeUsecase', () => {
  it('returns an instance', () => {
    expect(makeFindVerificationCodeUsecase()).toBeDefined();
  });
});
