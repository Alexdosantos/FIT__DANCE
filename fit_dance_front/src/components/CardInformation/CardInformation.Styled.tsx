import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-top: 2%;
  justify-content: space-between;
  
`;

export const DivList = styled.div`
  display: flex;
  gap: 5px;
  width: 45%;
  padding: 2% 0 0 5%;
  background: #b3b2b2;
`;

export const DivNewUser = styled.div`
  display: flex;
  justify-content: end;
  gap: 5px;
  width: 18%;
  padding: 2% 0.5% 0 0;
  background: #b3b2b2;
`;


export const ButtonList = styled.button`
  width: 20%;
  border: none;
  padding: 5px 5px;
  font-size: 1rem;
  font-family: Montserrat;

  background: #cfcece;
`;

export const ButtonInformation = styled.button`
  border: none;
  padding: 5px 9px;
  font-size: 1rem;
  font-family: Montserrat;

  background: #cfcece;
`;
