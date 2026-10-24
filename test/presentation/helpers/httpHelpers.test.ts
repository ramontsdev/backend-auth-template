import { describe, expect, it } from 'vitest';

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
} from '@/presentation/helpers/httpHelpers';

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
