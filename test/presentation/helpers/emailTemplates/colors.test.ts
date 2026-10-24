import { describe, expect, it } from 'vitest';

import { emailColors } from '@/presentation/helpers/emailTemplates/colors';

describe('emailColors', () => {
  it('exposes primary palette', () => {
    expect(emailColors.primary['500']).toBeDefined();
    expect(emailColors.white).toBeDefined();
  });
});
