import * as S from "./CardEdit.Styled";
import ButtonProps from "../ButtonProps/ButtonProps";
import { ApiClient, SetupUser } from "../../service/api";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { format } from "date-fns";
import { createUserSchema } from "../../schemas/createUser/createUserSchemas";
import PasswordInput from "../PasswordInput/PasswordInput";

interface ICardEdit {
  id: number;
}

const CardEdit = ({ id }: ICardEdit) => {
  const apiClient = new ApiClient(import.meta.env.VITE_APP_HOST);

  const {
    data: usersId,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["getusersId", id],
    queryFn: async () => apiClient.getUserById({ id }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(createUserSchema),
    defaultValues: usersId,
  });

  const userActive = useMutation({
    mutationFn: async (userId: number) =>
      apiClient.activateUser({ userId: userId }),
    onSuccess: () => refetch(),
  });
  const userInactive = useMutation({
    mutationFn: async (userId: number) =>
      apiClient.inactivateUser({ userId: userId }),
    onSuccess: () => refetch(),
  });

  const userDelete = useMutation({
    mutationFn: async (userId: number) =>
      apiClient.deleteUser({ userId: userId }),
    onSuccess: () => refetch(),
  });

  const mutation = useMutation({
    mutationFn: async (users: SetupUser) =>
      apiClient.updateUser({ id, user: users }),
    onSuccess: () => {
      alert("Usuário atualzado com sucesso");
    },
    onError: () => {
      alert("Usuário não atualizado");
    },
  });

  const isUserActive = (usersId: number, active: boolean) => {
    if (active) {
      userInactive.mutateAsync(usersId);
    } else {
      userActive.mutateAsync(usersId);
    }
  };

  const handleToggleDelete = (userId: number, isDelete: Date | null) => {
    if (!isDelete) {
      userDelete.mutateAsync(userId);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value;
  };

  const onSubmit = async (data: SetupUser) => {
    try {
      await mutation.mutateAsync({ ...data });
    } catch (error) {
      console.error("Erro ao atualizar usuário", error);
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <S.Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.DivNameButton>
              <S.DivInputName>
                <S.TitleErro>{errors.name?.message}</S.TitleErro>
                <S.LabelName htmlFor="">Nome</S.LabelName>
                <S.InputName
                  type="text"
                  {...register("name")}
                  defaultValue={usersId?.name}
                />
              </S.DivInputName>
              <S.DivButtonActive>
                <ButtonProps
                  type="button"
                  onClick={() =>
                    usersId && isUserActive(usersId.id, usersId.isActive)
                  }
                  buttonName={usersId?.isActive ? "Desativar" : "Ativar"}
                  $customFontSize="1rem"
                  $customBorder="none"
                  $customBackground={usersId?.isActive ? "gray" : "green"}
                  $customColor="white"
                  $customPadding="10px 50px"
                  $customFontFamily="Montserrat"
                  $customBorderRadius="2px"
                />
              </S.DivButtonActive>
            </S.DivNameButton>
            <S.DivInputEmail>
              <S.TitleErro>{errors.email?.message}</S.TitleErro>
              <S.LabelEmail htmlFor="">E-mail</S.LabelEmail>
              <S.InputEmail
                type="text"
                {...register("email")}
                defaultValue={usersId?.email}
              />
            </S.DivInputEmail>
            <div>
              <S.DivInputCPFAndDate>
                <S.DivInputCPF>
                  <S.TitleErro>{errors.cpf?.message}</S.TitleErro>
                  <S.LabelCPF htmlFor="">CPF</S.LabelCPF>

                  <S.InputCPF
                    mask="999.999.999-99"
                    {...register("cpf", { onChange: handleInputChange })}
                    defaultValue={usersId?.cpf}
                  />
                </S.DivInputCPF>
                <S.DivInputDate>
                  <S.TitleErro>{errors.birthDate?.message}</S.TitleErro>
                  <S.LabelDate htmlFor="">Data de Nascimento</S.LabelDate>
                  <S.InputDate
                    type="date"
                    {...register("birthDate")}
                    defaultValue={
                      usersId?.birthDate
                        ? format(new Date(usersId?.birthDate), "yyyy-MM-dd")
                        : undefined
                    }
                  />
                </S.DivInputDate>
              </S.DivInputCPFAndDate>

              <S.TitleErro>{errors.password?.message}</S.TitleErro>
              <S.DivInputNewPassWordAndButtons>
                <S.DivInputNewPassWord>
                  <PasswordInput
                    register={register("password")}
                    defaultValue={usersId?.password}
                  />

                  <S.DivButtonSave>
                    <ButtonProps
                      type="submit"
                      buttonName={isSubmitting ? "Salvando..." : "Salvar"}
                      $customFontSize="1rem"
                      $customBorder="none"
                      $customBackground="green"
                      $customColor="white"
                      $customPadding="10px 50px"
                      $customFontFamily="Montserrat"
                      $customBorderRadius="2px"
                    />
                  </S.DivButtonSave>
                </S.DivInputNewPassWord>
                <S.DivButtons>
                  <ButtonProps
                    type="button"
                    onClick={() =>
                      usersId &&
                      handleToggleDelete(usersId.id, usersId.deletedAt)
                    }
                    buttonName={usersId?.deletedAt ? "Deletado" : "Excluir"}
                    $customFontSize="1rem"
                    $customBorder="none"
                    $customBackground={usersId?.deletedAt ? "gray" : "red"}
                    $customColor="white"
                    $customPadding="10px 50px"
                    $customFontFamily="Montserrat"
                    $customBorderRadius="2px"
                  />
                </S.DivButtons>
              </S.DivInputNewPassWordAndButtons>
            </div>
          </form>
        </S.Container>
      )}
    </>
  );
};

export default CardEdit;
