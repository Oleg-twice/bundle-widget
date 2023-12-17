import { LegacyRef } from 'react';
import { ICarouselItemProps } from '../CarouselItem';

export const getProperRef = (
  idx: number, 
  items: ICarouselItemProps[], 
  firstItemRef: LegacyRef<HTMLDivElement>, 
  lastItemRef: LegacyRef<HTMLDivElement>
) => {
  if (idx === 0) {
    return firstItemRef;
  }

  if (items.length > 1 && idx === items.length - 1) {
    return lastItemRef;
  }

  return null;
}