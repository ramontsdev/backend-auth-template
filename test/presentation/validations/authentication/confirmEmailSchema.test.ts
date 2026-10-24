import { describe, expect, it } from 'vitest';

import { confirmEmailSchema } from '@/presentation/validations/authentication/confirmEmailSchema';

describe('confirmEmailSchema', () => {
  it('rejects empty body', () => {
    const result = confirmEmailSchema.safeParse({});
    expect(result.success).toBe(false);
  });
});
