import { describe, expect, it } from 'vitest';

import { resendVerificationCodeSchema } from '@/presentation/validations/authentication/resendVerificationCodeSchema';

describe('resendVerificationCodeSchema', () => {
  it('rejects empty body', () => {
    const result = resendVerificationCodeSchema.safeParse({});
    expect(result.success).toBe(false);
  });
});
