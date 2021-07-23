/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';

function useLoadImage(src) {
  const [source, setSource] = useState(null);
  useEffect(() => {
    setSource(null);
    if (src) {
      const handleLoad = () => {
        setSource(src);
      };
      const image = new Image();
      image.addEventListener('load', handleLoad);
      image.src = src;
      return () => {
        image.removeEventListener('load', handleLoad);
      };
    }
    return null;
  }, [src]);

  return [source, setSource];
}

export {
  useLoadImage,
};
