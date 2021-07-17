import { gsap } from 'gsap';

function homeTheme() {
  gsap.to('body', {
    duration: 0.6,
    ease: 'power4.out',
    color: '#d5d5d5',
  });
  gsap.to('.theme-bg', {
    duration: 0.4,
    backgroundColor: '#0d0d0d',
  });
  gsap.to('.text', {
    duration: 0.6,
    ease: 'power4.out',
    color: '#d5d5d5',
  });
  gsap.to('a', {
    duration: 0.6,
    ease: 'power4.out',
    color: '#d5d5d5',
  });
  gsap.to('.theme-bg', {
    duration: 0.4,
    backgroundColor: '#0d0d0d',
  });
  gsap.to('.sh-v', {
    duration: 0.6,
    ease: 'power4.out',
    borderColor: '#d5d5d5',
    backgroundColor: '#d5d5d5',
  });
  gsap.to('.sh-h', {
    duration: 0.6,
    ease: 'power4.out',
    backgroundColor: '#d5d5d5',
  });
}

function aboutTheme() {
  gsap.to('body', {
    duration: 0.6,
    ease: 'power4.out',
    color: '#0d0d0d',
  });
  gsap.to('.theme-bg', {
    duration: 0.4,
    backgroundColor: '#0d0d0d',
  });
  gsap.to('.text', {
    duration: 0.6,
    ease: 'power4.out',
    color: '#0d0d0d',
  });
  gsap.to('a', {
    duration: 0.6,
    ease: 'power4.out',
    color: '#0d0d0d',
  });
  gsap.to('.theme-bg', {
    duration: 0.4,
    backgroundColor: '#d5d5d5',
  });
  gsap.to('.sh-v', {
    duration: 0.6,
    ease: 'power4.out',
    borderColor: '#0d0d0d',
    backgroundColor: '#0d0d0d',
  });
  gsap.to('.sh-h', {
    duration: 0.6,
    ease: 'power4.out',
    backgroundColor: '#0d0d0d',
  });
}

function tlTheme() {
  gsap.to('body', {
    duration: 0.6,
    ease: 'power4.out',
    color: '#e28468',
  });
  gsap.to('.theme-bg', {
    duration: 0.4,
    backgroundColor: '#0d0d0d',
  });
  gsap.to('.text', {
    duration: 0.6,
    ease: 'power4.out',
    color: '#e28468',
  });
  gsap.to('a', {
    duration: 0.6,
    ease: 'power4.out',
    color: '#e28468',
  });
  gsap.to('.theme-bg', {
    duration: 0.4,
    backgroundColor: '#312e34',
  });
  gsap.to('.sh-v', {
    duration: 0.6,
    ease: 'power4.out',
    borderColor: '#e28468',
    backgroundColor: '#e28468',
  });
  gsap.to('.sh-h', {
    duration: 0.6,
    ease: 'power4.out',
    backgroundColor: '#e28468',
  });
}

function skillTheme() {
  gsap.to('body', {
    duration: 0.6,
    ease: 'power4.out',
    color: '#292826',
  });
  gsap.to('.theme-bg', {
    duration: 0.4,
    backgroundColor: '#0d0d0d',
  });
  gsap.to('.text', {
    duration: 0.6,
    ease: 'power4.out',
    color: '#292826',
  });
  gsap.to('a', {
    duration: 0.6,
    ease: 'power4.out',
    color: '#292826',
  });
  gsap.to('.theme-bg', {
    duration: 0.4,
    backgroundColor: '#b09f99',
  });
  gsap.to('.sh-v', {
    duration: 0.6,
    ease: 'power4.out',
    borderColor: '#292826',
    backgroundColor: '#292826',
  });
  gsap.to('.sh-h', {
    duration: 0.6,
    ease: 'power4.out',
    backgroundColor: '#292826',
  });
}

export {
  homeTheme,
  aboutTheme,
  tlTheme,
  skillTheme,
};
