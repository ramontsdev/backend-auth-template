import { describe, expect, it } from 'vitest';

import { forgotPasswordSchema } from '@/presentation/validations/authentication/forgotPasswordSchema';

describe('forgotPasswordSchema', () => {
  it('rejects empty body', () => {
    const result = forgotPasswordSchema.safeParse({});
    expect(result.success).toBe(false);
  });
});
