import { describe, expect, it, vi } from 'vitest';

import { FindUserByDocumentUsecase } from '@/data/usecases/user/FindUserByDocumentUsecase';

describe('FindUserByDocumentUsecase', () => {
  it('delegates to the repository', async () => {
    const repository = { findByDocument: vi.fn().mockResolvedValue(undefined) };
    const sut = new FindUserByDocumentUsecase(repository as never);
    await sut.findByDocument('123');
    expect(repository.findByDocument).toHaveBeenCalled();
  });
});
