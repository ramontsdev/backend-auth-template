import { UserModel } from '@/domain/models/userModel';

export type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
  document?: string | null;
};

export interface ICreateUser {
  create(createUserDTO: CreateUserDTO): Promise<UserModel>;
}
