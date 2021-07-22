/* eslint-disable import/prefer-default-export */
import { gsap } from 'gsap';

const tl = gsap.timeline({
  smoothChildTiming: true,
});

function animatedStart() {
  tl.to('.t__wrap, .ep-i .ln-v, .ep-i .i-kit svg', {
    delay: 0,
    duration: 0,
    opacity: 0,
    visibility: 'hidden',
  });
  tl.to('.app', {
    delay: 0,
    duration: 0,
    css: {
      visibility: 'visible',
    },
  }).from('.stgr', {
    delay: 0.3,
    duration: 2,
    ease: 'expo.Out',
    x: -80,
    stagger: {
      from: 'start',
      axis: 'x',
    },
  }).from('.wf .lk__socmed', {
    duration: 2,
    ease: 'expo.Out',
    y: 80,
    skewY: '-40deg',
    stagger: {
      amount: 0.4,
      from: 'start',
      axis: 'y',
    },
  }, '-=2')
    .from('.fc .wf span', {
      duration: 2,
      ease: 'expo.Out',
      y: 80,
      skewY: '-20deg',
      stagger: {
        amount: 0.4,
        from: 'start',
        axis: 'y',
      },
    }, '-=2')
    .to(['.c-1', '.c-2', '.c-3', '.c-4'], {
      delay: 0.3,
      duration: 1,
      ease: 'expo.Out',
      opacity: 1,
      stagger: {
        amount: 0.4,
        from: 'start',
        axis: 'x',
      },
    }, '-=1');
}

export {
  animatedStart,
};
