import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  margin-top: 2%;
  margin-bottom: 5%;
  padding: 10px;
  border-radius: 5px;
  background: #d9d7d7;
  overflow: auto;
`;

export const TableContainer = styled.div`
  width: 100%;
 
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
   
`;

export const TableRow = styled.tr`

  display: flex;
  &:nth-child(even) {
    background-color: #f2f2f2; 
  }

  &:nth-child(odd) {
    background-color: #e6e6e6; 
  }
`;

export const TableHeader = styled.th`
  background-color: #333;
  color: white;
  padding: 10px;
`;

export const DivTableCellName = styled.div`
  display: flex;
  width: 100%;
`;
export const DivTableCell = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;

  border-left: 2px solid white;
`;

export const DivTableCellID = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 15%;

  border-right: 1px solid white;
`;

export const DivTableCellEmail = styled.div`
  display: flex;
  width: 100%;
  border-left: 2px solid white;
`;
export const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  padding-left: 5%;
  font-family: Montserrat;
`;
