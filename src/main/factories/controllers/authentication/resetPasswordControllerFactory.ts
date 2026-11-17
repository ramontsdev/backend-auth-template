import { ResetPasswordController } from '@/presentation/controllers/authentication/ResetPasswordController';

import { makeBcryptAdapter } from '../../adapters/bcryptAdapterFactory';
import { makeFindUserByEmailUsecase } from '../../usecases/user/findUserByEmailUsecaseFactory';
import { makeConsumePasswordResetCodeUsecase } from '../../usecases/verificationCode/consumePasswordResetCodeUsecaseFactory';
import { makeDeleteVerificationCodeUsecase } from '../../usecases/verificationCode/deleteVerificationCodeUsecaseFactory';
import { makeFindVerificationCodeUsecase } from '../../usecases/verificationCode/findVerificationCodeUsecaseFactory';

export function makeResetPasswordController() {
  return new ResetPasswordController(
    makeFindUserByEmailUsecase(),
    makeFindVerificationCodeUsecase(),
    makeDeleteVerificationCodeUsecase(),
    makeConsumePasswordResetCodeUsecase(),
    makeBcryptAdapter(),
  );
}
