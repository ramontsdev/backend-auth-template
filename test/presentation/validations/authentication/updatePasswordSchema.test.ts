import { describe, expect, it } from 'vitest';

import { updatePasswordSchema } from '@/presentation/validations/authentication/updatePasswordSchema';

describe('updatePasswordSchema', () => {
  it('rejects empty body', () => {
    const result = updatePasswordSchema.safeParse({});
    expect(result.success).toBe(false);
  });
});
