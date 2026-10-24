import { describe, expect, it } from 'vitest';

import { makeUpdatePasswordUsecase } from '@/main/factories/usecases/authentication/updatePasswordUsecaseFactory';

describe('makeUpdatePasswordUsecase', () => {
  it('returns an instance', () => {
    expect(makeUpdatePasswordUsecase()).toBeDefined();
  });
});
