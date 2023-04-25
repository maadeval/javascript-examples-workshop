import { useEffect, useState } from 'react';

export const MIN_LENGTH = 3;
export const MAX_LENGTH = 10;

export const useInputForm = () => {
  const [inputValue, setInputValue] = useState({
    value: '',
    error: false,
  });

  const setValue = (value) => {
    setInputValue((lastValue) => ({
      ...lastValue,
      value,
    }));
  };

  const setError = (error) => {
    setInputValue((lastValue) => ({
      ...lastValue,
      error,
    }));
  };

  useEffect(() => {
    const isEmptyInput = !inputValue.value.length;
    if (isEmptyInput) return setError(false);

    const isIntoRange =
      inputValue.value.length >= MIN_LENGTH &&
      inputValue.value.length <= MAX_LENGTH;

    setError(!isIntoRange);
  }, [inputValue.value]);

  return {
    value: inputValue.value,
    isError: inputValue.error,
    setValue,
    setError,
  };
};
