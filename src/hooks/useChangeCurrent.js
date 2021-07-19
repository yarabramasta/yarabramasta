/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';

import { useChangeTheme } from './useChangeTheme';

import { GlobalContext } from '../context/GlobalContext';

function useChangeCurrent() {
  const { setCurrent, setTitle } = useContext(GlobalContext);
  const theme = useChangeTheme();

  const setHome = () => {
    setCurrent({
      isInitial: false,
      home: true,
      about: false,
      timeline: false,
      skill: false,
      primary: '#0d0d0d',
      accent: '#d5d5d5',
    });
    setTitle('HOME');
    theme();
  };
  const setAbout = () => {
    setCurrent({
      isInitial: false,
      home: false,
      about: true,
      timeline: false,
      skill: false,
      primary: '#d5d5d5',
      accent: '#0d0d0d',
    });
    setTitle('ABOUT');
    theme();
  };
  const setTl = () => {
    setCurrent({
      isInitial: false,
      home: false,
      about: false,
      timeline: true,
      skill: false,
      primary: '#312e34',
      accent: '#e28468',
    });
    setTitle('TIMELINE');
    theme();
  };
  const setSkill = () => {
    setCurrent({
      isInitial: false,
      home: false,
      about: false,
      timeline: false,
      skill: true,
      primary: '#b09f99',
      accent: '#292826',
    });
    setTitle('SKILLS');
    theme();
  };

  return [setHome, setAbout, setTl, setSkill];
}

export {
  useChangeCurrent,
};
