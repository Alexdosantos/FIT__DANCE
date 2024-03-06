import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import * as S from "./PasswordInput.Styled";

interface IPasswordInput {
  register: UseFormRegisterReturn<"password">;
  defaultValue?: string | undefined;
}

const PasswordInput = ({ register, ...defaultValue }: IPasswordInput) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <S.Container>
      <S.LabelDate htmlFor="">Nova senha</S.LabelDate>
      <S.DivInputNewPassWord>
        <S.InputNewPassWord
          type={passwordVisible ? "text" : "password"}
          {...register}
          {...defaultValue}
        />
        <S.ButttonVisible
          type="button"
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          {passwordVisible ? (
            <FiEye style={{ width: "20px", height: "20px" }} />
          ) : (
            <FiEyeOff style={{ width: "20px", height: "20px" }} />
          )}
        </S.ButttonVisible>
      </S.DivInputNewPassWord>
    </S.Container>
  );
};

export default PasswordInput;
