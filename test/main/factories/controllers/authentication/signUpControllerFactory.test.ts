import { describe, expect, it } from 'vitest';

import { makeSignUpController } from '@/main/factories/controllers/authentication/signUpControllerFactory';

describe('makeSignUpController', () => {
  it('returns an instance', () => {
    expect(makeSignUpController()).toBeDefined();
  });
});
