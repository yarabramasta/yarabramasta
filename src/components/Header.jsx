import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalContext';

function Header() {
  const { section } = useContext(GlobalContext);

  return (
    <div className="header fl-h">
      <div className="c__left">
        <h3 className="t__logo">BRAMASTA</h3>
      </div>
      <div className="c__center">
        <span className="sh-v" />
        <span className="sh-v" />
        <span className="sh-v" />
        <span className="sh-v" />
      </div>
      <div className="c__right">
        <div className="current">
          <span className="text">{section.title}</span>
          <span className="sh-h" />
        </div>
      </div>
    </div>
  );
}

export default Header;
