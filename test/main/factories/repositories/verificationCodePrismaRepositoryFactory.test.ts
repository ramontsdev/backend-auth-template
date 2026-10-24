import { describe, expect, it } from 'vitest';

import { makeVerificationCodePrismaRepository } from '@/main/factories/repositories/verificationCodePrismaRepositoryFactory';

describe('makeVerificationCodePrismaRepository', () => {
  it('returns an instance', () => {
    expect(makeVerificationCodePrismaRepository()).toBeDefined();
  });
});
