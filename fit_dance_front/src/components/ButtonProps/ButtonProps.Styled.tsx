import styled from "styled-components";

export interface IButtonProps {
  $customPadding?: string;
  $customFontSize?: string;
  $customColor?: string;
  $customBackground?: string;
  $customBorder?: string;
  $customBorderRadius?: string;
  $customFontFamily?: string;
}

export const Button = styled.button<IButtonProps>`
  padding: ${(props) => props.$customPadding};
  font-size: ${(props) => props.$customFontSize};
  color: ${(props) => props.$customColor};
  background: ${(props) => props.$customBackground};
  border: ${(props) => props.$customBorder};
  border-radius: ${(props) => props.$customBorderRadius};
  font-family: ${(props) => props.$customFontFamily};
  cursor: pointer;
`;
