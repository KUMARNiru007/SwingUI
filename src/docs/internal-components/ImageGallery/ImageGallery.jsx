import React, { useState, useEffect } from 'react';
import PreviewCodeBtn from '../../../components/previewcodebtn';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import "./ImageGallery.css"
import img1 from "../../../assets/Images-For-Gallery/img1.webp"
import img2 from "../../../assets/Images-For-Gallery/img2.webp"
import img3 from "../../../assets/Images-For-Gallery/img3.webp"
import img4 from "../../../assets/Images-For-Gallery/img4.webp"

function ImageGallery() {
  const [showCode, setShowCode] = useState(false);

  const { darkMode } = useTheme();

  const htmlCssCode = `
    <div
      class="swing-scrolling-image"
      style="
        --direction: 1;
        --speed: 20;
        --image-aspect-ratio: false;
        --pause-on-hover: false;
        --pause-on-hover-mobile: false;
      "
    >
      <div class="slider-container">
        <!-- Slider items with fixed size and object-cover -->
        <div class="slider-item flex-shrink-0 w-[300px] h-[200px] overflow-hidden">
          <img
            src=${img1}
            alt="Image 1"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="slider-item flex-shrink-0 w-[300px] h-[200px] overflow-hidden">
          <img
            src=${img2}
            alt="Image 2"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="slider-item flex-shrink-0 w-[300px] h-[200px] overflow-hidden">
          <img
            src=${img3}
            alt="Image 3"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="slider-item flex-shrink-0 w-[300px] h-[200px] overflow-hidden">
          <img
            src=${img4}
            alt="Image 4"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
`;
useEffect(() => {
      if (showCode) return;

      // js code
})


  return (
    <div
      className={`w-full transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      } p-4`}
    >
      <h2 className='text-3xl font-bold mb-2'>ImageGallery Component</h2>
      <p className='mb-6'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
        necessitatibus libero ab officiis dolorum ipsum voluptates rerum? Quis
        voluptates atque voluptate ducimus provident, reprehenderit
        necessitatibus tempora quaerat, quisquam nostrum ad.
      </p>

      <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

      {!showCode && (
        <div
          key={`${darkMode}-${showCode}`}
          className={`flex justify-center items-center pt-[5vh] ${
            darkMode
              ? 'bg-[var(--light-bg)] text-[var(--color-text)]'
              : 'bg-[var(--light-bg)] text-[var(--color-text)]'
          }  bg-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-md`}
        >
          {/* Render live preview */}
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
  );
}

export default ImageGallery;
