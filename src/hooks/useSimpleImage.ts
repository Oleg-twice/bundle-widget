import { SyntheticEvent, useCallback, useEffect, useState } from 'react';

type useSimpleImageProps = {
  fallbackSrc: string,
  src: string,
  onLoad?: (e: SyntheticEvent) => void,
  onError?: (e: SyntheticEvent) => void,
}

export const useSimpleImage = ({
  fallbackSrc,
  src,
  onLoad,
  onError,
}: useSimpleImageProps) => {
  const [loaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(fallbackSrc || src);
  const onErrorHandler = useCallback(
    (e: SyntheticEvent<HTMLImageElement, Event>) => {
      if (onError) {
        onError(e);
      }

      setIsError(true);
      setCurrentSrc(fallbackSrc)
    },
    [onError, fallbackSrc]
  );

  const onLoadHandler = useCallback(
    (e: SyntheticEvent<HTMLImageElement, Event>) => {
      if (onLoad) {
        onLoad(e);
      }

      setIsLoaded(true);
    },
    [onLoad]
  )

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
    };
  }, [src]);

  return {
    onLoadHandler,
    onErrorHandler,
    loaded,
    isError,
    currentSrc,
  }
};
