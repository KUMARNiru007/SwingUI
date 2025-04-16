import React, { useState } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import './style.css';

import img1 from '../../../assets/Images-For-Gallery/img1.webp';
import img2 from '../../../assets/Images-For-Gallery/img2.webp';
import img3 from '../../../assets/Images-For-Gallery/img3.webp';
import img4 from '../../../assets/Images-For-Gallery/img4.webp';

const GridDemo = () => {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();

  const htmlCssCode = `
<div class="max-w-6xl mx-auto p-2 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px]">

  <!-- Intro Card -->
  <div class="bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 p-4 sm:p-6 rounded-xl col-span-1 sm:col-span-2 row-span-2 flex flex-col justify-between">
    <img src="/api/placeholder/48/48" class="w-10 sm:w-12 h-10 sm:h-12 rounded-full" alt="SwingUI Logo" />
    <div class="mt-3 sm:mt-4">
      <h1 class="text-xl sm:text-2xl font-bold">About SwingUi</h1>
      <p class="text-white text-base sm:text-lg mt-1">SwingUi is a modern component library designed to build fast, beautiful UIs.</p>
    </div>
    <a href="#" class="text-white font-medium mt-3 sm:mt-4 hover:underline">Explore Components →</a>
  </div>


  
  <div class="rounded-xl tilt-zoom">
    <img
      src="${img1}"
      alt="Image 1"
      class="w-full h-full object-cover rounded-sm"
    />
  </div>
  <div class="rounded-xl tilt-zoom">
    <img
      src="${img2}"
      alt="Image 1"
      class="w-full h-full object-cover rounded-sm"
    />
  </div>
  <div class="rounded-xl tilt-zoom">
    <img
      src="${img3}"
      alt="Image 1"
      class="w-full h-full object-cover rounded-sm"
    />
  </div>
  <div class="rounded-xl tilt-zoom">
    <img
      src="${img4}"
      alt="Image 1"
      class="w-full h-full object-cover rounded-sm"
    />
  </div>

  <!-- About Card -->
  <div class="bg-zinc-800 border border-zinc-700 p-3 sm:p-6 rounded-xl col-span-1 sm:col-span-2 lg:col-span-4 flex items-center justify-center">
    <p class="text-zinc-300 text-sm sm:text-base lg:text-lg text-center">
      <span class="font-bold text-white">SwingUi is crafted with performance and creativity in mind.</span>
      It offers flexible components using Tailwind CSS and animations that feel native.
    </p>
  </div>

  <!-- Location Card -->
  <div class="bg-zinc-800 border border-zinc-700 rounded-xl flex flex-col items-center justify-center">
    <i class="fas fa-map-marker-alt text-lg sm:text-xl text-rose-300 mb-1"></i>
    <p class="text-xs sm:text-sm text-zinc-300">Cyberspace</p>
  </div>

  <!-- Email Form Card -->
  <div class="bg-zinc-800 border border-zinc-700 rounded-xl p-3 sm:p-6 col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col justify-center items-center text-center">
    <h2 class="text-base sm:text-lg font-semibold mb-2">Join the SwingUi Mailing List</h2>
    <form class="w-full max-w-xl flex flex-col sm:flex-row gap-2 sm:gap-3">
      <input type="email" placeholder="Email" class="flex-1 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-zinc-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-400" />
      <button type="submit" class="bg-rose-400 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-md hover:bg-rose-500 transition text-sm">
        <i class="fas fa-envelope mr-1 sm:mr-2"></i> Join
      </button>
    </form>
  </div>
</div>

`;

  return (
    <div
      className={`w-full px-0 sm:px-2 py-6 transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      <div className='max-w-5xl mx-auto px-2 sm:px-4 lg:px-8 py-6 sm:py-12'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2'>
          Grid Layout
        </h2>
        <p className='mb-6 sm:mb-10 lg:mb-16 text-sm sm:text-base'>
          This grid layout demo showcases SwingUI's flexible grid system with
          interactive elements. It features gradient backgrounds, tilt-zoom
          effects on social icons, and responsive design that adapts beautifully
          across all device sizes.
        </p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode && (
          <div className='flex justify-center items-center min-h-[36rem] bg-zinc-900 rounded-lg shadow-md overflow-hidden'>
            <div
              className='w-full'
              dangerouslySetInnerHTML={{ __html: htmlCssCode }}
            />
          </div>
        )}

        {showCode && (
          <div className='w-full overflow-x-auto my-4 rounded-xl'>
            <CodeBlock language='html' code={htmlCssCode} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GridDemo;
