import { ConfirmEmailController } from '@/presentation/controllers/authentication/ConfirmEmailController';

import { makeFindUserByEmailUsecase } from '../../usecases/user/findUserByEmailUsecaseFactory';
import { makeConsumeEmailVerificationCodeUsecase } from '../../usecases/verificationCode/consumeEmailVerificationCodeUsecaseFactory';
import { makeDeleteVerificationCodeUsecase } from '../../usecases/verificationCode/deleteVerificationCodeUsecaseFactory';
import { makeFindVerificationCodeUsecase } from '../../usecases/verificationCode/findVerificationCodeUsecaseFactory';

export function makeConfirmEmailController() {
  return new ConfirmEmailController(
    makeFindUserByEmailUsecase(),
    makeFindVerificationCodeUsecase(),
    makeDeleteVerificationCodeUsecase(),
    makeConsumeEmailVerificationCodeUsecase(),
  );
}
