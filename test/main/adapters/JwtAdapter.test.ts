import { describe, expect, it } from 'vitest';

import { JwtAdapter } from '@/main/adapters/JwtAdapter';

describe('JwtAdapter', () => {
  it('encrypts and decrypts payloads', async () => {
    const sut = new JwtAdapter('test-secret');
    const token = await sut.encrypt({ sub: 'user-id' });
    const payload = await sut.decrypt(token);
    expect(payload).toMatchObject({ sub: 'user-id' });
  });

  it('returns null for invalid tokens', async () => {
    const sut = new JwtAdapter('test-secret');
    expect(await sut.decrypt('invalid.token.value')).toBeNull();
  });
});
