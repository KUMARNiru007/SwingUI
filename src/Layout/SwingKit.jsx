import React from 'react';
import { Routes, Route } from 'react-router';
import { useTheme } from '../context/ThemeContext';

import Gradients from '../docs/SwingKit/Gradients/Gradients';
import AnimatedGradients from '../docs/SwingKit/AnimatedGradients/AnimatedGradients';
import TextGradient from '../docs/SwingKit/TextGradients/TextGradient';

const SwingKit = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex min-h-screen w-full transition-colors duration-300${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      <div className='flex-1 flex flex-col'>
        <div
          className={`flex-1 p-4 overflow-auto  rounded-lg ${
            darkMode ? 'bg-[var(--dark-bg)]' : 'bg-[var(--light-bg)]'
          }`}
        >
          <Routes>
            <Route path='gradients' element={<Gradients />} />
            <Route path='animated-gradients' element={<AnimatedGradients />} />
            <Route path='text-gradients' element={<TextGradient />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default SwingKit;
