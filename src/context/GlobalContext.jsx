import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [title, setTitle] = useState('');
  const [current, setCurrent] = useState({
    isInitial: true,
    home: false,
    about: false,
    timeline: false,
    skill: false,
    primary: '#0d0d0d',
    accent: '#d5d5d5',
  });

  const values = {
    title,
    current,
    setTitle,
    setCurrent,
  };

  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  GlobalContext,
  GlobalProvider,
};
