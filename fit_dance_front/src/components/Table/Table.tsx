import { useState } from "react";
import CheckmarkButton from "../ButtonCheckMark/ButtonCheckMark";
import * as S from "./Table.Style";
import ButtonDelete from "../ButtonDelete/ButtonDelete";
import ButtonEdit from "../ButtonEdit/ButtonEdit";
import { ApiClient, UserInfo } from "../../service/api";
import { useMutation, useQuery } from "@tanstack/react-query";

interface ITable {
  onClickEdit: (id: number) => void;
}

const Table = ({ onClickEdit }: ITable) => {
  const apiClient = new ApiClient(import.meta.env.VITE_APP_HOST);
  const [active, setIsActive] = useState();
  const [isUserDelete, setIsUserDelete] = useState<boolean>();

  const { data: users, refetch } = useQuery({
    queryKey: ["getusers"],
    queryFn: async () => apiClient.getAllUsers(),
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

  const handleToggleActive = (userId: number, activeState: boolean) => {
    if (activeState) {
      userInactive.mutateAsync(userId);
    } else {
      userActive.mutateAsync(userId);
    }
    setIsActive(active);
  };

  const handleToggleDelete = (userId: number, isDelete: Date | null) => {
    if (!isDelete) {
      userDelete.mutateAsync(userId);
    }
    setIsUserDelete(isUserDelete);
  };

  return (
    <S.Container>
      <S.TableContainer>
        <S.StyledTable>
          {users?.map((item: UserInfo) => (
            <S.TableRow key={item.id}>
              <S.DivTableCellID>
                <S.TableCell>{item.id}</S.TableCell>
              </S.DivTableCellID>
              <S.DivTableCellName>
                <S.TableCell>{item.name}</S.TableCell>
              </S.DivTableCellName>
              <S.DivTableCellEmail>
                <S.TableCell>{item.email}</S.TableCell>
              </S.DivTableCellEmail>
              <S.DivTableCell>
                <S.TableCell>
                  <CheckmarkButton
                    onClick={() => handleToggleActive(item.id, item.isActive)}
                    checked={item.isActive}
                  />
                </S.TableCell>
                <S.TableCell>
                  <ButtonDelete
                    onClick={() => handleToggleDelete(item.id, item.deletedAt)}
                    checked={item.deletedAt}
                  />
                </S.TableCell>
                <S.TableCell>
                  <ButtonEdit onClick={() => onClickEdit(item.id)} />
                </S.TableCell>
              </S.DivTableCell>
            </S.TableRow>
          ))}
        </S.StyledTable>
      </S.TableContainer>
    </S.Container>
  );
};

export default Table;
