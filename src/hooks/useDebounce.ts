import { useEffect, useState } from 'react'

export const useDebounce = <T>(v: T, ms?: number) => {
  const [debouncedVal, setDebouncedVal] = useState<T>(v);

  useEffect(
    () => {
      const timer = setTimeout(
        () => setDebouncedVal(v),
        ms,
      );

      return () => {
        if (timer) {
          clearTimeout(timer);
        }
      }
    },
    [v, ms]
  )


  return debouncedVal;
}