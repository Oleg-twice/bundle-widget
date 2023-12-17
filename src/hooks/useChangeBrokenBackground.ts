import { useState, useEffect } from 'react';

export const useChangeBrokenBackground = (defaultBg: string, bgImage: string | undefined) => {
  const [src, setSrc] = useState('');

    useEffect(
      () => {
        const handler = () => {
          setSrc(defaultBg);
        };
        if (bgImage) {
          const imgEl = document.createElement('img');
          imgEl.setAttribute('src', bgImage);
          imgEl.addEventListener('error', handler);

          return () => {
            imgEl.removeEventListener('error', handler);
          }
        } 
      },
      [bgImage, defaultBg]
    );

    return src;
};
