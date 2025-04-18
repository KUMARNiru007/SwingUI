'use client';
import React, { useState } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import htmlCssCode from './ImageAccordions';

const items = [
  {
    url: 'https://picsum.photos/id/1015/800/600',
    title: 'Mountain View',
    description: 'Experience the serenity of mountain landscapes.',
  },
  {
    url: 'https://picsum.photos/id/1016/800/600',
    title: 'Forest Path',
    description: 'Walk through the lush green forest trails.',
  },
  {
    url: 'https://picsum.photos/id/1018/800/600',
    title: 'City Skyline',
    description: 'The bustling city life captured from above.',
  },
  {
    url: 'https://picsum.photos/id/1020/800/600',
    title: 'Desert Dunes',
    description: 'Golden sands stretching beyond the horizon.',
  },
  {
    url: 'https://picsum.photos/id/1024/800/600',
    title: 'Ocean Waves',
    description: 'Feel the calmness of the endless ocean.',
  },
];

const ImageAccordions = () => {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div
      className={`w-full px-2 py-6 transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Image Accordions</h2>
        <p className="mb-10 sm:mb-16">
          This image accordion showcases a smooth hover effect where images expand upon hover,
          revealing titles and descriptions with a gradient overlay.
        </p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode ? (
          <div className="flex justify-center items-center h-[300px] sm:h-[450px] md:h-[400px] lg:h-[600px] bg-gradient-to-b from-gray-100 to-blue-100 rounded-lg shadow-md">
            <div className="relative overflow-hidden rounded-[20px] shadow-lg flex">
              <div className="flex gap-1 w-fit mx-auto">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className={`relative h-[200px] sm:h-[300px] md:h-[250px] lg:h-[400px] rounded-xl overflow-hidden transition-all duration-500 ease-in-out ${
                      activeIndex === i ? 'w-[150px] sm:w-[350px] md:w-[300px]  lg:w-[400px]' : 'w-[30px] sm:w-[40px] md:w-[36px] lg:w-[50px]'
                    }`}
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => setActiveIndex(i)}
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover cursor-pointer"
                    />
                    {activeIndex === i && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pl-3 pb-3 sm:pl-5 sm:pb-6 md:pl-6 md:pb-8 lg:pl-8 lg:pb-10 flex flex-col justify-end text-white">
                        <h2 className="text-2xl font-semibold">{item.title}</h2>
                        <p className="mt-2 text-sm">{item.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full overflow-x-auto my-4 rounded-xl">
            <CodeBlock language="html" code={htmlCssCode} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageAccordions;
