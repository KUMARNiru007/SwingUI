import React, { useState, useEffect } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import './responsive.css';

import img1 from '../../../assets/Images-For-Gallery/img1.webp';
import img2 from '../../../assets/Images-For-Gallery/img2.webp';
import img3 from '../../../assets/Images-For-Gallery/img3.webp';
import img4 from '../../../assets/Images-For-Gallery/img4.webp';
import img5 from '../../../assets/Images-For-Gallery/img5.webp';
import img6 from '../../../assets/Images-For-Gallery/img6.webp';
import img7 from '../../../assets/Images-For-Gallery/img7.webp';
import img8 from '../../../assets/Images-For-Gallery/img8.webp';

function ImageGallery() {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();

  const htmlCssCode = `<div class=" bg-black">
      <div class="space-y-8 w-full pt-8 pb-8">
          <div class="swing-scrolling-image"
            style="
            --direction: 1;
            --speed: 10; 
            --pause-on-hover: false;">
              <div class="slider-container w-full flex animate-scroll gap-4 px-4">
         <div class="swing-slider-item">
          <img
            src="${img1}"
            alt="Image 1"
            class="w-full h-full object-cover rounded-sm"
          />
         </div>
              <div class="swing-slider-item">
          <img
            src="${img2}"
            alt="Image 2"
            class="w-full h-full object-cover rounded-sm"
          />
         </div>

              <div class="swing-slider-item">
          <img
            src="${img3}"
            alt="Image 2"
            class="w-full h-full object-cover rounded-sm"
          />
         </div>

           <div class="swing-slider-item">
          <img
            src="${img4}"
            alt="Image 2"
            class="w-full h-full object-cover rounded-sm"
          />
         </div>

            </div>
          </div>

          <div class="swing-scrolling-image"
            style="
            --direction: -1; 
            --speed: 10; 
            --pause-on-hover: false;">
              <div class="slider-container w-full flex animate-scroll gap-4 px-4">
         <div class="swing-slider-item">
          <img
            src="${img5}"
            alt="Image 1"
            class="w-full h-full object-cover rounded-sm"
          />
         </div>
              <div class="swing-slider-item">
          <img
            src="${img6}"
            alt="Image 2"
            class="w-full h-full object-cover rounded-sm"
          />
         </div>

              <div class="swing-slider-item">
          <img
            src="${img7}"
            alt="Image 2"
            class="w-full h-full object-cover rounded-sm"
          />
         </div>

           <div class="swing-slider-item">
          <img
            src="${img8}"
            alt="Image 2"
            class="w-full h-full object-cover rounded-sm"
          />
         </div>
      </div>
    </div> 
  `;
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      let prevWidth = window.innerWidth;
      const sliders = document.querySelectorAll('.swing-scrolling-image');
      const sliderHtml = [];

      const getInitialWidth = (container) => {
        let width = 0;
        const items = container.querySelectorAll('.swing-slider-item');
        const gap = parseFloat(getComputedStyle(container).gap || 0);

        items.forEach((item) => {
          width += item.offsetWidth + gap;
        });

        return width;
      };

      const setValues = (container, width, indexI, indexJ) => {
        const parentWidth = container.parentElement.offsetWidth;
        const ratio = Math.ceil(parentWidth / width);
        const total = ratio + 1;

        while (
          container.children.length >
          sliderHtml[indexI][indexJ].split('swing-slider-item').length - 1
        ) {
          container.lastChild.remove();
        }

        for (let i = 0; i < ratio; i++) {
          const div = document.createElement('div');
          div.innerHTML = sliderHtml[indexI][indexJ];
          container.append(...div.children);
        }

        container.style.width = `${width * total}px`;
        container.style.setProperty('--total', total);
        container.style.setProperty('--est-speed', width / 100);
      };

      const setDirection = (container, width) => {
        if (
          getComputedStyle(container).getPropertyValue('--direction') === '-1'
        ) {
          container.style.marginLeft = `-${width}px`;
        }
      };

      const setPauseOnHover = (container) => {
        const pauseOnHover =
          window.innerWidth > 767
            ? '--pause-on-hover'
            : '--pause-on-hover-mobile';

        const shouldPause =
          getComputedStyle(container).getPropertyValue(pauseOnHover).trim() ===
          'true';

        container.style.setProperty(
          '--poh',
          shouldPause ? 'paused' : 'running',
        );
      };

      sliders.forEach((slider, indexI) => {
        sliderHtml[indexI] = [];
        const containers = slider.querySelectorAll('.slider-container');

        containers.forEach((container, indexJ) => {
          sliderHtml[indexI][indexJ] = container.innerHTML;
          const width = getInitialWidth(container);
          if (width) {
            setValues(container, width, indexI, indexJ);
            setDirection(container, width);
          }
          setPauseOnHover(container);
        });

        slider.classList.add('showing');
      });

      const handleResize = () => {
        if (window.innerWidth === prevWidth) return;
        prevWidth = window.innerWidth;

        sliders.forEach((slider, indexI) => {
          const containers = slider.querySelectorAll('.slider-container');
          containers.forEach((container, indexJ) => {
            container.innerHTML = sliderHtml[indexI][indexJ];
            const width = getInitialWidth(container);
            if (width) {
              setValues(container, width, indexI, indexJ);
              setDirection(container, width);
            }
            setPauseOnHover(container);
          });
        });
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  });
  const propertiesData = [
    {
      property: '--direction',
      description:
        'Controls the direction of the scrolling effect. A value of 1 moves the images to the right, while -1 moves them to the left.',
      defaultValue: '1',
      acceptedValues: '1 (right), -1 (left)',
    },
    {
      property: '--speed',
      description:
        'Defines the speed of the scrolling animation. A higher value results in faster scrolling.',
      defaultValue: '20',
      acceptedValues: 'Number (higher values = faster)',
    },
    {
      property: '----image-aspect-ratio',
      description:
        'If true, the aspect ratio of the images is fixed. If false, the images are stretched to fit their container.',
      defaultValue: 'false',
      acceptedValues: 'true.false',
    },
  ];

  return (
    <div className='responsive-width w-full max-w-[62rem] sm:mx-auto mt-8 py-14 px-6 sm:px-4 sm:py-12'>
      <h2 className='text-3xl sm:text-4xl font-bold pb-6'>Image Gallery </h2>
      <p className='mb-10 sm:mb-16'>
        The ImageGallery component implements a responsive, infinite-scroll
        image gallery with smooth animations using the swing scrolling effect.
        It offers a dynamic image display with customizable speed and seamless
        scrolling.
      </p>

      <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

      {!showCode && (
        <div
          key={`${darkMode}-${showCode}`}
          className={`flex justify-center items-center rounded-lg shadow-md overflow-hidden ${
            darkMode
              ? 'bg-[var(--light-bg)] text-[var(--color-text)]'
              : 'bg-[var(--light-bg)] text-[var(--color-text)]'
          }  bg-gray-200 dark:from-gray-800 dark:to-gray-700`}
        >
          <div
            className='w-full'
            dangerouslySetInnerHTML={{
              __html: htmlCssCode,
            }}
          />
        </div>
      )}

      {showCode && (
        <div className='w-full overflow-x-auto rounded-xl'>
          <CodeBlock language='html' code={htmlCssCode} />
        </div>
      )}

      <hr
        className={`my-10 border-t ${
          darkMode ? 'border-gray-700 opacity-30' : 'border-gray-300 opacity-50'
        }`}
      />

      <h2 className='text-2xl sm:text-3xl font-bold mt-10 mb-6'>
        Transition and Animation Settings
      </h2>
      <div className='w-full mb-12 overflow-x-auto'>
        <table
          className={`w-full border-collapse rounded-lg overflow-hidden ${
            darkMode ? 'bg-gray-800' : 'bg-gray-50'
          }`}
        >
          <thead>
            <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <th className='py-3 px-4 text-left font-semibold'>Property</th>
              <th className='py-3 px-4 text-left font-semibold'>Description</th>

              <th className='py-3 px-4 text-left font-semibold'>
                Default Value
              </th>
              <th className='py-3 px-4 text-left font-semibold'>
                Accepted Value
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
                    {item.property}
                  </code>
                </td>
                <td className='py-3 px-4'>{item.description}</td>

                <td className='py-3 px-4'>
                  <code
                    className={`px-2 py-1 rounded text-sm ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}
                  >
                    {item.defaultValue}
                  </code>
                </td>
                <td className='py-3 px-4'>{item.acceptedValues}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ImageGallery;
