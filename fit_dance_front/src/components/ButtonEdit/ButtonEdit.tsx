import * as S from './ButtonEdit.Styled'

interface IButtonEdit {
    onClick: () => void
}

const ButtonEdit = ({onClick}:IButtonEdit) => {
  return (
    <div>
        <S.Button onClick={onClick}>
            <S.ImgEdit/>
        </S.Button>
    </div>
  )
}

export default ButtonEdit