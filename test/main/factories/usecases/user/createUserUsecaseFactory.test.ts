import { describe, expect, it } from 'vitest';

import { makeCreateUserUsecase } from '@/main/factories/usecases/user/createUserUsecaseFactory';

describe('makeCreateUserUsecase', () => {
  it('returns an instance', () => {
    expect(makeCreateUserUsecase()).toBeDefined();
  });
});
