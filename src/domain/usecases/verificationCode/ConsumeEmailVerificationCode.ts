export type ConsumeEmailVerificationCodeParams = {
  email: string;
  code: string;
  userId: string;
};

export interface IConsumeEmailVerificationCode {
  consume(params: ConsumeEmailVerificationCodeParams): Promise<void>;
}