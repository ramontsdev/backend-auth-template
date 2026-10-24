import { beforeEach, describe, expect, it } from 'vitest';

import { setTestEnv } from '@test/helpers/fixtures';
import { buildResendVerificationCodeEmailTemplate } from '@/presentation/helpers/emailTemplates/resendVerificationCodeEmailTemplate';

describe('buildResendVerificationCodeEmailTemplate', () => {
  beforeEach(() => {
    setTestEnv();
  });

  it('returns HTML content', () => {
    const html = buildResendVerificationCodeEmailTemplate({ verificationCode: "123456" });
    expect(html).toContain('123456');
    expect(html.toLowerCase()).toContain('html');
  });
});
