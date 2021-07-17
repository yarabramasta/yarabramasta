import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalContext';

function Footer() {
  const { section } = useContext(GlobalContext);

  return (
    <div className="footer fl-h">
      <div className="c__left">
        <p className="text">
          <span>Web designer and</span>
          <span>fullstack developer</span>
        </p>
      </div>
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
      <div className="c__right">
        <p className="text">
          <span className="lk__socmed">
            <a
              href="mailto:bram.asta.yara111@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </span>
          <span className="lk__socmed">
            <a
              href="https://www.instagram.com/_bram111/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
