import { LegacyRef, memo, useMemo } from 'react';
import classNames from 'classnames';
import { useGetDisplayArrowBtns } from 'src/hooks/useGetDisplayArrowBtns';
import { CarouselItem, ICarouselItemProps } from '../CarouselItem';
import './CarouselItemsList.scss';
import { getProperRef } from './utils';

export interface ICarouselItemsListProps {
  items?: ICarouselItemProps[],
  className?: string,
  scrollRef: LegacyRef<HTMLDivElement>,
  getDisplayArrows: (arg: boolean) => void,
  maxItems?: number,
}

const NAME_SPCE = 'carousel-items-list';

const CarouselItemsList = memo(
  ({
    items = [],
    className,
    scrollRef,
    getDisplayArrows,
    maxItems = 50,
  }: ICarouselItemsListProps) => {
    const {
      firstItemRef,
      lastItemRef,
    } = useGetDisplayArrowBtns(getDisplayArrows, items);

    const currentItems = useMemo(
      () => {
        return [...items].splice(0, maxItems);
      },
      [maxItems, items]
    );

    return (
      <div className={classNames(NAME_SPCE, className)} ref={scrollRef}>
        {currentItems?.map(
          (item, idx) => (
            <CarouselItem
              key={idx}
              {...item}
              itemRef={getProperRef(
                idx,
                items,
                firstItemRef,
                lastItemRef,
              )}
            />
          )
        )}
      </div>
    );
  }
);

export default CarouselItemsList;
