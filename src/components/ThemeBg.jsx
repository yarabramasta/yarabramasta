import React, { useContext, useEffect } from 'react';

import { gsap } from 'gsap';

import { GlobalContext } from '../context/GlobalContext';

const tl = gsap.timeline({
  delay: 0,
});

function Background() {
  const { section } = useContext(GlobalContext);

  useEffect(() => {
    if (section.current === 'home') {
      tl.to('body', {
        duration: 0,
        color: '#d5d5d5',
      }).to('.theme-bg', {
        duration: 0,
        backgroundColor: '#0d0d0d',
      }, '-=0.1');
    }
  }, [section]);

  return (
    <div
      className="theme-bg"
    />
  );
}

export default Background;
