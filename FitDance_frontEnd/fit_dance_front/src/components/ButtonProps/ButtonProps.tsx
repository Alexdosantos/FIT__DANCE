
import React from "react";
import * as S from "./ButtonProps.Styled";
import { IButtonProps } from "./ButtonProps.Styled";

interface IButton extends IButtonProps {
  buttonName?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

const ButtonProps: React.FC<IButton> = ({
  type,
  onClick,
  buttonName,
  $customFontSize,
  $customBorder,
  $customBackground,
  $customColor,
  $customPadding,
  $customFontFamily,
  $customBorderRadius
}) => {
  return (
    <div>
      <S.Button
        type={type}
        onClick={onClick}
        $customFontSize={$customFontSize}
        $customBorder={$customBorder}
        $customBackground={$customBackground}
        $customColor={$customColor}
        $customPadding={$customPadding}
        $customFontFamily={$customFontFamily}
        $customBorderRadius={$customBorderRadius}
      >
        {buttonName}
      </S.Button>
    </div>
  );
};

export default ButtonProps;
