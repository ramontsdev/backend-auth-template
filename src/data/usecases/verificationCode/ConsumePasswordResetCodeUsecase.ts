import { IConsumePasswordResetCodeRepository } from '@/data/protocols/repositories/verificationCode/ConsumePasswordResetCodeRepository';
import {
  ConsumePasswordResetCodeParams,
  IConsumePasswordResetCode,
} from '@/domain/usecases/verificationCode/ConsumePasswordResetCode';

export class ConsumePasswordResetCodeUsecase implements IConsumePasswordResetCode {
  constructor(
    private readonly consumePasswordResetCodeRepository: IConsumePasswordResetCodeRepository,
  ) {}

  async consume(params: ConsumePasswordResetCodeParams): Promise<void> {
    await this.consumePasswordResetCodeRepository.consumePasswordReset(params);
  }
}