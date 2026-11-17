import { IConsumeEmailVerificationCodeRepository } from '@/data/protocols/repositories/verificationCode/ConsumeEmailVerificationCodeRepository';
import { IConsumePasswordResetCodeRepository } from '@/data/protocols/repositories/verificationCode/ConsumePasswordResetCodeRepository';
import { CreateCodeParams, ICreateVerificationCodeRepository } from '@/data/protocols/repositories/verificationCode/CreateVerificationCodeRepository';
import { IDeleteVerificationCodeRepository } from '@/data/protocols/repositories/verificationCode/DeleteVerificationCodeRepository';
import { ConsumeEmailVerificationCodeParams } from '@/domain/usecases/verificationCode/ConsumeEmailVerificationCode';
import { ConsumePasswordResetCodeParams } from '@/domain/usecases/verificationCode/ConsumePasswordResetCode';
import { IFindVerificationCodeByEmailRepository } from '@/data/protocols/repositories/verificationCode/FindVerificationCodeByEmailRepository';
import { IFindVerificationCodeRepository } from '@/data/protocols/repositories/verificationCode/FindVerificationCodeRepository';
import { VerificationCodeModel } from '@/domain/models/verificationCodeModel';
import { VerificationCodeType } from '@/domain/usecases/verificationCode/CreateVerificationCode';
import { VerificationCodeParams } from '@/domain/usecases/verificationCode/FindVerificationCode';

import { PrismaClient } from './prismaClient';
import { verificationCodeUniqueWhere } from './verificationCodeUniqueWhere';

export class VerificationCodePrismaRepository implements
  ICreateVerificationCodeRepository,
  IFindVerificationCodeRepository,
  IFindVerificationCodeByEmailRepository,
  IDeleteVerificationCodeRepository,
  IConsumeEmailVerificationCodeRepository,
  IConsumePasswordResetCodeRepository {

  constructor(private readonly prismaClient: PrismaClient) {}

  async create(params: CreateCodeParams): Promise<VerificationCodeModel> {
    const createdVerificationCode = await this.prismaClient.verificationCode.create({
      data: {
        email: params.email,
        code: params.code,
        type: params.type,
        expiresAt: params.expiresAt,
      },
    });

    return createdVerificationCode;
  }

  async findCode(params: VerificationCodeParams): Promise<VerificationCodeModel | null> {
    const verificationCode = await this.prismaClient.verificationCode.findUnique({
      where: verificationCodeUniqueWhere(params),
    });

    return verificationCode;
  }

  async findCodeByEmail(email: string, type: VerificationCodeType): Promise<VerificationCodeModel | null> {
    const verificationCode = await this.prismaClient.verificationCode.findFirst({
      where: { email, type },
    });

    return verificationCode;
  }

  async deleteCode(params: VerificationCodeParams): Promise<void> {
    await this.prismaClient.verificationCode.delete({
      where: verificationCodeUniqueWhere(params),
    });
  }

  async consumeEmailVerification(params: ConsumeEmailVerificationCodeParams): Promise<void> {
    await this.prismaClient.$transaction([
      this.prismaClient.verificationCode.delete({
        where: verificationCodeUniqueWhere({
          email: params.email,
          code: params.code,
          type: 'EMAIL_VERIFICATION',
        }),
      }),
      this.prismaClient.user.update({
        where: { id: params.userId },
        data: { isEmailVerified: true },
      }),
    ]);
  }

  async consumePasswordReset(params: ConsumePasswordResetCodeParams): Promise<void> {
    await this.prismaClient.$transaction([
      this.prismaClient.verificationCode.delete({
        where: verificationCodeUniqueWhere({
          email: params.email,
          code: params.code,
          type: 'PASSWORD_RESET',
        }),
      }),
      this.prismaClient.user.update({
        where: { id: params.userId },
        data: { password: params.password },
      }),
    ]);
  }
}
