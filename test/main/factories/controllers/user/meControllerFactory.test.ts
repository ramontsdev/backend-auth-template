import { describe, expect, it } from 'vitest';

import { makeMeController } from '@/main/factories/controllers/user/meControllerFactory';

describe('makeMeController', () => {
  it('returns an instance', () => {
    expect(makeMeController()).toBeDefined();
  });
});
