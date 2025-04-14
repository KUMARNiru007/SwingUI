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

  // Set up the scroll synchronization with more robust event handling
  useEffect(() => {
    // Function to initialize synchronization
    function initScrollSync() {
      if (!showCode && previewRef.current) {
        // Small delay to ensure DOM is fully rendered
        setTimeout(() => {
          const textArea = previewRef.current.querySelector('#textArea');
          const scrollContainer =
            previewRef.current.querySelector('#scrollContainer');

          if (textArea && scrollContainer) {
            // Remove any existing event listeners first to avoid duplicates
            textArea.removeEventListener('wheel', handleWheel);

            // Add fresh event listener
            textArea.addEventListener('wheel', handleWheel, { passive: false });

            // Function to handle wheel events
            function handleWheel(e) {
              scrollContainer.scrollTop += e.deltaY;
              e.preventDefault();
            }
          }
        }, 100);
      }
    }

    // Initialize on mount and reinitialize on any relevant changes
    initScrollSync();

    // Setup event listeners for potential DOM changes
    const observer = new MutationObserver(initScrollSync);

    // Start observing if we have the preview ref
    if (previewRef.current) {
      observer.observe(previewRef.current, {
        childList: true,
        subtree: true,
      });
    }

    // Setup interval to periodically check and reinitialize (backup approach)
    const intervalId = setInterval(initScrollSync, 2000);

    // Clean up function
    return () => {
      observer.disconnect();
      clearInterval(intervalId);

      // Clean up event listeners if component unmounts
      if (previewRef.current) {
        const textArea = previewRef.current.querySelector('#textArea');
        if (textArea) {
          textArea.removeEventListener('wheel', handleWheel);
        }
      }

      function handleWheel() {} // Empty placeholder to avoid reference errors
    };
  }, [showCode, darkMode]); // Re-run when showCode or darkMode changes

  const htmlCssCode = `
  <div class="flex items-center justify-center p-4">
    <div id="mainContainer" class="relative flex flex-col w-full max-w-7xl mx-auto border border-gray-300 rounded-lg overflow-hidden bg-white">

      <div class="fade-top absolute top-0 left-0 right-0 w-full h-24 z-10 pointer-events-none 
        bg-gradient-to-b from-white/90 to-transparent"></div>
      <div class="fade-bottom absolute bottom-0 left-0 right-0 w-full h-24 z-10 pointer-events-none 
        bg-gradient-to-t from-white/90 to-transparent"></div>

      <div class="flex flex-col lg:flex-row w-full p-4 md:p-8">
        
        <div id="textArea" class="flex flex-col justify-center p-4 md:p-8 lg:w-1/2 order-2 lg:order-1">
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
      
      /* Make text area scrollable */
      #textArea {
        cursor: ns-resize; /* Change cursor to indicate scrolling capability */
      }
    </style>
  `;
  const propertiesData=[ {
        variable: 'State.currentScrollY',
        type : 'number',
        description: "Tracks the current vertical scroll position of the carousel",
      },
      {
        variable: 'State.targetScrollY',
        type : 'number',
        description: "Target scroll position, adjusted based on user input",
      },
      {
        variable: 'State.isAnimating',
        type : 'boolean',
        description:
         "Indicates whether the scroll animation is in progress",
      },
      {
        variable: 'State.maxScroll ',
        type : 'number',
        description: "The maximum scroll limit to prevent scrolling beyond the images",
      },
      {
        variable: 'State.itemHeight ',
        type : 'number',
        description: "Height of the slider items, dynamically calculated",
      },{
        variable: 'State.rafId ',
        type : 'number',
        description: "Holds the requestAnimationFrame ID for cancelling the animation",
      }
    ]
    const animationSettings = [
      {
        variable: 'SCROLL_STEP',
        value: 100,
        description: "Defines the scroll step increment for wheel movements",
      },
      {
        variable: 'MOBILE_BREAKPOINT',
        value: 640,
        description: "Breakpoint width for detecting mobile devices",
      },
      {
        variable: 'EASING',
        value: 0.1,
        description: "Defines the easing factor for smooth animations",
      }
    ];
    

  return (
    <div
      className={`w-full px-4 py-6 transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      } px-4 sm:px-6 lg:px-20 py-8 sm:py-12`}
    >
     <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-1'>
     <h2 className='text-3xl sm:text-4xl font-bold mb-2'>Features</h2>
      <p className='mb-10 sm:mb-16'>
      The Feature component displays a dynamic image slider with smooth scroll 
      functionality, using React hooks to handle state and animations. It also includes a 
      toggle to preview the HTML/CSS code behind the feature, providing a seamless 
      experience for both users and developers.
      </p>

      <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

      {!showCode && (
        <div
          ref={previewRef}
          key={`preview-${darkMode}-${showCode}`}
          className={`flex justify-center items-center ${
            darkMode ? 'bg-[var(--light-bg)]' : 'bg-[var(--light-bg)]'
          } rounded-lg shadow-md w-full`}
        >
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
      <hr
              className={`my-10 border-t ${
                darkMode
                  ? 'border-gray-700 opacity-30'
                  : 'border-gray-300 opacity-50'
              }`}
            />
      <h2 className='text-2xl sm:text-2xl font-bold  mb-10 sm:mb-10 mt-10 sm:mt-16'>State Management Variable</h2>
                  <div className='w-full mb-12 overflow-x-auto'>
                    <table
                      className={`w-full border-collapse rounded-lg overflow-hidden ${
                        darkMode ? 'bg-gray-800' : 'bg-gray-50'
                      }`}
                    >
                      <thead>
                        <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <th className='py-3 px-4 text-left font-semibold'>
                            Variable
                          </th>
                          <th className='py-3 px-4 text-left font-semibold'>
                            Type
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
                                {item.variable}
                              </code>
                            </td>
                            <td className='py-3 px-4'><code
                                className={`px-2 py-1 rounded text-sm ${
                                  darkMode ? 'bg-gray-700' : 'bg-gray-200'
                                }`}
                              >
                                {item.type}
                              </code></td>
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

                  <h2 className='text-2xl sm:text-2xl font-bold sm:mb-10 mt-10 sm:mt-16'>Transition and Animation Settings</h2>
                  
                  <div className='w-full mb-12 overflow-x-auto'>
                    <table
                      className={`w-full border-collapse rounded-lg overflow-hidden ${
                        darkMode ? 'bg-gray-800' : 'bg-gray-50'
                      }`}
                    >
                      <thead>
                        <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <th className='py-3 px-4 text-left font-semibold'>
                            Property
                          </th>
                          <th className='py-3 px-4 text-left font-semibold'>
                            Value
                          </th>
      
                          <th className='py-3 px-4 text-left font-semibold'>
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {animationSettings.map((item, index) => (
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
                                {item.variable}
                              </code>
                            </td>
                            <td className='py-3 px-4'><code
                                className={`px-2 py-1 rounded text-sm ${
                                  darkMode ? 'bg-gray-700' : 'bg-gray-200'
                                }`}
                              >
                                {item.value}
                              </code></td>
                            <td className='py-3 px-4'>{item.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
      
     </div>
    </div>
  );
}

export default Feature;
