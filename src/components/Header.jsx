import React, { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useChangeCurrent } from '../hooks/useChangeCurrent';

import { GlobalContext } from '../context/GlobalContext';

// main
function Header() {
  const { current, title } = useContext(GlobalContext);
  const [setHome] = useChangeCurrent();
  useEffect(() => {
    if (current.isInitial === true) {
      setHome();
    }
  }, [current, title]);

  return (
    <div className="header fl-h">
      <Logo />
      <Indicator />
      <div className="c__right">
        <div className="current cr-hd">
          <div className="w-cr">
            <span className="text">{title}</span>
            <span className="sh-h sh" />
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

// [component]: indicator
function Indicator() {
  const { current } = useContext(GlobalContext);
  const [setHome, setAbout, setTl, setSkill] = useChangeCurrent();

  return (
    <div className="c__center c__wrapper">
      <span
        className={current.home === true ? 'sh-v sh c-1 sh-v--active' : 'sh-v sh c-1'}
        role="presentation"
        onClick={setHome}
      />
      <span
        className={current.about === true ? 'sh-v sh c-2 sh-v--active' : 'sh-v sh c-2'}
        role="presentation"
        onClick={setAbout}
      />
      <span
        className={current.timeline === true ? 'sh-v sh c-3 sh-v--active' : 'sh-v sh c-3'}
        role="presentation"
        onClick={setTl}
      />
      <span
        className={current.skill === true ? 'sh-v sh c-4 sh-v--active' : 'sh-v sh c-4'}
        role="presentation"
        onClick={setSkill}
      />
    </div>
  );
}

export default Header;
