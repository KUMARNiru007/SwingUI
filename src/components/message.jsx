import React, { useState, useLayoutEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StickyMessageBox = () => {
  const [visible, setVisible] = useState(true);
  const { darkMode } = useTheme();
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    if (!visible) return;

    const ctx = gsap.context(() => {
      gsap.from(boxRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'bottom bottom', // when box hits bottom of viewport
        },
      });
    }, boxRef);

    return () => ctx.revert();
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={boxRef}
      className={`fixed bottom-6 flex flex-wrap right-4 z-50 rounded-xl shadow-xl p-4 sm:pl-4 sm:pt-2 w-[220px] sm:w-[220px] text-center transition-all ${
        darkMode
          ? 'bg-[var(--dark-navbar-bg)]/90 text-white'
          : 'bg-white/90 text-black'
      }`}
    >
      <button
        className='absolute -top-2 -right-2 bg-black text-white rounded-full w-7 h-7 flex justify-center'
        onClick={() => setVisible(false)}
        aria-label='Close'
      >
        <i className='ri-close-large-fill'></i>
      </button>
      <p className='text-xs sm:text-xs'>
        We are Currently in{' '}
        <span className='font-bold swing-ocean-gradient-text text-base sm:text-xl'>
          Beta
        </span>
        <br />
        <span>
          Please Share Your{' '}
          <a
            href='https://forms.gle/dMdYF8qX2g1BsiAM7'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
          >
            Feedback
          </a>
        </span>
      </p>
    </div>
  );
};

export default StickyMessageBox;
