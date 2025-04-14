import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const StickyMessageBox = () => {
  const [visible, setVisible] = useState(true);
  const { darkMode, toggleTheme } = useTheme();

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-6 flex flex-wrap right-4 z-50 rounded-xl shadow-xl p-4 sm:pl-4 sm:pt-2 w-[220px] sm:w-[220px] text-center ${
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
        <i className='ri-close-large-fill text-sm mt-[4px]'></i>
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
