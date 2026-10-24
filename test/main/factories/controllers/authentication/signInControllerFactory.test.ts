import { describe, expect, it } from 'vitest';

import { makeSignInController } from '@/main/factories/controllers/authentication/signInControllerFactory';

describe('makeSignInController', () => {
  it('returns an instance', () => {
    expect(makeSignInController()).toBeDefined();
  });
});
