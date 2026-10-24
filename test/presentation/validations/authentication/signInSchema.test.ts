import { describe, expect, it } from 'vitest';

import { signInSchema } from '@/presentation/validations/authentication/signInSchema';

describe('signInSchema', () => {
  it('rejects empty body', () => {
    const result = signInSchema.safeParse({});
    expect(result.success).toBe(false);
  });
});
