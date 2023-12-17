import { useRef, useEffect } from 'react';
import { useOnScreen } from './useOnScreen';
import { ICarouselItemProps } from 'src/components/CarouselItem';

export const useGetDisplayArrowBtns = (
  getDisplayArrows: (args: boolean) => void,
  items: ICarouselItemProps[] = []
) => {
  const firstItemRef = useRef(null);
  const lastItemRef = useRef(null);
  const isFirstVisible = useOnScreen(firstItemRef);
  const isLastVisible = useOnScreen(lastItemRef);
  const isCorrectLength = items?.length > 3;

  useEffect(
    () => {
      getDisplayArrows((!isFirstVisible || !isLastVisible) && isCorrectLength);
    },
    [getDisplayArrows, isFirstVisible, isLastVisible, isCorrectLength]
  );

  return {
    firstItemRef,
    lastItemRef,
  }
};
