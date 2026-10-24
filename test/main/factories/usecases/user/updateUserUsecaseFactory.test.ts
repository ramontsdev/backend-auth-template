import { describe, expect, it } from 'vitest';

import { makeUpdateUserUsecase } from '@/main/factories/usecases/user/updateUserUsecaseFactory';

describe('makeUpdateUserUsecase', () => {
  it('returns an instance', () => {
    expect(makeUpdateUserUsecase()).toBeDefined();
  });
});
