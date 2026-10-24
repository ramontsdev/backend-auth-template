import { describe, expect, it } from 'vitest';

describe('data/protocols/repositories/verificationCode/CreateVerificationCodeRepository.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/data/protocols/repositories/verificationCode/CreateVerificationCodeRepository')).resolves.toBeDefined();
  });
});
