import { describe, expect, it } from 'vitest';

import { makeForgotPasswordController } from '@/main/factories/controllers/authentication/forgotPasswordControllerFactory';

describe('makeForgotPasswordController', () => {
  it('returns an instance', () => {
    expect(makeForgotPasswordController()).toBeDefined();
  });
});
