import { useCallback, useRef } from 'react';

export const useBundleScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback(
    (scrollRight: boolean) => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: scrollRight ? 300 : -300, behavior: "smooth" });
      }
    },
    []
  );

  const scrollOnClick = useCallback(
    (scrollRight: boolean) => () => {
      scroll(scrollRight);
    },
    [scroll]
  );

  return {
    scrollRef,
    scrollOnClick,
  };
};
