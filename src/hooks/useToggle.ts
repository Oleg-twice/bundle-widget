import { useState, useCallback } from 'react';

export const useToggle = (defaultState: boolean = false) => {
  const [toggle, setToggle] = useState(defaultState);

  const onToggleChange = useCallback(() => {
    setToggle(prev => !prev);
  }, []);

  return [toggle, onToggleChange] as const;
}
