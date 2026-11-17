import { IConsumeEmailVerificationCodeRepository } from '@/data/protocols/repositories/verificationCode/ConsumeEmailVerificationCodeRepository';
import {
  ConsumeEmailVerificationCodeParams,
  IConsumeEmailVerificationCode,
} from '@/domain/usecases/verificationCode/ConsumeEmailVerificationCode';

export class ConsumeEmailVerificationCodeUsecase implements IConsumeEmailVerificationCode {
  constructor(
    private readonly consumeEmailVerificationCodeRepository: IConsumeEmailVerificationCodeRepository,
  ) {}

  async consume(params: ConsumeEmailVerificationCodeParams): Promise<void> {
    await this.consumeEmailVerificationCodeRepository.consumeEmailVerification(params);
  }
}