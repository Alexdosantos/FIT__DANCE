export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  cpf: string;
  birthDate?: Date;
}
