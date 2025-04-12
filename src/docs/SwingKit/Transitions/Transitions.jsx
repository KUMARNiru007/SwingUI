import React, { useState } from 'react';
import CopyButton from '../../components/copyButton/copyButton.jsx';
import transitions from './TextGradientData.js';
import { useTheme } from '../../../context/ThemeContext.jsx';

import './style.css';

const TransitionItem = ({ transition }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      key={transition.id}
      className='flex justify-center items-center relative rounded-md overflow-hidden border border-gray-700 w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-200'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='w-full h-full flex items-center justify-center'>
        <span
          className={`${transition.class} text-sm sm:text-base md:text-lg font-semibold inline-block text-center`}
        >
          {transition.name}
        </span>
      </div>

      {isHovered && (
        <div className='absolute top-2 right-2 z-20 transition-opacity duration-200'>
          <CopyButton textToCopy={transition.name} />
        </div>
      )}
    </div>
  );
};

const TransitionGrid = () => {
  const { darkMode } = useTheme();

  return (
    <main
      className={`px-4 py-6 max-w-screen-xl mx-auto transition-colors duration-300 ${
        darkMode ? 'bg-[var(--dark-bg)]' : 'bg-[var(--light-bg)]'
      }`}
    >
      <h1
        className={`text-xl sm:text-2xl md:text-3xl font-bold py-4 ${
          darkMode ? 'text-[var(--color-text-dark)]' : 'text-gray-900'
        }`}
      >
        Text Gradients
      </h1>

      <p
        className={`text-sm sm:text-base mb-6 ${
          darkMode ? 'text-[var(--color-text-dark)]' : 'text-gray-700'
        }`}
      >
        Explore a collection of CSS transitions below. Hover over a box to see
        the copy button and click to copy the transition name.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {transitions.map((transition) => (
          <TransitionItem key={transition.id} transition={transition} />
        ))}
      </div>
    </main>
  );
};

export default TransitionGrid;
