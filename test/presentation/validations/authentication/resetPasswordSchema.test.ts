import { describe, expect, it } from 'vitest';

import { resetPasswordSchema } from '@/presentation/validations/authentication/resetPasswordSchema';

describe('resetPasswordSchema', () => {
  it('rejects empty body', () => {
    const result = resetPasswordSchema.safeParse({});
    expect(result.success).toBe(false);
  });
});
