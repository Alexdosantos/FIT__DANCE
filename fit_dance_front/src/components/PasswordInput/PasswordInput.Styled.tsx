import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DivInputNewPassWord = styled.div`
  display: flex;
  justify-content: space-between;
  width: 47%;

  align-items: center;
  text-align: center;

  border: none;
  border-radius: 2px;
  font-size: 1rem;
  font-family: Montserrat;
  background: white;
  &:focus-within {
    outline: 2px solid #a8a8a8;
  }
`;

export const LabelDate = styled.label`
  font-family: Montserrat;
`;
export const InputNewPassWord = styled.input`
  width: 85%;
  padding: 12px;

  border: none;
  border-radius: 2px;
  font-size: 1rem;
  font-family: Montserrat;
  &:focus {
    outline: none;
  }
`;

export const ButttonVisible = styled.button`
  display: flex;
  justify-content: center;
  margin: 0 2% 0 0;

  align-items: center;
  text-align: center;
  background: transparent;
  border: none;
  cursor: pointer;
`;
