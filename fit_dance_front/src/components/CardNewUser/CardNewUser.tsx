import * as S from "./CardNewUser.Styled";
import ButtonProps from "../ButtonProps/ButtonProps";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ApiClient, SetupUser } from "../../service/api";
import { createUserSchema } from "../../schemas/createUser/createUserSchemas";
import {
  InvalidateQueryFilters,
  QueryClient,
  useMutation,
} from "@tanstack/react-query";
import PasswordInput from "../PasswordInput/PasswordInput";

const CardNewUser = () => {
  const apiClient = new ApiClient(import.meta.env.VITE_APP_HOST);
  const queryClient = new QueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(createUserSchema),
  });

  const mutation = useMutation({
    mutationFn: async (user: SetupUser) => apiClient.createUser({ user: user }),
    onSuccess: async () => {
      alert("Cadastro realizado com sucesso!");
      reset();
      queryClient.invalidateQueries(["users"] as InvalidateQueryFilters);
    },
    onError: async () => {
      alert("Cadastro não realizado");
    },
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value;
  };

  const onSubmit = async (data: SetupUser) => {
    mutation.mutateAsync(data);
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.DivNameButton>
          <S.DivInputName>
            <S.TitleErro>{errors.name?.message}</S.TitleErro>
            <S.LabelName htmlFor="">Nome</S.LabelName>
            <S.InputName type="text" {...register("name")} />
          </S.DivInputName>
        </S.DivNameButton>
        <S.DivInputEmail>
          <S.TitleErro>{errors.email?.message}</S.TitleErro>
          <S.LabelEmail htmlFor="">E-mail</S.LabelEmail>
          <S.InputEmail type="text" {...register("email")} />
        </S.DivInputEmail>
        <div>
          <S.DivInputCPFAndDate>
            <S.DivInputCPF>
              <S.TitleErro>{errors.cpf?.message}</S.TitleErro>
              <S.LabelCPF htmlFor="">CPF</S.LabelCPF>
              <S.InputCPF
                mask="999.999.999-99"
                {...register("cpf", { onChange: handleInputChange })}
              />
            </S.DivInputCPF>
            <S.DivInputDate>
              <S.TitleErro>{errors.birthDate?.message}</S.TitleErro>
              <S.LabelDate htmlFor="">Data de Nascimento</S.LabelDate>
              <S.InputDate type="date" {...register("birthDate")} />
            </S.DivInputDate>
          </S.DivInputCPFAndDate>
          <S.DivInputNewPassWordAndButtons>
            <S.DivInputNewPassWord>
              <S.DivPassWord>
                <S.TitleErro>{errors.password?.message}</S.TitleErro>
                <PasswordInput register={register("password")} />
              </S.DivPassWord>

              <S.DivButtonSave>
                <ButtonProps
                  buttonName={isSubmitting ? "Salvando..." : "Salvar"}
                  $customFontSize="1rem"
                  $customBorder="none"
                  $customBackground="green"
                  $customColor="white"
                  $customPadding="10px 50px"
                  $customFontFamily="Montserrat"
                  $customBorderRadius="2px"
                  type="submit"
                />
              </S.DivButtonSave>
            </S.DivInputNewPassWord>
          </S.DivInputNewPassWordAndButtons>
        </div>
      </form>
    </S.Container>
  );
};

export default CardNewUser;
