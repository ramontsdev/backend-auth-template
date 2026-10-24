import { describe, expect, it, vi } from 'vitest';

import { FindVerificationCodeByEmailUsecase } from '@/data/usecases/verificationCode/FindVerificationCodeByEmailUsecase';

describe('FindVerificationCodeByEmailUsecase', () => {
  it('delegates lookup by email to the repository', async () => {
    const repository = { findCodeByEmail: vi.fn().mockResolvedValue(null) };
    const sut = new FindVerificationCodeByEmailUsecase(repository as never);
    await sut.findByEmail({ email: 'a@b.com', type: 'EMAIL_VERIFICATION' });
    expect(repository.findCodeByEmail).toHaveBeenCalled();
  });
});
