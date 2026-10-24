import { describe, expect, it } from 'vitest';

import { makeUser, makeVerificationCode } from '@test/helpers/fixtures';
import type { VerificationCodeModel } from '@/domain/models/verificationCodeModel';

describe('VerificationCodeModel', () => {
  it('allows building a typed object', () => {
    const value: VerificationCodeModel = makeVerificationCode();
    expect(value.id).toBeDefined();
  });
});
