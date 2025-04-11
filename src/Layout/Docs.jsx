import React from 'react';
import { Routes, Route } from 'react-router';
import { useTheme } from '../context/ThemeContext';

import Installation from './../docs/Installation';
import CDN from './../docs/CDN';
import Utilities from './../docs/Utilities';
import QuickStart from '../docs/Getting-Started/QuickStart';

const Docs = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex min-h-screen w-full transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      <div className='flex-1 flex flex-col'>
        <div
          className={`flex-1 p-4 overflow-auto shadow-md rounded-lg transition-colors duration-300 whitespace-normal break-words ${
            darkMode ? 'bg-[var(--dark-bg)]' : 'bg-[var(--light-bg)]'
          }`}
        >
          <Routes>
            <Route index element={<QuickStart />} />
            <Route path='quick-start' element={<QuickStart />} />
            <Route path='cdn' element={<CDN />} />
            <Route path='installation' element={<Installation />} />
            <Route path='utilities' element={<Utilities />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Docs;
