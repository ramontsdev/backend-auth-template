import { describe, expect, it, vi } from 'vitest';

import { UpdatePasswordUsecase } from '@/data/usecases/authentication/UpdatePasswordUsecase';

describe('UpdatePasswordUsecase', () => {
  it('delegates to the repository', async () => {
    const repository = { updatePassword: vi.fn().mockResolvedValue(undefined) };
    const sut = new UpdatePasswordUsecase(repository as never);
    await sut.updatePassword({ userId: "1", password: "hash" });
    expect(repository.updatePassword).toHaveBeenCalled();
  });
});
