import React, { useContext, useEffect } from 'react';

import { GlobalContext } from '../context/GlobalContext';

function HomePage() {
  const { setSection } = useContext(GlobalContext);

  useEffect(() => {
    setSection({ current: 'home', title: 'HOME' });
  }, [setSection]);

  return (
    <div className="content home">
      <div className="m__center fl-h">
        <div className="ls">
          <img src="" alt="menu" />
        </div>
        <div className="ls">
          <img src="" alt="menu" />
        </div>
        <div className="ls">
          <img src="" alt="menu" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
