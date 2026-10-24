import { describe, expect, it } from 'vitest';

import { makeConfirmEmailController } from '@/main/factories/controllers/authentication/confirmEmailControllerFactory';

describe('makeConfirmEmailController', () => {
  it('returns an instance', () => {
    expect(makeConfirmEmailController()).toBeDefined();
  });
});
