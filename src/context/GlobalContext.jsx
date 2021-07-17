import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [section, setSection] = useState({
    current: '',
    title: '',
  });
  const [active, setActive] = useState('');

  const values = {
    section,
    active,
    setSection,
    setActive,
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
