import { UserModel } from '@/domain/models/userModel';
import { VerificationCodeModel } from '@/domain/models/verificationCodeModel';
import { HttpRequest } from '@/presentation/protocols/http';

export function makeHttpRequest(overrides: Partial<HttpRequest> = {}): HttpRequest {
  return {
    body: {},
    headers: {},
    query: {},
    params: {},
    ...overrides,
  };
}

export function makeConstructorDeps(length: 3): [never, never, never];
export function makeConstructorDeps(length: 4): [never, never, never, never];
export function makeConstructorDeps(length: 5): [never, never, never, never, never];
export function makeConstructorDeps(length: 6): [never, never, never, never, never, never];
export function makeConstructorDeps(length: number): never[] {
  return Array.from({ length }, () => ({})) as never[];
}

export function makeUser(overrides: Partial<UserModel> = {}): UserModel {
  return {
    id: 'user-id',
    name: 'Test User',
    email: 'user@example.com',
    password: 'hashed-password',
    isEmailVerified: true,
    createdAt: new Date('2024-01-01T00:00:00.000Z'),
    updatedAt: new Date('2024-01-01T00:00:00.000Z'),
    ...overrides,
  };
}

export function makeVerificationCode(
  overrides: Partial<VerificationCodeModel> = {},
): VerificationCodeModel {
  return {
    id: 'code-id',
    email: 'user@example.com',
    code: '123456',
    expiresAt: new Date('2099-01-01T00:00:00.000Z'),
    createdAt: new Date('2024-01-01T00:00:00.000Z'),
    updatedAt: new Date('2024-01-01T00:00:00.000Z'),
    ...overrides,
  };
}

export function setTestEnv(): void {
  process.env.PORT = '4500';
  process.env.NODE_VERSION = '22.17.1';
  process.env.DATABASE_URL = 'postgresql://root:root@localhost:5432/test_db';
  process.env.JWT_SECRET = 'test-jwt-secret';
  process.env.APP_NAME = 'Estacione Test';
  process.env.APP_DOMAIN = 'example.com';
  process.env.APP_EMAIL = 'test@example.com';
  process.env.AWS_REGION = 'us-east-1';
  process.env.AWS_ACCESS_KEY_ID = 'test-key';
  process.env.AWS_SECRET_ACCESS_KEY = 'test-secret';
  process.env.EMAIL_FROM = 'test@example.com';
  process.env.ALLOWED_ORIGINS = 'http://localhost:3000';
}
