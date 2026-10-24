import { beforeEach, describe, expect, it } from 'vitest';

import { setTestEnv } from '@test/helpers/fixtures';
import { buildWelcomeEmailTemplate } from '@/presentation/helpers/emailTemplates/welcomeEmailTemplate';

describe('buildWelcomeEmailTemplate', () => {
  beforeEach(() => {
    setTestEnv();
  });

  it('returns HTML content', () => {
    const html = buildWelcomeEmailTemplate({ name: "User", verificationCode: "123456" });
    expect(html).toContain('User');
    expect(html.toLowerCase()).toContain('html');
  });
});
