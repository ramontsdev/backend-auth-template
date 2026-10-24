import { describe, expect, it } from 'vitest';

describe('data/protocols/repositories/verificationCode/DeleteVerificationCodeRepository.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/data/protocols/repositories/verificationCode/DeleteVerificationCodeRepository')).resolves.toBeDefined();
  });
});
