import { beforeEach, describe, expect, it, vi } from 'vitest';

import { setTestEnv } from '@test/helpers/fixtures';

const sendMock = vi.fn().mockResolvedValue({});

vi.mock('@aws-sdk/client-ses', () => {
  class SESClient {
    send = sendMock;
  }

  class SendEmailCommand {
    input: unknown;

    constructor(input: unknown) {
      this.input = input;
    }
  }

  return { SESClient, SendEmailCommand };
});

describe('SESGatewayAdapter', () => {
  beforeEach(() => {
    setTestEnv();
    sendMock.mockClear();
  });

  it('sends email through SES client', async () => {
    const { SESGatewayAdapter } = await import('@/main/adapters/SESGatewayAdapter');
    const sut = new SESGatewayAdapter();
    await sut.sendEmail({
      from: 'from@example.com',
      to: ['to@example.com'],
      subject: 'Subject',
      html: '<p>Hi</p>',
    });
    expect(sendMock).toHaveBeenCalled();
  });
});
