import { describe, expect, it, vi } from 'vitest';

import { UpdateUserUsecase } from '@/data/usecases/user/UpdateUserUsecase';

describe('UpdateUserUsecase', () => {
  it('delegates to the repository', async () => {
    const repository = { update: vi.fn().mockResolvedValue(undefined) };
    const sut = new UpdateUserUsecase(repository as never);
    await sut.update({ id: "1", name: "a", email: "a@b.com", isEmailVerified: true });
    expect(repository.update).toHaveBeenCalled();
  });
});
