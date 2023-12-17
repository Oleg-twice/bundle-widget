import { LegacyRef, memo } from 'react';
import { SimpleImage  } from 'src/components/SimpleImage';
import { useDetectDevice } from 'src/hooks/useDetectDevice';
import './CarouselItem.scss';

const NAME_SPACE = 'carousel-item';

export interface ICarouselItemProps {
  imageSrc: string,
  amount: string,
  textColor: string,
  itemRef?: LegacyRef<HTMLDivElement> | null,
}

type IMAGE_SIZES_TYPE = {
  [key: string]: Record<string, number>
}

const IMAGE_SIZES: IMAGE_SIZES_TYPE = {
  MOBILE: {
    width: 80,
    height: 86,
  },
  TABLET: {
    width: 80,
    height: 86,
  },
  DESKTOP: {
    width: 70,
    height: 72,
  }
};

const CarouselItem = memo(
  ({
    imageSrc,
    amount,
    textColor,
    itemRef,
  }: ICarouselItemProps) => {
    const values = useDetectDevice();

    return (
      <div className={`${NAME_SPACE}__wrapper`} ref={itemRef}>
        <SimpleImage
          src={imageSrc}
          width={IMAGE_SIZES.DESKTOP.width}
          height={IMAGE_SIZES.DESKTOP.height}
          {...IMAGE_SIZES[values?.ACTIVE_DEVICE as string]}
        />
        <div className={`${NAME_SPACE}__title`}>
          <h2 className={`text-${textColor}`}>{amount}</h2>
        </div>
      </div>
    )
  }
);

export default CarouselItem;
