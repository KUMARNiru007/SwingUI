import React from 'react';
import { Routes, Route } from 'react-router';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../context/ThemeContext';

import Gradients from '../docs/SwingKit/Gradients/Gradients';
import AnimatedGradients from '../docs/SwingKit/AnimatedGradients/AnimatedGradients';
import Transitions from '../docs/SwingKit/Transitions/Transitions';

const SwingKit = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex min-h-screen w-full font-[var(--font-poppins)] ${
        darkMode ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]' : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      <div
        className={`w-64 flex-shrink-0 shadow-lg ${
          darkMode ? 'bg-[var(--dark-navbar-bg)]' : 'bg-[var(--light-navbar-bg)]'
        }`}
      >
        <Sidebar />
      </div>

      <div className='flex-1 flex flex-col px-6'>
        <div
          className={`flex-1 p-6 overflow-auto shadow-md rounded-lg ${
            darkMode ? 'bg-[var(--dark-bg)]' : 'bg-[var(--light-bg)]'
          }`}
        >
          <Routes>
            <Route path='gradients' element={<Gradients />} />
            <Route path='animated-gradients' element={<AnimatedGradients />} />
            <Route path='transitions' element={<Transitions />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default SwingKit;
