import { describe, expect, it, vi } from 'vitest';

import { makeUser } from '@test/helpers/fixtures';
import { UserPrismaRepository } from '@/infra/prisma/UserPrismaRepository';

describe('UserPrismaRepository', () => {
  it('creates a user via prisma client', async () => {
    const user = makeUser();
    const prismaClient = {
      user: {
        create: vi.fn().mockResolvedValue(user),
        findUnique: vi.fn(),
        update: vi.fn(),
      },
    };
    const sut = new UserPrismaRepository(prismaClient as never);
    await expect(
      sut.create({
        name: user.name,
        email: user.email,
        password: user.password,
        document: '123',
      }),
    ).resolves.toEqual(user);
  });
});
