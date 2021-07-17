import React, { useContext, useEffect } from 'react';

import { GlobalContext } from '../context/GlobalContext';

import {
  homeTheme,
  aboutTheme,
  tlTheme,
  skillTheme,
} from '../constants/theme';

function Background() {
  const { section } = useContext(GlobalContext);

  useEffect(() => {
    if (section.current === 'home') {
      homeTheme();
    }
    if (section.current === 'about') {
      aboutTheme();
    }
    if (section.current === 'timeline') {
      tlTheme();
    }
    if (section.current === 'skill') {
      skillTheme();
    }
  }, [section]);

  return (
    <div
      className="theme-bg"
    />
  );
}

export default Background;
