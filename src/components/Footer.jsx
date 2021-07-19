import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalContext';

function Footer() {
  const { current } = useContext(GlobalContext);

  return (
    <div className="footer fl-h">
      <div className="c__left">
        <p className="text fc">
          <div className="wf">
            <span>Web designer and</span>
          </div>
          <div className="wf">
            <span>fullstack developer</span>
          </div>
        </p>
      </div>
      {
        current.home === false ? (
          <div className="c__center">
            <div className="explore">
              <div className="t__wrap">
                <span className="text">EXPLORE</span>
                <span className="sh-h sh" />
              </div>
            </div>
          </div>
        ) : null
      }
      <div className="c__right">
        <div className="socmed">
          <div className="wf">
            <span className="lk__socmed">
              <a
                href="mailto:bram.asta.yara111@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text"
              >
                Email
              </a>
              <span className="sh-h sh" />
            </span>
          </div>
          <div className="wf">
            <span className="lk__socmed">
              <a
                href="https://www.instagram.com/_bram111/"
                target="_blank"
                rel="noreferrer"
                className="text"
              >
                Instagram
              </a>
              <span className="sh-h sh" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
