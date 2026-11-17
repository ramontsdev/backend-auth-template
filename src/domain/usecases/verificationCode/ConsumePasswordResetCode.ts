export type ConsumePasswordResetCodeParams = {
  email: string;
  code: string;
  userId: string;
  password: string;
};

export interface IConsumePasswordResetCode {
  consume(params: ConsumePasswordResetCodeParams): Promise<void>;
}