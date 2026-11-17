import { ConsumePasswordResetCodeUsecase } from '@/data/usecases/verificationCode/ConsumePasswordResetCodeUsecase';

import { makeVerificationCodePrismaRepository } from '../../repositories/verificationCodePrismaRepositoryFactory';

export function makeConsumePasswordResetCodeUsecase() {
  return new ConsumePasswordResetCodeUsecase(makeVerificationCodePrismaRepository());
}