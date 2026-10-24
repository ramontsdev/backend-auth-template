import { describe, expect, it } from 'vitest';

import { makeFindUserByEmailUsecase } from '@/main/factories/usecases/user/findUserByEmailUsecaseFactory';

describe('makeFindUserByEmailUsecase', () => {
  it('returns an instance', () => {
    expect(makeFindUserByEmailUsecase()).toBeDefined();
  });
});
