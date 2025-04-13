import React, { useState, useEffect, useRef } from 'react';
import PreviewCodeBtn from '../../../components/previewcodebtn';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import img1 from '../../../assets/Images-For-Gallery/img1.webp';
import img2 from '../../../assets/Images-For-Gallery/img2.webp';
import img3 from '../../../assets/Images-For-Gallery/img3.webp';
import img4 from '../../../assets/Images-For-Gallery/img4.webp';

function Feature() {
  const [showCode, setShowCode] = useState(false);

  const previewRef = useRef(null);

  const { darkMode } = useTheme();

  const htmlCssCode = `
  <div class="flex items-center justify-center p-4">
    <div id="mainContainer" class="relative flex flex-col w-full max-w-7xl mx-auto border border-gray-300 rounded-lg overflow-hidden bg-white">

      <div class="fade-top absolute top-0 left-0 right-0 w-full h-24 z-10 pointer-events-none 
        bg-gradient-to-b from-white/90 to-transparent"></div>
      <div class="fade-bottom absolute bottom-0 left-0 right-0 w-full h-24 z-10 pointer-events-none 
        bg-gradient-to-t from-white/90 to-transparent"></div>

      <div class="flex flex-col lg:flex-row w-full p-4 md:p-8">
        
        <div class="flex flex-col justify-center p-4 md:p-8 lg:w-1/2 order-2 lg:order-1">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Random Heading</h1>
            <p class="text-sm md:text-base lg:text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, consectetur dolores fugiat magnam voluptates qui debitis saepe quas exercitationem dicta! Nihil, commodi culpa temporibus quibusdam vitae tenetur quae reprehenderit ducimus!
            </p>
          </div>
        
        <div class="lg:w-1/2 order-1 lg:order-2 p-4">
          <!-- Use native scrolling here, no absolute positioning on sliderContainer -->
          <div id="scrollContainer" class="relative w-full h-[350px] md:h-[400px] lg:h-[450px] overflow-y-auto overscroll-hidden scrollbar-hide">
            <div id="sliderContainer" class="w-full transition-transform duration-300 ease-out space-y-6">
                <div class="slider-item w-full h-auto">
                    <div class="rounded-xl overflow-hidden shadow-lg h-full">
                      <img 
                        src="${img1}"
                        alt="Image 1" 
                        class="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div class="slider-item w-full h-auto my-6">
                    <div class="rounded-xl overflow-hidden shadow-lg h-full">
                      <img 
                        src="${img2}"
                        alt="Image 2" 
                        class="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div class="slider-item w-full h-auto my-6">
                    <div class="rounded-xl overflow-hidden shadow-lg h-full">
                      <img 
                        src="${img3}"
                        alt="Image 3" 
                        class="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div class="slider-item w-full h-auto my-6">
                    <div class="rounded-xl overflow-hidden shadow-lg h-full">
                      <img 
                        src="${img4}"
                        alt="Image 4" 
                        class="w-full h-full object-cover"
                      />
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

  // Hide scrollbar
  const customCSS = `
    <style>
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      /* Optional fade-out if you want. Must define what it does. */
      /* .fade-out {
          opacity: 0;
          transition: opacity 0.3s ease;
      }
      .fade-out.active {
          opacity: 1;
      } */
    </style>
  `;

  useEffect(() => {}, [showCode, darkMode]);

  return (
    <div
      className={`w-full transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      } p-4`}
    >
      <h2 className='text-3xl font-bold mb-2'>Feature Component</h2>
      <p className='mb-6'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
        necessitatibus libero ab officiis dolorum ipsum voluptates rerum? Quis
        voluptates atque voluptate ducimus provident, reprehenderit
        necessitatibus tempora quaerat, quisquam nostrum ad.
      </p>

      <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

      {!showCode && (
        <div
          ref={previewRef}
          key={`${darkMode}-${showCode}`}
          className={`flex justify-center items-center ${
            darkMode ? 'bg-[var(--light-bg)]' : 'bg-[var(--light-bg)]'
          } rounded-lg shadow-md w-full`}
        >
          {/* Inject updated HTML + customCSS */}
          <div
            className='w-full'
            dangerouslySetInnerHTML={{
              __html: customCSS + htmlCssCode,
            }}
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

export default Feature;
