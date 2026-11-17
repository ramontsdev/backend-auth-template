import { VerificationCodeParams } from '@/domain/usecases/verificationCode/FindVerificationCode';

export function verificationCodeUniqueWhere(params: VerificationCodeParams) {
  return {
    email_code_type: {
      email: params.email,
      code: params.code,
      type: params.type,
    },
  };
}