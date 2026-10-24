import { describe, expect, it } from 'vitest';

import { makeFindUserByDocumentUsecase } from '@/main/factories/usecases/user/findUserByDocumentFactory';

describe('makeFindUserByDocumentUsecase', () => {
  it('returns an instance', () => {
    expect(makeFindUserByDocumentUsecase()).toBeDefined();
  });
});
