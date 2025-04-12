import React from 'react';
import HoverAndCopyBlock from '../../components/HoverAndCopyBlock/hoverAndCopyBlock';
import gradients from './AnimatedgradientData.js';

import './style.css';

const GradientGrid = () => {
  return (
    <main className='px-6 py-6'>
      <h1 className='text-2xl py-6'>Animated Gradients</h1>
      <p className='text-sm sm:text-base text-gray-300 max-w-3xl mb-6'>
        Explore a collection of CSS Animation gradients below. Hover over a box
        to see the copy button and click to copy the gradient name.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {gradients.map((gradient) => (
          <HoverAndCopyBlock key={gradient.id} gradient={gradient} />
        ))}
      </div>
    </main>
  );
};

export default GradientGrid;
