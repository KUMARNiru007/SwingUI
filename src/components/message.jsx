import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const StickyMessageBox = () => {
  const [visible, setVisible] = useState(true);
  const { darkMode, toggleTheme } = useTheme();

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-6 flex flex-wrap right-4 z-50 rounded-3xl shadow-xl p-4 sm:p-6 w-[240px] sm:w-[280px] text-center ${
        darkMode
          ? 'bg-[var(--dark-navbar-bg)]/90 text-white'
          : 'bg-white/90 text-black'
      }`}
    >
      <button
        className='absolute -top-3 -right-2 bg-black text-white rounded-full w-7 h-7 flex items-center justify-center'
        onClick={() => setVisible(false)}
        aria-label='Close'
      >
        <i className='ri-close-large-fill'></i>
      </button>
      <p className='text-sm sm:text-base'>
        We are Currently in{' '}
        <span className='font-semibold swing-ocean-gradient-text text-base sm:text-2xl'>
          Beta
        </span>
        <br />
        <span>
          Please Share Your{' '}
          <a href='#' className='underline'>
            Feedback
          </a>
        </span>
      </p>
    </div>
  );
};

export default StickyMessageBox;
