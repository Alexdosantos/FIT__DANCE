import * as S from "./ButtonCheckMark.Style";

interface CheckmarkButtonProps {
  onClick: () => void;
  checked: boolean;
}

const CheckmarkButton = ({ onClick, checked }: CheckmarkButtonProps) => {
  return (
    <S.Button onClick={onClick}>
      {checked ? <S.ImgCheckGreen /> : <S.ImgCheckGray />}
    </S.Button>
  );
};

export default CheckmarkButton;
