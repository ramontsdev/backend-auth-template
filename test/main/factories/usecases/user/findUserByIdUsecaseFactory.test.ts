import { describe, expect, it } from 'vitest';

import { makeFindUserByIdUsecase } from '@/main/factories/usecases/user/findUserByIdUsecaseFactory';

describe('makeFindUserByIdUsecase', () => {
  it('returns an instance', () => {
    expect(makeFindUserByIdUsecase()).toBeDefined();
  });
});
