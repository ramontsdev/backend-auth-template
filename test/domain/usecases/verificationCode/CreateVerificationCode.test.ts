import { describe, expect, it } from 'vitest';

describe('domain/usecases/verificationCode/CreateVerificationCode.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/domain/usecases/verificationCode/CreateVerificationCode')).resolves.toBeDefined();
  });
});
