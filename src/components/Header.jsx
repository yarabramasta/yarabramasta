import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalContext';

// main
function Header() {
  const { section } = useContext(GlobalContext);

  return (
    <div className="header fl-h">
      <Logo />
      <Indicator />
      <div className="c__right">
        <div className="current">
          <span className="text">{section.title}</span>
          <span className="sh-h" />
        </div>
      </div>
    </div>
  );
}

// [component]: indicator
function Indicator() {
  const { active, setActive, setSection } = useContext(GlobalContext);
  const lines = [
    {
      className: 'c-1',
    },
    {
      className: 'c-2',
    },
    {
      className: 'c-3',
    },
    {
      className: 'c-4',
    },
  ];

  const changeState = (index) => {
    if (index === 0) {
      setSection({
        current: 'home',
        title: 'HOME',
      });
      setActive('c-1');
    }
    if (index === 1) {
      setSection({
        current: 'about',
        title: 'ABOUT',
      });
      setActive('c-2');
    }
    if (index === 2) {
      setSection({
        current: 'timeline',
        title: 'TIMELINE',
      });
      setActive('c-3');
    }
    if (index === 3) {
      setSection({
        current: 'skill',
        title: 'SKILLS',
      });
      setActive('c-4');
    }
  };

  return (
    <div className="c__center">
      {
        lines.map(({ className }, i) => (
          <span
            key={className}
            className={active === className ? `sh-v ${className} sh-v--active` : `sh-v ${className}`}
            role="presentation"
            onClick={
                (evt) => {
                  evt.preventDefault();
                  changeState(i);
                }
              }
          />
        ))
      }
    </div>
  );
}

function Logo() {
  const { setSection, setActive } = useContext(GlobalContext);

  return (
    <div className="c__left">
      <Link
        to="/"
        onClick={() => {
          setSection({
            current: 'home',
            title: 'HOME',
          });
          setActive('c-1');
        }}
      >
        <h3 className="t__logo">
          <span className="stgr">B</span>
          <span className="stgr">R</span>
          <span className="stgr">A</span>
          <span className="stgr">M</span>
          <span className="stgr">A</span>
          <span className="stgr">S</span>
          <span className="stgr">T</span>
          <span className="stgr">A</span>
        </h3>
      </Link>
    </div>
  );
}

export default Header;
