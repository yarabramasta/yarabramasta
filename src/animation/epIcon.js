import { gsap } from 'gsap';

const tl = gsap.timeline({
  delay: 0.5,
  smoothChildTiming: true,
});

function animatedExploreIcon() {
  tl.to('.t__wrap, .ep-i .ln-v, .ep-i .i-kit svg', {
    delay: 0,
    duration: 0,
    visibility: 'visible',
  }).to('.ep-i .ln-v, .ep-i .i-kit svg', {
    delay: 0.5,
    duration: 1,
    ease: 'expo.out',
    opacity: 1,
  }).to('.ep-i .ln-v', {
    duration: 1,
    ease: 'expo.out',
    height: '50px',
  }, '-=1').to('.t__wrap', {
    duration: 1,
    ease: 'expo.out',
    opacity: 1,
  });
}

function exitAnimation() {
  tl.to('.t__wrap', {
    duration: 0.5,
    ease: 'power3.out',
    opacity: 0,
  }, '-=0.1').to('.ep-i .ln-v', {
    delay: 0.1,
    duration: 1,
    ease: 'expo.inOut',
    height: '0px',
  }).to('.ep-i .ln-v, .ep-i .i-kit svg', {
    duration: 1,
    ease: 'expo.inOut',
    opacity: 0,
  }, '-=1').to('.t__wrap, .ep-i .ln-v, .ep-i .i-kit svg', {
    duration: 0,
    visibility: 'hidden',
  });
}

function hideIcon() {
  tl.to('.t__wrap, .ep-i .ln-v, .ep-i .i-kit svg', {
    delay: 0,
    duration: 0,
    opacity: 0,
    visibility: 'hidden',
  });
}

export {
  animatedExploreIcon,
  exitAnimation,
  hideIcon,
};
