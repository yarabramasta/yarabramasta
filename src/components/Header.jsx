import React, { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useChangeCurrent } from '../hooks/useChangeCurrent';

import { GlobalContext } from '../context/GlobalContext';

// main
function Header() {
  const { current } = useContext(GlobalContext);
  const [setHome] = useChangeCurrent();
  useEffect(() => {
    if (current.isInitial === true) {
      setHome();
    }
  }, [current]);

  return (
    <div className="header fl-h">
      <Logo />
      <div className="c__right">
        <div className="socmed">
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
        </div>
      </div>
    </div>
  );
}

// [component]: logo
function Logo() {
  const [setHome] = useChangeCurrent();

  return (
    <div className="c__left">
      <Link
        to="/"
        role="presentation"
        onClick={setHome}
      >
        <h3 className="t__logo">
          <span className="wrap">
            <span className="stgr text">B</span>
          </span>
          <span className="wrap">
            <span className="stgr text">R</span>
          </span>
          <span className="wrap">
            <span className="stgr text">A</span>
          </span>
          <span className="wrap">
            <span className="stgr text">M</span>
          </span>
          <span className="wrap">
            <span className="stgr text">A</span>
          </span>
          <span className="wrap">
            <span className="stgr text">S</span>
          </span>
          <span className="wrap">
            <span className="stgr text">T</span>
          </span>
          <span className="wrap">
            <span className="stgr text">A</span>
          </span>
        </h3>
      </Link>
    </div>
  );
}

export default Header;
