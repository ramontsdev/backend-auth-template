import { z } from 'zod';

const envSchema = z.object({
  PORT: z.string().min(1, 'PORT é obrigatório'),
  NODE_VERSION: z.string().min(1, 'NODE_VERSION é obrigatório'),
  DATABASE_URL: z.string().min(1, 'DATABASE_URL é obrigatório'),
  JWT_SECRET: z.string().min(1, 'JWT_SECRET é obrigatório'),
  APP_NAME: z.string().min(1, 'APP_NAME é obrigatório'),
  APP_DOMAIN: z.string().min(1, 'APP_DOMAIN é obrigatório'),
  APP_EMAIL: z.string().min(1, 'APP_EMAIL é obrigatório'),
  AWS_REGION: z.string().min(1, 'AWS_REGION é obrigatório'),
  AWS_ACCESS_KEY_ID: z.string().min(1, 'AWS_ACCESS_KEY_ID é obrigatório'),
  AWS_SECRET_ACCESS_KEY: z.string().min(1, 'AWS_SECRET_ACCESS_KEY é obrigatório'),
  EMAIL_FROM: z.string().min(1, 'EMAIL_FROM é obrigatório'),
  ALLOWED_ORIGINS: z.string().min(1, 'ALLOWED_ORIGINS é obrigatório'),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  const message = parsed.error.issues
    .map(issue => `${issue.path.join('.')}: ${issue.message}`)
    .join('\n');

  throw new Error(`Variáveis de ambiente inválidas:\n${message}`);
}

const envData = parsed.data;

export const env = {
  port: envData.PORT,
  nodeVersion: envData.NODE_VERSION,
  databaseUrl: envData.DATABASE_URL,
  jwtSecret: envData.JWT_SECRET,
  app: {
    name: envData.APP_NAME,
    domain: envData.APP_DOMAIN,
    email: envData.APP_EMAIL,
  },
  aws: {
    region: envData.AWS_REGION,
    accessKeyId: envData.AWS_ACCESS_KEY_ID,
    secretAccessKey: envData.AWS_SECRET_ACCESS_KEY,
  },
  emailFrom: envData.EMAIL_FROM,
  allowedOrigins: envData.ALLOWED_ORIGINS,
};