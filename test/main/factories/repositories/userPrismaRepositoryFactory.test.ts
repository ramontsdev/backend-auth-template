import { describe, expect, it } from 'vitest';

import { makeUserPrismaRepository } from '@/main/factories/repositories/userPrismaRepositoryFactory';

describe('makeUserPrismaRepository', () => {
  it('returns an instance', () => {
    expect(makeUserPrismaRepository()).toBeDefined();
  });
});
