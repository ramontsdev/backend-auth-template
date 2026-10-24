import { beforeEach, describe, expect, it } from 'vitest';

import { setTestEnv } from '@test/helpers/fixtures';
import { buildForgotPasswordEmailTemplate } from '@/presentation/helpers/emailTemplates/forgotPasswordEmailTemplate';

describe('buildForgotPasswordEmailTemplate', () => {
  beforeEach(() => {
    setTestEnv();
  });

  it('returns HTML content', () => {
    const html = buildForgotPasswordEmailTemplate({ verificationCode: "123456" });
    expect(html).toContain('123456');
    expect(html.toLowerCase()).toContain('html');
  });
});
