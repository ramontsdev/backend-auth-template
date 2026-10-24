import { describe, expect, it } from 'vitest';

describe('domain/usecases/verificationCode/DeleteVerificationCode.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/domain/usecases/verificationCode/DeleteVerificationCode')).resolves.toBeDefined();
  });
});
