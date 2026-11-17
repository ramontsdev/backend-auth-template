import { beforeEach, describe, expect, it } from 'vitest';

import { setTestEnv } from '@test/helpers/fixtures';
import { env } from '@/main/config/env';

describe('env', () => {
  beforeEach(() => {
    setTestEnv();
  });

  it('reads configuration from environment', () => {
    expect(env.port).toBe('4500');
    expect(env.allowedOrigins).toBe('http://localhost:3000');
  });
});
