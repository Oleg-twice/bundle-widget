import { useState, useCallback, ChangeEvent } from 'react';

interface useInputProps {
  defaultValue: string,
  decorator?: (v: string) => string,
  validator?: (v: string) => boolean,
}

export const identity = <T>(value: T) => value;

const eventToValue = (e: ChangeEvent<HTMLInputElement>) => e.target.value;

export const useInput = ({
  defaultValue,
  decorator = identity,
  validator,
}: useInputProps) => {
  const [value, setValue] = useState(defaultValue);

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const currentVal = decorator(eventToValue(e));

      if (validator && validator(currentVal)) {
        setValue(currentVal);

        return;
      }

      setValue(currentVal);
    },
    [decorator, validator]
  );

  const resetInput = useCallback(
    () => setValue(defaultValue),
    [defaultValue]
  );

  return {
    value,
    onInputChange,
    resetInput,
  };
};
