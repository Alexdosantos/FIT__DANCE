export interface ICreateUser {
  user: {
    name: string;
    email: string;
    password: string;
    cpf: string;
    birthDate: Date;
  };
}
