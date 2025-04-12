import React from 'react';
import HoverAndCopyBlock from '../../components/HoverAndCopyBlock/hoverAndCopyBlock';
import gradients from './graidentsData';
import './style.css';

const GradientGrid = () => {
  return (
    <main className='px-4 py-6 max-w-screen-xl mx-auto'>
      <h1 className='text-xl sm:text-2xl md:text-3xl font-bold py-4 text-white'>
        Gradients
      </h1>

      <p className='text-sm sm:text-base text-gray-300  mb-6'>
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
