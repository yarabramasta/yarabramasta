import React, { useContext, useEffect } from 'react';

import { GlobalContext } from '../context/GlobalContext';

function HomePage() {
  const { setSection, setActive } = useContext(GlobalContext);

  useEffect(() => {
    setSection({ current: 'home', title: 'HOME' });
    setActive('c-1');
  }, [setSection]);

  return (
    <div className="content home">
      <div className="m__center fl-h">
        <div className="ls" />
        <div className="ls" />
        <div className="ls" />
      </div>
    </div>
  );
}

export default HomePage;
