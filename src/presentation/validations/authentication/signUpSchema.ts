import { z } from 'zod';

export const signUpSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  document: z.string().trim().min(1).optional(),
  password: z.string().min(8),
  passwordConfirmation: z.string().min(8),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: 'Passwords do not match',
  path: ['passwordConfirmation'],
});
