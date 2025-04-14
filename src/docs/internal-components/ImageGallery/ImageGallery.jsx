import React, { useState, useEffect } from 'react';
import PreviewCodeBtn from '../../../components/previewcodebtn';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';

import img1 from '../../../assets/Images-For-Gallery/img1.webp';
import img2 from '../../../assets/Images-For-Gallery/img2.webp';
import img3 from '../../../assets/Images-For-Gallery/img3.webp';
import img4 from '../../../assets/Images-For-Gallery/img4.webp';

function ImageGallery() {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();

  const htmlCssCode = `
    <div
      class="swing-scrolling-image w-full"
      style="
        --direction: 1;
        --speed: 20;
        --image-aspect-ratio: false;
        --pause-on-hover: false;
        --pause-on-hover-mobile: false;
      "
    >
      <div class="slider-container w-full flex animate-scroll gap-4 px-4">
        <div class="slider-item flex-shrink-0 w-full sm:w-[45vw] md:w-[30vw] lg:w-[23vw] h-[200px] overflow-hidden rounded-lg">
          <img
            src="${img1}"
            alt="Image 1"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="slider-item flex-shrink-0 w-full sm:w-[45vw] md:w-[30vw] lg:w-[23vw] h-[200px] overflow-hidden rounded-lg">
          <img
            src="${img2}"
            alt="Image 2"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="slider-item flex-shrink-0 w-full sm:w-[45vw] md:w-[30vw] lg:w-[23vw] h-[200px] overflow-hidden rounded-lg">
          <img
            src="${img3}"
            alt="Image 3"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="slider-item flex-shrink-0 w-full sm:w-[45vw] md:w-[30vw] lg:w-[23vw] h-[200px] overflow-hidden rounded-lg">
          <img
            src="${img4}"
            alt="Image 4"
            class="w-full h-full object-cover"
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

      const setupInfiniteScroll = (slider, indexI) => {
        const containers = slider.querySelectorAll('.slider-container');

        containers.forEach((container, indexJ) => {
          if (!sliderHtml[indexI]) sliderHtml[indexI] = [];
          sliderHtml[indexI][indexJ] = container.innerHTML;

          const originalItems = Array.from(container.children);
          const itemCount = originalItems.length;

          if (itemCount === 0) return;

          let singleSetWidth = 0;
          originalItems.forEach((item) => {
            const itemWidth = item.offsetWidth;
            const computedStyle = window.getComputedStyle(item);
            const marginRight = Number.parseFloat(computedStyle.marginRight);
            const marginLeft = Number.parseFloat(computedStyle.marginLeft);
            singleSetWidth += itemWidth + marginRight + marginLeft;
          });

          const containerGap = Number.parseFloat(
            window.getComputedStyle(container).gap || 0,
          );
          singleSetWidth += containerGap * (itemCount - 1);

          container.style.setProperty(
            '--single-set-width',
            `${singleSetWidth}px`,
          );

          const speed = Number.parseFloat(
            slider.style.getPropertyValue('--speed') || 20,
          );
          const duration = (singleSetWidth / speed) * 4;
          container.style.setProperty('--duration', `${duration}s`);

          const allItems = container.innerHTML;
          container.innerHTML = '';

          const div1 = document.createElement('div');
          div1.innerHTML = allItems;
          container.append(...div1.children);

          const div2 = document.createElement('div');
          div2.innerHTML = allItems;
          container.append(...div2.children);

          const pauseOnHover =
            window.innerWidth > 767
              ? slider.style.getPropertyValue('--pause-on-hover').trim() ===
                'true'
              : slider.style
                  .getPropertyValue('--pause-on-hover-mobile')
                  .trim() === 'true';

          container.addEventListener('mouseenter', () => {
            if (pauseOnHover) container.style.animationPlayState = 'paused';
          });

          container.addEventListener('mouseleave', () => {
            container.style.animationPlayState = 'running';
          });
        });

        slider.classList.add('showing');
      };

      sliders.forEach((slider, index) => {
        setupInfiniteScroll(slider, index);
      });

      const handleResize = () => {
        if (window.innerWidth === prevWidth) return;
        prevWidth = window.innerWidth;

        sliders.forEach((slider, index) => {
          const containers = slider.querySelectorAll('.slider-container');
          containers.forEach((container, j) => {
            if (sliderHtml[index] && sliderHtml[index][j]) {
              container.innerHTML = sliderHtml[index][j];
            }
          });
          setupInfiniteScroll(slider, index);
        });
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [showCode, darkMode]);

  return (
    <div className='`px-4 py-6  w-full bg-background text-foreground'>
      <h2 className='text-3xl font-bold mb-2 sm:text-2xl md:text-3xl py-4 '>ImageGallery Component</h2>
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
