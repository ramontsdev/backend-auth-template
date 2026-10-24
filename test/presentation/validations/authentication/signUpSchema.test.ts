import { describe, expect, it } from 'vitest';

import { signUpSchema } from '@/presentation/validations/authentication/signUpSchema';

describe('signUpSchema', () => {
  it('rejects empty body', () => {
    const result = signUpSchema.safeParse({});
    expect(result.success).toBe(false);
  });
});
