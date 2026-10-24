import { describe, expect, it } from 'vitest';

import { makeUser, makeVerificationCode } from '@test/helpers/fixtures';
import type { UserModel } from '@/domain/models/userModel';

describe('UserModel', () => {
  it('allows building a typed object', () => {
    const value: UserModel = makeUser();
    expect(value.id).toBeDefined();
  });
});
