import { describe, expect, it, vi } from 'vitest';

import { makeVerificationCode } from '@test/helpers/fixtures';
import { VerificationCodePrismaRepository } from '@/infra/prisma/VerificationCodePrismaRepository';

describe('VerificationCodePrismaRepository', () => {
  it('creates a verification code via prisma client', async () => {
    const code = makeVerificationCode();
    const prismaClient = {
      verificationCode: {
        create: vi.fn().mockResolvedValue(code),
        findUnique: vi.fn(),
        findFirst: vi.fn(),
        delete: vi.fn(),
      },
    };
    const sut = new VerificationCodePrismaRepository(prismaClient as never);
    await expect(
      sut.create({
        email: code.email,
        code: code.code,
        expiresAt: code.expiresAt,
        type: 'EMAIL_VERIFICATION',
      }),
    ).resolves.toEqual(code);
  });
});
