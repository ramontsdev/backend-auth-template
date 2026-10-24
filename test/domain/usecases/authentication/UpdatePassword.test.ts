import { describe, expect, it } from 'vitest';

describe('domain/usecases/authentication/UpdatePassword.ts', () => {
  it('module is loadable', async () => {
    await expect(import('@/domain/usecases/authentication/UpdatePassword')).resolves.toBeDefined();
  });
});
