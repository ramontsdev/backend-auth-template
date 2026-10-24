import { describe, expect, it, vi } from 'vitest';

import { CreateUserUsecase } from '@/data/usecases/user/CreateUserUsecase';

describe('CreateUserUsecase', () => {
  it('delegates user creation to the repository', async () => {
    const repository = { create: vi.fn().mockResolvedValue({ id: '1' }) };
    const sut = new CreateUserUsecase(repository as never);
    await sut.create({ name: 'a', email: 'a@b.com', password: 'hash', document: '1' });
    expect(repository.create).toHaveBeenCalled();
  });
});
