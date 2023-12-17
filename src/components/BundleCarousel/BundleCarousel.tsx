import { memo, useCallback, useState } from 'react';
import { CarouselItemsList } from 'src/components/CarouselItemsList';
import { ICarouselItemProps } from 'src/components/CarouselItem';
import { useBundleScroll } from 'src/hooks/useBundleScroll';
import defaultBg from 'src/assets/snowymountains.png';
import { withSkeletone } from 'src/hoc/withSkeleton';
import './BundleCarousel.scss';

export interface IBundleCarouselProps {
  available?: string,
  price?: string,
  time?: string,
  bgImage?: string,
  maxAvailable?: string,
  items?: ICarouselItemProps[],
}

const NAME_SPACE = 'bundle-carousel';

const BundleCarousel = memo(
  ({
    available,
    price,
    time,
    bgImage,
    items,
    maxAvailable,
  }: IBundleCarouselProps) => {
    const [displayArrows, setDisplayArrows] = useState(false);

    const {
      scrollRef,
      scrollOnClick
    } = useBundleScroll();

    const handleSetDisplayArrows = useCallback(
      (shouldDisplay: boolean) => {
        setDisplayArrows(shouldDisplay)
      },
      []
    );

    return (
      <div className={`${NAME_SPACE}__container`}>
        <div className={`${NAME_SPACE}__wrapper`} style={{ backgroundImage: `url(${bgImage || defaultBg})`}}>
          <CarouselItemsList
            scrollRef={scrollRef}
            items={items}
            getDisplayArrows={handleSetDisplayArrows}
          />
        </div>
        {displayArrows && items?.length && (
          <>
            <button
              className={`${NAME_SPACE}__arrow ${NAME_SPACE}__arrow-left`}
              onClick={scrollOnClick(false)}
            >&lt;</button>
            <button
              className={`${NAME_SPACE}__arrow ${NAME_SPACE}__arrow-right`}
              onClick={scrollOnClick(true)}
            >&gt;</button>
          </>
        )}
        <div className={`${NAME_SPACE}__control--holder`}>
          <span className={`${NAME_SPACE}__control--holder-text text-white`}>
            {available}<span className={`${NAME_SPACE}__slash`}>/</span>{maxAvailable}
          </span>
          <button className={`${NAME_SPACE}__button`}>{price}</button>
          <span className={`${NAME_SPACE}__control--holder-text text-white`}>{time}</span>
        </div>
      </div>
    )
  }
);

const BundleCarouselWithSkeleton = withSkeletone<IBundleCarouselProps>(BundleCarousel)

export default BundleCarouselWithSkeleton;
