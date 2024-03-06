import styled from "styled-components";
import { RiAddCircleFill } from "react-icons/ri";

export const Button = styled.button`
  border: none;
  background: transparent;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const ImgDeleteGray = styled(RiAddCircleFill)`
  color: gray;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
`;
export const ImgDeleteRed = styled(RiAddCircleFill)`
  color: #ff0000;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
`;
