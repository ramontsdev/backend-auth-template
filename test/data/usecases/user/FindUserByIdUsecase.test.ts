import { describe, expect, it, vi } from 'vitest';

import { FindUserByIdUsecase } from '@/data/usecases/user/FindUserByIdUsecase';

describe('FindUserByIdUsecase', () => {
  it('delegates to the repository', async () => {
    const repository = { findById: vi.fn().mockResolvedValue(undefined) };
    const sut = new FindUserByIdUsecase(repository as never);
    await sut.findById('user-id');
    expect(repository.findById).toHaveBeenCalled();
  });
});
