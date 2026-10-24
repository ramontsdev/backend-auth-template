import { describe, expect, it, vi } from 'vitest';

import { DeleteVerificationCodeUsecase } from '@/data/usecases/verificationCode/DeleteVerificationCodeUsecase';

describe('DeleteVerificationCodeUsecase', () => {
  it('delegates deletion to the repository', async () => {
    const repository = { deleteCode: vi.fn().mockResolvedValue(undefined) };
    const sut = new DeleteVerificationCodeUsecase(repository as never);
    await sut.delete({ email: 'a@b.com', code: '123456', type: 'EMAIL_VERIFICATION' });
    expect(repository.deleteCode).toHaveBeenCalled();
  });
});
