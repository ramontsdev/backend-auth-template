import { ConsumeEmailVerificationCodeParams } from '@/domain/usecases/verificationCode/ConsumeEmailVerificationCode';

export interface IConsumeEmailVerificationCodeRepository {
  consumeEmailVerification(params: ConsumeEmailVerificationCodeParams): Promise<void>;
}