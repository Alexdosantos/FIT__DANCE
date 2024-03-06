import * as S from './InputBirdthDate.Styled';
import { useState } from 'react';

const InputBirdthDate = ({
  onDayChange,
  onMonthChange,
  onYearChange,
}: {
  onDayChange: (value: string) => void;
  onMonthChange: (value: string) => void;
  onYearChange: (value: string) => void;
}) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleDayChange = (value: string) => {
    setDay(value);
    onDayChange(value);
  };

  const handleMonthChange = (value: string) => {
    setMonth(value);
    onMonthChange(value);
  };

  const handleYearChange = (value: string) => {
    setYear(value);
    onYearChange(value);
  };

  return (
    <S.DateInputContainer>
      <S.DateInput
        type="text"
        maxLength={2}
        placeholder="DD"
        value={day}
        
        onChange={(e) => handleDayChange(e.target.value)}
      />
      <S.DateSeparator>/</S.DateSeparator>
      <S.DateInput
        type="text"
        maxLength={2}
        placeholder="MM"
        value={month}
        onChange={(e) => handleMonthChange(e.target.value)}
      />
      <S.DateSeparator>/</S.DateSeparator>
      <S.DateInput
        type="text"
        maxLength={4}
        placeholder="YYYY"
        value={year}
        onChange={(e) => handleYearChange(e.target.value)}
      />
    </S.DateInputContainer>
  );
};

export default InputBirdthDate;
