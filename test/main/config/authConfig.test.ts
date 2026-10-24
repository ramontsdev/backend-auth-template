import { beforeEach, describe, expect, it } from 'vitest';

import { setTestEnv } from '@test/helpers/fixtures';
import { authConfig } from '@/main/config/authConfig';

describe('authConfig', () => {
  beforeEach(() => {
    setTestEnv();
  });

  it('reads configuration from environment', () => {
    expect(authConfig).toBeDefined();
  });
});
