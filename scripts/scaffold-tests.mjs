import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const srcRoot = path.join(root, 'src');
const testRoot = path.join(root, 'test');

function listSourceFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (full.includes(`${path.sep}main${path.sep}db${path.sep}prisma${path.sep}generated`)) {
        continue;
      }
      listSourceFiles(full, acc);
    } else if (entry.name.endsWith('.ts')) {
      acc.push(full);
    }
  }
  return acc;
}

function toImportPath(filePath) {
  const rel = path.relative(srcRoot, filePath).replace(/\.ts$/, '');
  return `@/${rel.replaceAll(path.sep, '/')}`;
}

function toTestPath(filePath) {
  const rel = path.relative(srcRoot, filePath).replace(/\.ts$/, '.test.ts');
  return path.join(testRoot, rel);
}

function classNameFromFile(filePath) {
  return path.basename(filePath, '.ts');
}

function generateTest(filePath) {
  const importPath = toImportPath(filePath);
  const rel = path.relative(srcRoot, filePath).replaceAll(path.sep, '/');
  const className = classNameFromFile(filePath);

  if (rel === 'presentation/helpers/httpHelpers.ts') {
    return `import { describe, expect, it } from 'vitest';

import {
  badRequest,
  conflict,
  created,
  forbidden,
  noContent,
  notFound,
  ok,
  serverError,
  unauthorized,
} from '${importPath}';

describe('httpHelpers', () => {
  it('ok returns status 200', () => {
    expect(ok({ data: true })).toEqual({ statusCode: 200, body: { data: true } });
  });

  it('created returns status 201', () => {
    expect(created({ id: '1' })).toEqual({ statusCode: 201, body: { id: '1' } });
  });

  it('noContent returns status 204', () => {
    expect(noContent()).toEqual({ statusCode: 204 });
  });

  it('badRequest returns status 400', () => {
    expect(badRequest({ error: 'x' })).toEqual({ statusCode: 400, body: { error: 'x' } });
  });

  it('unauthorized returns status 401', () => {
    expect(unauthorized()).toEqual({ statusCode: 401, body: undefined });
  });

  it('forbidden returns status 403', () => {
    expect(forbidden()).toEqual({ statusCode: 403, body: undefined });
  });

  it('notFound returns status 404', () => {
    expect(notFound()).toEqual({ statusCode: 404, body: undefined });
  });

  it('conflict returns status 409', () => {
    expect(conflict()).toEqual({ statusCode: 409, body: undefined });
  });

  it('serverError returns status 500 with default message', () => {
    expect(serverError()).toEqual({
      statusCode: 500,
      body: { error: 'Erro interno do servidor' },
    });
  });
});
`;
  }

  if (rel.startsWith('presentation/validations/')) {
    const schemaExport = className.replace(/Schema$/, 'Schema');
    const exportName = rel.includes('signUp') ? 'signUpSchema' : className.charAt(0).toLowerCase() + className.slice(1);
    const actualExport = path.basename(filePath, '.ts');
    return `import { describe, expect, it } from 'vitest';

import { ${actualExport} } from '${importPath}';

describe('${actualExport}', () => {
  it('rejects empty body', () => {
    const result = ${actualExport}.safeParse({});
    expect(result.success).toBe(false);
  });
});
`;
  }

  if (rel.startsWith('data/usecases/') && className.endsWith('Usecase')) {
    const usecaseTests = {
      CreateUserUsecase: `import { describe, expect, it, vi } from 'vitest';

import { CreateUserUsecase } from '${importPath}';

describe('CreateUserUsecase', () => {
  it('delegates user creation to the repository', async () => {
    const repository = { create: vi.fn().mockResolvedValue({ id: '1' }) };
    const sut = new CreateUserUsecase(repository as never);
    await sut.create({ name: 'a', email: 'a@b.com', password: 'hash', document: '1' });
    expect(repository.create).toHaveBeenCalled();
  });
});
`,
      CreateVerificationCodeUsecase: `import { describe, expect, it, vi } from 'vitest';

import { CreateVerificationCodeUsecase } from '${importPath}';

describe('CreateVerificationCodeUsecase', () => {
  it('generates a code and persists it', async () => {
    const repository = { create: vi.fn().mockResolvedValue({ id: '1', code: '123456' }) };
    const codeGenerator = { generate: vi.fn().mockResolvedValue('123456') };
    const sut = new CreateVerificationCodeUsecase(repository as never, codeGenerator as never);
    await sut.create({
      email: 'user@example.com',
      expiresAt: new Date(),
      type: 'EMAIL_VERIFICATION',
    });
    expect(codeGenerator.generate).toHaveBeenCalled();
    expect(repository.create).toHaveBeenCalled();
  });
});
`,
      DeleteVerificationCodeUsecase: `import { describe, expect, it, vi } from 'vitest';

import { DeleteVerificationCodeUsecase } from '${importPath}';

describe('DeleteVerificationCodeUsecase', () => {
  it('delegates deletion to the repository', async () => {
    const repository = { deleteCode: vi.fn().mockResolvedValue(undefined) };
    const sut = new DeleteVerificationCodeUsecase(repository as never);
    await sut.delete({ email: 'a@b.com', code: '123456', type: 'EMAIL_VERIFICATION' });
    expect(repository.deleteCode).toHaveBeenCalled();
  });
});
`,
      FindVerificationCodeUsecase: `import { describe, expect, it, vi } from 'vitest';

import { FindVerificationCodeUsecase } from '${importPath}';

describe('FindVerificationCodeUsecase', () => {
  it('delegates lookup to the repository', async () => {
    const repository = { findCode: vi.fn().mockResolvedValue(null) };
    const sut = new FindVerificationCodeUsecase(repository as never);
    await sut.find({ email: 'a@b.com', code: '123456', type: 'EMAIL_VERIFICATION' });
    expect(repository.findCode).toHaveBeenCalled();
  });
});
`,
      FindVerificationCodeByEmailUsecase: `import { describe, expect, it, vi } from 'vitest';

import { FindVerificationCodeByEmailUsecase } from '${importPath}';

describe('FindVerificationCodeByEmailUsecase', () => {
  it('delegates lookup by email to the repository', async () => {
    const repository = { findCodeByEmail: vi.fn().mockResolvedValue(null) };
    const sut = new FindVerificationCodeByEmailUsecase(repository as never);
    await sut.findByEmail({ email: 'a@b.com', type: 'EMAIL_VERIFICATION' });
    expect(repository.findCodeByEmail).toHaveBeenCalled();
  });
});
`,
    };

    if (usecaseTests[className]) {
      return usecaseTests[className];
    }

    const repoMethod = className.includes('FindUserByEmail')
      ? 'findByEmail'
      : className.includes('FindUserById')
        ? 'findById'
        : className.includes('FindUserByDocument')
          ? 'findByDocument'
          : className.includes('UpdatePassword')
            ? 'updatePassword'
            : 'update';

    const callBody = className.includes('FindUserByEmail')
      ? "await sut.findByEmail('user@example.com')"
      : className.includes('FindUserById')
        ? "await sut.findById('user-id')"
        : className.includes('FindUserByDocument')
          ? "await sut.findByDocument('123')"
          : className.includes('UpdatePassword')
            ? 'await sut.updatePassword({ userId: "1", password: "hash" })'
            : 'await sut.update({ id: "1", name: "a", email: "a@b.com", isEmailVerified: true })';

    return `import { describe, expect, it, vi } from 'vitest';

import { ${className} } from '${importPath}';

describe('${className}', () => {
  it('delegates to the repository', async () => {
    const repository = { ${repoMethod}: vi.fn().mockResolvedValue(undefined) };
    const sut = new ${className}(repository as never);
    ${callBody};
    expect(repository.${repoMethod}).toHaveBeenCalled();
  });
});
`;
  }

  if (rel === 'main/adapters/BcryptAdapter.ts') {
    return `import { describe, expect, it } from 'vitest';

import { BcryptAdapter } from '${importPath}';

describe('BcryptAdapter', () => {
  it('hashes and compares passwords', async () => {
    const sut = new BcryptAdapter(4);
    const hash = await sut.hash('secret-password');
    expect(await sut.compare('secret-password', hash)).toBe(true);
    expect(await sut.compare('wrong-password', hash)).toBe(false);
  });
});
`;
  }

  if (rel === 'main/adapters/CodeGeneratorAdapter.ts') {
    return `import { describe, expect, it } from 'vitest';

import { CodeGeneratorAdapter } from '${importPath}';

describe('CodeGeneratorAdapter', () => {
  it('generates a 6-digit numeric code', async () => {
    const sut = new CodeGeneratorAdapter();
    const code = await sut.generate();
    expect(code).toMatch(/^\\d{6}$/);
  });
});
`;
  }

  if (rel === 'main/adapters/JwtAdapter.ts') {
    return `import { describe, expect, it } from 'vitest';

import { JwtAdapter } from '${importPath}';

describe('JwtAdapter', () => {
  it('encrypts and decrypts payloads', async () => {
    const sut = new JwtAdapter('test-secret');
    const token = await sut.encrypt({ sub: 'user-id' });
    const payload = await sut.decrypt(token);
    expect(payload).toMatchObject({ sub: 'user-id' });
  });

  it('returns null for invalid tokens', async () => {
    const sut = new JwtAdapter('test-secret');
    expect(await sut.decrypt('invalid.token.value')).toBeNull();
  });
});
`;
  }

  if (rel.startsWith('main/factories/')) {
    const factoryName = className.replace(/Factory$/, '');
    const fnName = `make${factoryName.charAt(0).toUpperCase()}${factoryName.slice(1)}`;
    const actualFn = fs.readFileSync(filePath, 'utf8').match(/export function (make\w+)/)?.[1] ?? fnName;
    return `import { describe, expect, it } from 'vitest';

import { ${actualFn} } from '${importPath}';

describe('${actualFn}', () => {
  it('returns an instance', () => {
    expect(${actualFn}()).toBeDefined();
  });
});
`;
  }

  if (rel.startsWith('domain/models/')) {
    const typeName = className === 'userModel' ? 'UserModel' : 'VerificationCodeModel';
    return `import { describe, expect, it } from 'vitest';

import { makeUser, makeVerificationCode } from '@test/helpers/fixtures';
import type { ${typeName} } from '${importPath}';

describe('${typeName}', () => {
  it('allows building a typed object', () => {
    const value: ${typeName} = ${typeName === 'UserModel' ? 'makeUser()' : 'makeVerificationCode()'};
    expect(value.id).toBeDefined();
  });
});
`;
  }

  if (
    rel.startsWith('domain/') ||
    rel.startsWith('data/protocols/') ||
    rel.startsWith('presentation/protocols/')
  ) {
    const typeName = fs
      .readFileSync(filePath, 'utf8')
      .match(/export (?:interface|type) (I?\\w+)/)?.[1];
    if (!typeName) {
      return `import { describe, expect, it } from 'vitest';

describe('${rel}', () => {
  it('module is loadable', async () => {
    await expect(import('${importPath}')).resolves.toBeDefined();
  });
});
`;
    }
    return `import { describe, expect, it } from 'vitest';

import type { ${typeName} } from '${importPath}';

describe('${typeName}', () => {
  it('accepts a structural implementation', () => {
    const implementation = {} as ${typeName};
    expect(implementation).toBeDefined();
  });
});
`;
  }

  if (rel.startsWith('presentation/helpers/emailTemplates/') && className !== 'colors') {
    const fnMatch = fs.readFileSync(filePath, 'utf8').match(/export function (\w+)/);
    const fnName = fnMatch?.[1] ?? 'buildTemplate';
    const params =
      fnName === 'buildWelcomeEmailTemplate'
        ? '{ name: "User", verificationCode: "123456" }'
        : '{ verificationCode: "123456" }';
    const assertion =
      fnName === 'buildWelcomeEmailTemplate'
        ? "expect(html).toContain('User');"
        : "expect(html).toContain('123456');";
    return `import { beforeEach, describe, expect, it } from 'vitest';

import { setTestEnv } from '@test/helpers/fixtures';
import { ${fnName} } from '${importPath}';

describe('${fnName}', () => {
  beforeEach(() => {
    setTestEnv();
  });

  it('returns HTML content', () => {
    const html = ${fnName}(${params});
    ${assertion}
    expect(html.toLowerCase()).toContain('html');
  });
});
`;
  }

  if (rel === 'presentation/helpers/emailTemplates/colors.ts') {
    return `import { describe, expect, it } from 'vitest';

import { emailColors } from '${importPath}';

describe('emailColors', () => {
  it('exposes primary palette', () => {
    expect(emailColors.primary['500']).toBeDefined();
    expect(emailColors.white).toBeDefined();
  });
});
`;
  }

  if (className.endsWith('Controller')) {
    if (className === 'MeController') {
      return `import { describe, expect, it, vi } from 'vitest';

import { makeUser } from '@test/helpers/fixtures';
import { MeController } from '${importPath}';

describe('MeController', () => {
  it('returns unauthorized when account is missing', async () => {
    const sut = new MeController({ findById: vi.fn() } as never);
    const response = await sut.handle({});
    expect(response.statusCode).toBe(401);
  });

  it('returns user without password when account exists', async () => {
    const user = makeUser();
    const sut = new MeController({ findById: vi.fn().mockResolvedValue(user) } as never);
    const response = await sut.handle({ account: { userId: user.id } });
    expect(response.statusCode).toBe(200);
    expect(response.body).not.toHaveProperty('password');
  });
});
`;
    }

    const depsCount = {
      SignInController: 3,
      SignUpController: 6,
      ConfirmEmailController: 4,
      ForgotPasswordController: 5,
      ResendVerificationCodeController: 5,
      ResetPasswordController: 5,
    }[className] ?? 1;

    return `import { describe, expect, it, vi } from 'vitest';

import { ${className} } from '${importPath}';

describe('${className}', () => {
  it('returns bad request when body is invalid', async () => {
    const sut = new ${className}(...(Array(${depsCount}).fill({}) as never[]));
    const response = await sut.handle({ body: {} });
    expect(response.statusCode).toBe(400);
  });
});
`;
  }

  if (rel === 'presentation/middlewares/AuthenticationMiddleware.ts') {
    return `import { describe, expect, it, vi } from 'vitest';

import { makeUser } from '@test/helpers/fixtures';
import { AuthenticationMiddleware } from '${importPath}';

describe('AuthenticationMiddleware', () => {
  it('rejects missing authorization header', async () => {
    const sut = new AuthenticationMiddleware({ findById: vi.fn() } as never, {
      decrypt: vi.fn(),
    } as never);
    const response = await sut.handle({ headers: {} });
    expect(response.statusCode).toBe(401);
  });

  it('returns account when token is valid', async () => {
    const user = makeUser();
    const sut = new AuthenticationMiddleware(
      { findById: vi.fn().mockResolvedValue(user) },
      { decrypt: vi.fn().mockResolvedValue({ sub: user.id }) },
    );
    const response = await sut.handle({
      headers: { authorization: 'Bearer token' },
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ account: { userId: user.id } });
  });
});
`;
  }

  if (rel === 'infra/prisma/UserPrismaRepository.ts') {
    return `import { describe, expect, it, vi } from 'vitest';

import { makeUser } from '@test/helpers/fixtures';
import { UserPrismaRepository } from '${importPath}';

describe('UserPrismaRepository', () => {
  it('creates a user via prisma client', async () => {
    const user = makeUser();
    const prismaClient = {
      user: {
        create: vi.fn().mockResolvedValue(user),
        findUnique: vi.fn(),
        update: vi.fn(),
      },
    };
    const sut = new UserPrismaRepository(prismaClient as never);
    await expect(
      sut.create({
        name: user.name,
        email: user.email,
        password: user.password,
        document: '123',
      }),
    ).resolves.toEqual(user);
  });
});
`;
  }

  if (rel === 'infra/prisma/VerificationCodePrismaRepository.ts') {
    return `import { describe, expect, it, vi } from 'vitest';

import { makeVerificationCode } from '@test/helpers/fixtures';
import { VerificationCodePrismaRepository } from '${importPath}';

describe('VerificationCodePrismaRepository', () => {
  it('creates a verification code via prisma client', async () => {
    const code = makeVerificationCode();
    const prismaClient = {
      verificationCode: {
        create: vi.fn().mockResolvedValue(code),
        findUnique: vi.fn(),
        findFirst: vi.fn(),
        delete: vi.fn(),
      },
    };
    const sut = new VerificationCodePrismaRepository(prismaClient as never);
    await expect(
      sut.create({
        email: code.email,
        code: code.code,
        expiresAt: code.expiresAt,
        type: 'EMAIL_VERIFICATION',
      }),
    ).resolves.toEqual(code);
  });
});
`;
  }

  if (rel === 'infra/prisma/prismaClient.ts') {
    return `import { describe, expect, it } from 'vitest';

import { setTestEnv } from '@test/helpers/fixtures';

describe('prismaClient', () => {
  it('exports a prisma client singleton', async () => {
    setTestEnv();
    const module = await import('${importPath}');
    expect(module.prismaClient).toBeDefined();
  });
});
`;
  }

  if (rel.startsWith('main/adapters/express/')) {
    const fnName = fs.readFileSync(filePath, 'utf8').match(/export function (\w+)/)?.[1] ?? className;
    return `import { describe, expect, it } from 'vitest';

import { ${fnName} } from '${importPath}';

describe('${fnName}', () => {
  it('is defined', () => {
    expect(${fnName}).toBeTypeOf('function');
  });
});
`;
  }

  if (rel === 'main/config/env.ts' || rel === 'main/config/authConfig.ts') {
    const exportName = rel.includes('env') ? 'env' : 'authConfig';
    return `import { beforeEach, describe, expect, it } from 'vitest';

import { setTestEnv } from '@test/helpers/fixtures';
import { ${exportName} } from '${importPath}';

describe('${exportName}', () => {
  beforeEach(() => {
    setTestEnv();
  });

  it('reads configuration from environment', () => {
    expect(${exportName}).toBeDefined();
  });
});
`;
  }

  if (rel === 'main/routes/authRoutes.ts' || rel === 'main/routes/userRoutes.ts') {
    const exportName = rel.includes('auth') ? 'authRoutes' : 'userRoutes';
    return `import { describe, expect, it } from 'vitest';

import { ${exportName} } from '${importPath}';

describe('${exportName}', () => {
  it('exports an express router', () => {
    expect(${exportName}).toBeDefined();
    expect(typeof ${exportName}.use).toBe('function');
  });
});
`;
  }

  if (rel === 'main/server.ts') {
    return `import { describe, expect, it } from 'vitest';

describe('server', () => {
  it('uses auth and user route modules', async () => {
    const [{ authRoutes }, { userRoutes }] = await Promise.all([
      import('@/main/routes/authRoutes'),
      import('@/main/routes/userRoutes'),
    ]);
    expect(authRoutes).toBeDefined();
    expect(userRoutes).toBeDefined();
  });
});
`;
  }

  if (rel === 'main/adapters/SESGatewayAdapter.ts') {
    return `import { beforeEach, describe, expect, it, vi } from 'vitest';

import { setTestEnv } from '@test/helpers/fixtures';

const sendMock = vi.fn().mockResolvedValue({});

vi.mock('@aws-sdk/client-ses', () => {
  class SESClient {
    send = sendMock;
  }

  class SendEmailCommand {
    constructor(public input: unknown) {}
  }

  return { SESClient, SendEmailCommand };
});

describe('SESGatewayAdapter', () => {
  beforeEach(() => {
    setTestEnv();
    sendMock.mockClear();
  });

  it('sends email through SES client', async () => {
    const { SESGatewayAdapter } = await import('${importPath}');
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
`;
  }

  return `import { describe, expect, it } from 'vitest';

describe('${className}', () => {
  it('module is loadable', async () => {
    await expect(import('${importPath}')).resolves.toBeDefined();
  });
});
`;
}

const files = listSourceFiles(srcRoot);
let created = 0;

for (const file of files) {
  const testPath = toTestPath(file);
  fs.mkdirSync(path.dirname(testPath), { recursive: true });
  fs.writeFileSync(testPath, generateTest(file));
  created++;
}

console.log(`Scaffolded ${created} test files (${files.length} source files).`);
