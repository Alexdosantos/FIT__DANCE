import * as S from "./ButtonDelete.Style";

interface IButtonDelete {
  onClick: () => void;
  checked: Date | null;
}

const ButtonDelete = ({ onClick, checked }: IButtonDelete) => {
  return (
    <S.Button onClick={onClick}>
      {checked ? <S.ImgDeleteGray /> : <S.ImgDeleteRed />}
    </S.Button>
  );
};

export default ButtonDelete;
