import { ConsumePasswordResetCodeParams } from '@/domain/usecases/verificationCode/ConsumePasswordResetCode';

export interface IConsumePasswordResetCodeRepository {
  consumePasswordReset(params: ConsumePasswordResetCodeParams): Promise<void>;
}