import * as yup from "yup";

export const createUserSchema = yup.object({
  name: yup.string().required("O campo nome precisa ser preenchido"),
  email: yup
    .string()
    .email("Preencha com um email válido")
    .required("O campo email precisa ser preenchido"),
  cpf: yup
    .string()
    .typeError("Cpf deve ser um número")

    .required("Cpf é obrigatório"),
  birthDate: yup
    .date()
    .required("O campo data de nascimento precisa ser preenchido"),
  password: yup.string().required("O campo senha precisa ser preenchido"),
});
