import { SyntheticEvent, memo } from 'react';
import classNames from 'classnames';
import placeholderImg from 'src/assets/placeholder.png';
import { useSimpleImage } from 'src/hooks/useSimpleImage';
import './SimpleImage.scss';

interface ImageProps {
  src: string,
  alt?: string,
  width: number,
  height: number,
  className?: string,
  autoHeight?: boolean,
  autoWidth?: boolean,
  onError?: (e: SyntheticEvent) => void,
  onLoad?: (e: SyntheticEvent) => void,
  fallbackSrc?: string,
}

const NAME_SPACE = 'simple-image';

const SimpleImage = memo(
  ({
    src,
    alt,
    width,
    height,
    autoWidth,
    autoHeight,
    className = '',
    onError,
    onLoad,
    fallbackSrc = placeholderImg,
  }: ImageProps) => {
  const {
    currentSrc,
    loaded,
    isError,
    onLoadHandler,
    onErrorHandler,
  } = useSimpleImage({
    src,
    fallbackSrc,
    onError,
    onLoad,
  });

  const imagesClassNames = classNames(
    NAME_SPACE,
    className,
    {
      [`${NAME_SPACE}__real-image--loading`]: !loaded,
      [`${NAME_SPACE}__real-image--rounded`]: currentSrc === fallbackSrc,
    },
  );

  return (
    <div className={`${NAME_SPACE}__wrapper`}>
      <img
        className={imagesClassNames}
        src={currentSrc}
        alt={alt}
        width={autoWidth ? '' : width}
        height={autoHeight ? '' : height}
        onError={onErrorHandler}
        onLoad={onLoadHandler}
        loading="lazy"
      />
      {!loaded && !isError && (
        <span
          className={`${NAME_SPACE}__empty-img--loading`}
          style={{
            width,
            height,
          }}
        />
      )}
    </div>
  )
});

export default SimpleImage;
