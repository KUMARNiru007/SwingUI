import React from 'react';
import HoverAndCopyBlock from '../../components/HoverAndCopyBlock/hoverAndCopyBlock';
import gradients from './graidentsData';
import { useTheme } from '../../../context/ThemeContext.jsx'; // Added theme context import
import './style.css';

const GradientGrid = () => {
  const { darkMode } = useTheme(); // Added theme detection

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
        Gradients
      </h1>

      <p
        className={`text-sm sm:text-base mb-6 ${
          darkMode ? 'text-[var(--color-text-dark)]' : 'text-gray-700'
        }`}
      >
        Explore a collection of CSS gradients below. Hover over a box to see the
        copy button and click to copy the gradient name.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {gradients.map((gradient) => (
          <HoverAndCopyBlock key={gradient.id} gradient={gradient} />
        ))}
      </div>
    </main>
  );
};

export default GradientGrid;
