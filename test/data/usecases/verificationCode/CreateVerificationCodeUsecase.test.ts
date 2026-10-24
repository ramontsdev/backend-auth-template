import { describe, expect, it, vi } from 'vitest';

import { CreateVerificationCodeUsecase } from '@/data/usecases/verificationCode/CreateVerificationCodeUsecase';

describe('CreateVerificationCodeUsecase', () => {
  it('generates a code and persists it', async () => {
    const repository = { create: vi.fn().mockResolvedValue({ id: '1', code: '123456' }) };
    const codeGenerator = { generate: vi.fn().mockResolvedValue('123456') };
    const sut = new CreateVerificationCodeUsecase(repository as never, codeGenerator as never);
    await sut.create({
      email: 'user@example.com',
      expiresAt: new Date(),
      type: 'EMAIL_VERIFICATION',
    });
    expect(codeGenerator.generate).toHaveBeenCalled();
    expect(repository.create).toHaveBeenCalled();
  });
});
