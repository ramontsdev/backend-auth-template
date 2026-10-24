import { describe, expect, it } from 'vitest';

import { BcryptAdapter } from '@/main/adapters/BcryptAdapter';

describe('BcryptAdapter', () => {
  it('hashes and compares passwords', async () => {
    const sut = new BcryptAdapter(4);
    const hash = await sut.hash('secret-password');
    expect(await sut.compare('secret-password', hash)).toBe(true);
    expect(await sut.compare('wrong-password', hash)).toBe(false);
  });
});
