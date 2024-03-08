import styled from "styled-components";

export const Label = styled.label`
  font-family: Montserrat;
`;

export const DateInputContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const InputDay = styled.input`
  width: 40px;
  height: 35px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  font-size: 1rem;

  font-family: Montserrat;

  &:focus {
    outline: 2px solid #a8a8a8;
  }
`;

export const InputMonth = styled.input`
  width: 40px;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  font-size: 1rem;

  font-family: Montserrat;

  &:focus {
    outline: 2px solid #a8a8a8;
  }
`;

export const InputYear = styled.input`
  width: 85px;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  font-size: 1rem;

  font-family: Montserrat;

  &:focus {
    outline: 2px solid #a8a8a8;
  }
`;
