import { describe, expect, it, vi } from 'vitest';

import { FindVerificationCodeUsecase } from '@/data/usecases/verificationCode/FindVerificationCodeUsecase';

describe('FindVerificationCodeUsecase', () => {
  it('delegates lookup to the repository', async () => {
    const repository = { findCode: vi.fn().mockResolvedValue(null) };
    const sut = new FindVerificationCodeUsecase(repository as never);
    await sut.find({ email: 'a@b.com', code: '123456', type: 'EMAIL_VERIFICATION' });
    expect(repository.findCode).toHaveBeenCalled();
  });
});
