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
        color: '#fbfbfb',
      }).to('.theme-bg', {
        duration: 0,
        backgroundColor: '#010101',
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
