import { describe, expect, it } from 'vitest';

import { signUpSchema } from '@/presentation/validations/authentication/signUpSchema';

describe('signUpSchema', () => {
  const validBase = {
    name: 'João',
    email: 'joao@example.com',
    password: '12345678',
    passwordConfirmation: '12345678',
  };

  it('rejects empty body', () => {
    const result = signUpSchema.safeParse({});
    expect(result.success).toBe(false);
  });

  it('accepts sign-up without document', () => {
    const result = signUpSchema.safeParse(validBase);
    expect(result.success).toBe(true);
  });

  it('accepts sign-up with document', () => {
    const result = signUpSchema.safeParse({
      ...validBase,
      document: '12345678901',
    });
    expect(result.success).toBe(true);
  });
});
