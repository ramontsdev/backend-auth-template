import { describe, expect, it, vi } from 'vitest';

import { makeConstructorDeps, makeHttpRequest, makeUser, makeVerificationCode } from '@test/helpers/fixtures';
import { SignUpController } from '@/presentation/controllers/authentication/SignUpController';

describe('SignUpController', () => {
  it('returns bad request when body is invalid', async () => {
    const sut = new SignUpController(...makeConstructorDeps(6));
    const response = await sut.handle(makeHttpRequest({ body: {} }));
    expect(response.statusCode).toBe(400);
  });

  it('does not look up document when document is omitted', async () => {
    const findUserByDocument = { findByDocument: vi.fn() };
    const findUserByEmail = { findByEmail: vi.fn().mockResolvedValue(null) };
    const createUser = { create: vi.fn().mockResolvedValue(makeUser()) };
    const createVerificationCode = {
      create: vi.fn().mockResolvedValue(makeVerificationCode()),
    };
    const hasher = { hash: vi.fn().mockResolvedValue('hashed') };
    const emailGateway = { sendEmail: vi.fn().mockResolvedValue(undefined) };

    const sut = new SignUpController(
      findUserByDocument,
      findUserByEmail,
      createUser,
      createVerificationCode,
      hasher,
      emailGateway,
    );

    const response = await sut.handle(makeHttpRequest({
      body: {
        name: 'João',
        email: 'joao@example.com',
        password: '12345678',
        passwordConfirmation: '12345678',
      },
    }));

    expect(response.statusCode).toBe(200);
    expect(findUserByDocument.findByDocument).not.toHaveBeenCalled();
    expect(createUser.create).toHaveBeenCalledWith(
      expect.objectContaining({ document: null }),
    );
  });
});
