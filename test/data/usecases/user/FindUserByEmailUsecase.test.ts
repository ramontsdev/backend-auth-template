import { describe, expect, it, vi } from 'vitest';

import { FindUserByEmailUsecase } from '@/data/usecases/user/FindUserByEmailUsecase';

describe('FindUserByEmailUsecase', () => {
  it('delegates to the repository', async () => {
    const repository = { findByEmail: vi.fn().mockResolvedValue(undefined) };
    const sut = new FindUserByEmailUsecase(repository as never);
    await sut.findByEmail('user@example.com');
    expect(repository.findByEmail).toHaveBeenCalled();
  });
});
