import ButtonProps from "../ButtonProps/ButtonProps";
import * as S from "./CardInformation.Styled";

interface ICardInformation {
  butonCardNewUser: boolean;
  stateButtos: boolean;
  onClick: () => void;
}

const CardInformation = ({
  butonCardNewUser,
  stateButtos,
  onClick,
}: ICardInformation) => {
  const handle = () => {
    window.location.reload();
  };
  return (
    <S.Container>
      {stateButtos ? (
        <S.DivList>
          <ButtonProps
            onClick={handle}
            buttonName="Lista"
            $customFontSize="1rem"
            $customBorder="none"
            $customBackground="#d2d2d2"
            $customColor="black"
            $customPadding="5px 20px"
            $customFontFamily="Montserrat"
            $customBorderRadius="2px"
          />
          <ButtonProps
            buttonName="informações"
            $customFontSize="1rem"
            $customBorder="none"
            $customBackground="#949292"
            $customColor="black"
            $customPadding="5px 20px"
            $customFontFamily="Montserrat"
            $customBorderRadius="2px"
          />
        </S.DivList>
      ) : null}

      {butonCardNewUser ? (
        <S.DivNewUser>
          <ButtonProps
            onClick={onClick}
            buttonName="Novo Usuário"
            $customFontSize="1rem"
            $customBorder="none"
            $customBackground="green"
            $customColor="white"
            $customPadding="5px 20px"
            $customFontFamily="Montserrat"
            $customBorderRadius="2px"
          />
        </S.DivNewUser>
      ) : null}
    </S.Container>
  );
};

export default CardInformation;
