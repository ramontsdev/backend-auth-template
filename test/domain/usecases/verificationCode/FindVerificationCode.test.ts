import { describe, expect, it } from 'vitest';

describe('domain/usecases/verificationCode/FindVerificationCode.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/domain/usecases/verificationCode/FindVerificationCode')).resolves.toBeDefined();
  });
});
