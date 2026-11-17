export type JwtAccessTokenPayload = {
  sub: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

export function parseJwtAccessTokenPayload(
  payload: Record<string, unknown> | null,
): JwtAccessTokenPayload | null {
  if (!isRecord(payload)) {
    return null;
  }

  const { sub } = payload;

  if (typeof sub !== 'string' || sub.length === 0) {
    return null;
  }

  return { sub };
}