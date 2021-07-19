/* eslint-disable import/prefer-default-export */
import { useContext, useEffect } from 'react';

import { gsap } from 'gsap';
import { GlobalContext } from '../context/GlobalContext';

function useChangeTheme() {
  const { current } = useContext(GlobalContext);
  const tl = gsap.timeline({
    delay: 0.3,
    smoothChildTiming: true,
  });

  const theme = () => {
    tl.to('body, .text, .theme-bg, a', {
      duration: 0.5,
      ease: 'power3.out',
      backgroundColor: current.primary,
      color: current.accent,
    }).to('.sh', {
      duration: 0.5,
      ease: 'expo.out',
      backgroundColor: current.accent,
    }, '-=0.7');
  };

  useEffect(() => {
    theme();
  });

  return theme;
}

export {
  useChangeTheme,
};
