import { ConsumeEmailVerificationCodeUsecase } from '@/data/usecases/verificationCode/ConsumeEmailVerificationCodeUsecase';

import { makeVerificationCodePrismaRepository } from '../../repositories/verificationCodePrismaRepositoryFactory';

export function makeConsumeEmailVerificationCodeUsecase() {
  return new ConsumeEmailVerificationCodeUsecase(makeVerificationCodePrismaRepository());
}