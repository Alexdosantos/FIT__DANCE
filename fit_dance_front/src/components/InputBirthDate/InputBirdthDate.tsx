import * as S from "./InputBirdthDate.Styled";

interface IInputBirdthDate {
  onChangeday: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeMonth: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChanceYear: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueDay: string | undefined;
  valueMonth: string | undefined;
  valueYear: string | undefined;
}

const InputBirdthDate = ({
  onChangeday,
  valueDay,
  onChangeMonth,
  valueMonth,
  onChanceYear,
  valueYear,
}: IInputBirdthDate) => {
  return (
    <div>
      <S.Label htmlFor="">Data de Nascimento</S.Label>
      <S.DateInputContainer>
        <S.InputDay
          type="text"
          placeholder="dd"
          maxLength={2}
          value={valueDay}
          onChange={onChangeday}
        />
        <S.InputMonth
          type="text"
          placeholder="mm"
          maxLength={2}
          value={valueMonth}
          onChange={onChangeMonth}
        />
        <S.InputYear
          type="text"
          placeholder="yyyy"
          maxLength={4}
          value={valueYear}
          onChange={onChanceYear}
        />
      </S.DateInputContainer>
    </div>
  );
};

export default InputBirdthDate;
