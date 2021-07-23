import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/GlobalContext';
import { useChangeCurrent } from '../hooks/useChangeCurrent';
import { useLoadImage } from '../hooks/useLoadImage';
import { animatedStart } from '../animation/start';
import aboutImg from '../assets/images/IMG_BRAM_2020-01.jpg';
import tlImg from '../assets/images/IMG_BRAM_2020-02.jpeg';
import skillImg from '../assets/images/IMG_BRAM_2020-03.jpeg';

function MainContent() {
  const { current } = useContext(GlobalContext);
  const [setHome, setAbout, setTl, setSkill] = useChangeCurrent();

  useEffect(() => {
    if (current.isInitial === true) {
      setTimeout(() => {
        setHome();
        animatedStart();
      }, 2000);
    }
  }, [current]);

  return (
    <div className="content main">
      <div className="w-fl">
        <div role="presentation" className="w-img" onClick={setAbout}>
          <ImageLoader src={aboutImg} alt="about" />
        </div>
        <div role="presentation" className="w-img" onClick={setTl}>
          <ImageLoader src={tlImg} alt="timeline" />
        </div>
        <div role="presentation" className="w-img" onClick={setSkill}>
          <ImageLoader src={skillImg} alt="skills" />
        </div>
      </div>
    </div>
  );
}

function ImageLoader({ src, alt }) {
  const [source] = useLoadImage(src);

  return (
    <>
      {
        source === src ? (
          <img
            src={src}
            alt={alt}
            className="m-img"
            onContextMenu={(evt) => {
              evt.preventDefault();
              return false;
            }}
          />
        ) : null
      }
    </>
  );
}

ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default MainContent;
