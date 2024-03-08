import * as S from "./CardNewUser.Styled";
import ButtonProps from "../ButtonProps/ButtonProps";
import { ICreateUser } from "../../types/createUserType/createUserType";
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
import InputBirdthDate from "../InputBirthDate/InputBirdthDate";
import { useState } from "react";

const CardNewUser = () => {
  const apiClient = new ApiClient(import.meta.env.VITE_APP_HOST);
  const queryClient = new QueryClient();
  
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

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
      queryClient.invalidateQueries(["getUsers"] as InvalidateQueryFilters);
    },
    onError: async () => {
      alert("Cadastro não realizado. PREENCHA TODOS OS CAMPOS");
    },
  });

  const onSubmit = async (data: ICreateUser) => {
    const newData: SetupUser = {
      ...data,
      birthDate: new Date(`${year}-${month}-${day}T00:00:00`),
    };

    mutation.mutateAsync(newData);
  };

  return (
    <>
      <S.DivTitleNewUser>
        <S.DivNewUser>
          <S.DivTextNewUser>
            <S.TextNewUser>Novo usuário</S.TextNewUser>
          </S.DivTextNewUser>
        </S.DivNewUser>
      </S.DivTitleNewUser>
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
                <S.InputCPF mask="999.999.999-99" {...register("cpf")} />
              </S.DivInputCPF>
              <S.DivInputDate>
                <InputBirdthDate
                  onChangeday={(e) => setDay(e.target.value)}
                  onChangeMonth={(e) => setMonth(e.target.value)}
                  onChanceYear={(e) => setYear(e.target.value)}
                  valueDay={day}
                  valueMonth={month}
                  valueYear={year}
                />
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
    </>
  );
};

export default CardNewUser;
