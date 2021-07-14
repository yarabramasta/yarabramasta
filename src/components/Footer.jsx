import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalContext';

function Footer() {
  const { section } = useContext(GlobalContext);

  return (
    <div className="footer fl-h">
      <div className="c__left">left</div>
      {
        section.current === 'home' ? null
          : (
            <div className="c__center">
              <div className="explore">
                <div className="t__wrap">
                  <span className="text">EXPLORE</span>
                  <span className="sh-h" />
                </div>
              </div>
            </div>
          )
      }
      <div className="c__right">right</div>
    </div>
  );
}

export default Footer;
