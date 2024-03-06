import styled from "styled-components";
import InputMask from "react-input-mask";

export const Container = styled.div`
  width: 79%;

  margin: 0 auto;
  margin-top: 2%;
  margin-bottom: 5%;
  padding: 10px 50px;
  border-radius: 5px;
  background: #d9d7d7;
  overflow: auto;
`;

export const DivNameButton = styled.div`
  display: flex;
`;

export const DivButtonActive = styled.div`
  width: 20%;
  flex-direction: column;
  padding: 1.7% 0 0 0;

  align-items: center;
  text-align: center;
`;

export const DivInputName = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const TitleErro = styled.p`
  color: red;
  font-family: Sora;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.2px;
`;

export const LabelName = styled.label`
  font-family: Montserrat;
`;

export const InputName = styled.input`
  width: 90%;
  padding: 10px;
  border: none;
  border-radius: 2px;
  font-size: 1rem;
  font-family: Montserrat;

  &:focus {
    outline: 2px solid #a8a8a8;
  }
`;

export const DivInputEmail = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 2% 0 0 0;
`;

export const LabelEmail = styled.label`
  font-family: Montserrat;
`;

export const InputEmail = styled.input`
  width: 90%;
  padding: 10px;
  border: none;
  border-radius: 2px;
  font-size: 1rem;
  font-family: Montserrat;

  &:focus {
    outline: 2px solid #a8a8a8;
  }
`;

export const DivInputCPFAndDate = styled.div`
  display: flex;
  width: 74.3%;
  justify-content: space-between;
  margin: 2% 0 0 0;
`;

export const DivInputCPF = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const LabelCPF = styled.label`
  font-family: Montserrat;
`;

export const InputCPF = styled(InputMask)`
  width: 90%;
  padding: 10px;
  border: none;
  border-radius: 2px;
  font-size: 1rem;
  font-family: Montserrat;

  &:focus {
    outline: 2px solid #a8a8a8;
  }
`;

export const DivInputDate = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const LabelDate = styled.label`
  font-family: Montserrat;
`;

export const InputDate = styled.input`
  width: 90%;
  padding: 10px;
  border: none;
  border-radius: 2px;
  font-size: 1rem;
  font-family: Montserrat;

  &:focus {
    outline: 2px solid #a8a8a8;
  }
`;

export const DivInputNewPassWordAndButtons = styled.div`
  display: flex;

  width: 97%;
  justify-content: space-between;
  margin: 2% 0 0 0;
`;

export const DivInputNewPassWord = styled.div`
  display: flex;
  justify-content: space-between;

  width: 76.5%;
  align-items: center;
`;

export const DivButtonSave = styled.div`
  padding: 2.3% 0 0 0;
`;

export const InputNewPassWord = styled.input`
  width: 90%;
  padding: 10px;
  border: none;
  border-radius: 2px;
  font-size: 1rem;
  font-family: Montserrat;
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: end;
  width: 23%;
  padding: 1.7% 0 0 0;
`;

export const InputDateWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const InputDatePart = styled.div`
  width: 2em;
  height: 2em;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;
