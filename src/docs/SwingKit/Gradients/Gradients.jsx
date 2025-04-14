import React from 'react';
import HoverAndCopyBlock from '../../components/HoverAndCopyBlock/hoverAndCopyBlock';
import gradients from './graidentsData';
import { useTheme } from '../../../context/ThemeContext.jsx';
import './style.css';
import '../TextGradients/style.css';

const GradientGrid = () => {
  const { darkMode } = useTheme();

  const propertiesData = [
    {
      className: 'swing-ocean-gradient',
      description: 'A smooth blue blend ideal for clean and calming interfaces',
    },
    {
      className: 'swing-fire-gradient',
      description: 'Vibrant orange-red gradient suited for bold, energetic UI',
    },
    {
      className: 'swing-love-gradient',
      description:
        'Soft pink-red tones perfect for elegant and romantic themes',
    },
    {
      className: 'swing-deepsea-gradient',
      description: 'Deep blues creating a mysterious, immersive experience',
    },
    {
      className: 'swing-royal-gradient',
      description: 'Rich purple-blue tones conveying elegance and luxury',
    },
    {
      className: 'swing-peach-gradient',
      description: 'Warm peach hues offering a friendly and modern look',
    },
  ];

  const implementationData = [
    {
      className: 'swing-ocean-gradient',
      example: '<div class="swing-ocean-gradient"></div>',
    },
    {
      className: 'swing-fire-gradient',
      example: '<button class="swing-fire-gradient">Click</button>',
    },
    {
      className: 'swing-love-gradient',
      example: '<header class="swing-love-gradient">Welcome</header>',
    },
  ];

  return (
    <main
      className={`w-full transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        <div className='flex flex-col items-start'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-2'>Gradients</h1>
          <p className='mb-10 sm:mb-16 ml-1 '>
            Explore a curated collection of vibrant Swing gradients—perfect for
            enhancing your UI with modern, visually appealing backgrounds.
          </p>

          <div className='w-full'>
            {/* Gradient Examples Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16'>
              {gradients.map((gradient) => (
                <HoverAndCopyBlock key={gradient.id} gradient={gradient} />
              ))}
            </div>

            {/* Properties Section */}
            <h2 className='text-2xl sm:text-3xl font-bold mb-6'>Properties</h2>
            <div className='w-full mb-12 overflow-x-auto'>
              <table
                className={`w-full border-collapse rounded-lg overflow-hidden ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <thead>
                  <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <th className='py-3 px-4 text-left font-semibold'>
                      Class Name
                    </th>
                    <th className='py-3 px-4 text-left font-semibold'>
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {propertiesData.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-t ${
                        darkMode ? 'border-gray-700' : 'border-gray-200'
                      }`}
                    >
                      <td className='py-3 px-4'>
                        <code
                          className={`px-2 py-1 rounded text-sm ${
                            darkMode ? 'bg-gray-700' : 'bg-gray-200'
                          }`}
                        >
                          .{item.className}
                        </code>
                      </td>
                      <td className='py-3 px-4'>{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr
              className={`my-10 border-t ${
                darkMode
                  ? 'border-gray-700 opacity-30'
                  : 'border-gray-300 opacity-50'
              }`}
            />

            <h2 className='text-2xl sm:text-3xl font-bold mb-6'>
              Implementation
            </h2>
            <div className='w-full mb-12 overflow-x-auto'>
              <table
                className={`w-full border-collapse rounded-lg overflow-hidden ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <thead>
                  <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <th className='py-3 px-4 text-left font-semibold'>
                      Class Name
                    </th>
                    <th className='py-3 px-4 text-left font-semibold'>
                      Usage Example
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {implementationData.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-t ${
                        darkMode ? 'border-gray-700' : 'border-gray-200'
                      }`}
                    >
                      <td className='py-3 px-4'>
                        <code
                          className={`px-2 py-1 rounded text-sm ${
                            darkMode ? 'bg-gray-700' : 'bg-gray-200'
                          }`}
                        >
                          .{item.className}
                        </code>
                      </td>
                      <td className='py-3 px-4'>
                        <code
                          className={`px-2 py-1 rounded text-sm ${
                            darkMode ? 'bg-gray-700' : 'bg-gray-200'
                          }`}
                        >
                          {item.example}
                        </code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr
              className={`my-10 border-t ${
                darkMode
                  ? 'border-gray-700 opacity-30'
                  : 'border-gray-300 opacity-50'
              }`}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GradientGrid;
