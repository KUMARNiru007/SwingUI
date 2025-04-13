import React from 'react';
import HoverAndCopyBlock from '../../components/HoverAndCopyBlock/hoverAndCopyBlock';
import Animatedgradients from './AnimatedgradientData.js';
import { useTheme } from '../../../context/ThemeContext.jsx'; // Added theme context import

import './style.css';

const GradientGrid = () => {
  const { darkMode } = useTheme(); // Added theme detection

  return (
    <main
      className={`px-6 py-6 transition-colors duration-300 ${
        darkMode ? 'bg-[var(--dark-bg)]' : 'bg-[var(--light-bg)]'
      }`}
    >
      <h1
        className={`text-xl sm:text-2xl md:text-3xl font-bold py-4 ${
          darkMode ? 'text-[var(--color-text-dark)]' : 'text-gray-900'
        }`}
      >
        Animated Gradients
      </h1>

      <p
        className={`text-sm sm:text-base mb-6 ${
          darkMode ? 'text-[var(--color-text-dark)]' : 'text-gray-700'
        }`}
      >
        Explore a collection of CSS Animation gradients below. Hover over a box
        to see the copy button and click to copy the gradient name.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {Animatedgradients.map((gradient) => (
          <HoverAndCopyBlock key={gradient.id} gradient={gradient} />
        ))}
      </div>
    </main>
  );
};

export default GradientGrid;
