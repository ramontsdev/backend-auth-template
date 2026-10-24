import { describe, expect, it } from 'vitest';

describe('domain/usecases/verificationCode/FindVerificationCodeByEmail.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/domain/usecases/verificationCode/FindVerificationCodeByEmail')).resolves.toBeDefined();
  });
});
