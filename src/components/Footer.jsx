import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useChangeCurrent } from '../hooks/useChangeCurrent';
import { GlobalContext } from '../context/GlobalContext';
import { ReactComponent as ExploreIcon } from '../assets/icons/ep.svg';
import { hideIcon } from '../animation/epIcon';

function Footer() {
  const { current } = useContext(GlobalContext);

  return (
    <div className="footer fl-h">
      <Indicator />
      <div className="c__center">
        <div className="explore">
          <div className="t__wrap">
            <Link to={current.path}>
              <span className="text">EXPLORE</span>
              <span className="sh-h sh" />
            </Link>
          </div>
          <SvgIcon />
        </div>
      </div>
      <div className="c__right">
        <p className="text fc">
          <span className="wf">
            <span>Web designer and</span>
          </span>
          <span className="wf">
            <span>fullstack developer</span>
          </span>
        </p>
      </div>
    </div>
  );
}

// [component]: indicator
function Indicator() {
  const { current } = useContext(GlobalContext);
  const [setHome, setAbout, setTl, setSkill] = useChangeCurrent();

  return (
    <div className="c__left c__wrapper">
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

function SvgIcon() {
  const { current } = useContext(GlobalContext);

  useEffect(() => {
    if (current.isInitial === true) {
      hideIcon();
    }
  }, [current]);

  return (
    <div className="svg-icon">
      <Link to={current.path}>
        <span className="ep-i">
          <span className="ln-v" />
          <div className="i-kit">
            <ExploreIcon />
          </div>
        </span>
      </Link>
    </div>
  );
}

export default Footer;
