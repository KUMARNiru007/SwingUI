import React, { useState, useEffect } from 'react';
import PreviewCodeBtn from '../../../components/previewcodebtn';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';

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
        <!-- First Slider -->
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
  
        <!-- Second Slider -->
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
  }, [showCode,darkMode]);

  return (
    <div className='w-full bg-background text-foreground'>
      <h2 className='text-3xl font-bold mt-6 mb-2'>ImageGallery Component</h2>
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
    </div>
  );
}

export default ImageGallery;
