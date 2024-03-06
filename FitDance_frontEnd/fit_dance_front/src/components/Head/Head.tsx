import * as S from "./Head.Styled";

interface IHead {
  title: string;
}

const Head = ({ title }: IHead) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Head;
