import React, { useState, useEffect, useRef } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';

const VerticalSliderDemo = () => {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();

  const slidesRef = useRef(null);
  const wheelThrottleRef = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = 3;

  const slides = [
    {
      title: 'SwingUI - Welcome Aboard',
      description:
        'This is the first slide. Discover a vibrant experience like never before.',
      buttonText: 'Explore Now',
      background: 'linear-gradient(135deg, #ff758c, #ff7eb3)',
    },
    {
      title: 'SwingUI - Explore New Horizons',
      description:
        'This is the second slide. Connect ideas and build innovative solutions.',
      buttonText: 'Get Inspired',
      background: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    },
    {
      title: 'SwingUI - Slide Three',
      description:
        'This is the third slide. Inspire your creativity with engaging visuals.',
      buttonText: 'Start Creating',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
    },
  ];

  const htmlCssCode = `<div class="font-sans bg-gradient-to-b from-gray-100 to-blue-100 h-screen flex justify-center items-center overflow-hidden">
  <div class="relative w-[80%] h-[85vh] overflow-hidden rounded-[20px] bg-gradient-to-br from-white to-gray-100 shadow-lg flex">
    <div
      id="slides"
      class="flex flex-col transition-transform duration-500 ease-in-out transform -translate-y-full flex-1"
    >
      <div
        class="min-h-full flex flex-col justify-center items-center text-center p-10 text-white rounded-[20px]"
        style="background: linear-gradient(135deg, #667eea, #764ba2);"
      >
        <h2 class="text-4xl mb-4">SwingUI - Slide Three</h2>
        <p class="text-lg max-w-[600px] mb-6">
          This is the third slide. Inspire your creativity with engaging visuals.
        </p>
        <button class="px-7 py-3 text-base bg-white/90 text-gray-800 rounded-full hover:bg-white transition">
          Start Creating
        </button>
      </div>

  
      <div
        class="min-h-full flex flex-col justify-center items-center text-center p-10 text-white rounded-[20px]"
        style="background: linear-gradient(135deg, #ff758c, #ff7eb3);"
      >
        <h2 class="text-4xl mb-4">SwingUI - Welcome Aboard</h2>
        <p class="text-lg max-w-[600px] mb-6">
          This is the first slide. Discover a vibrant experience like never before.
        </p>
        <button class="px-7 py-3 text-base bg-white/90 text-gray-800 rounded-full hover:bg-white transition">
          Explore Now
        </button>
      </div>

      <div
        class="min-h-full flex flex-col justify-center items-center text-center p-10 text-white rounded-[20px]"
        style="background: linear-gradient(135deg, #43e97b, #38f9d7);"
      >
        <h2 class="text-4xl mb-4">SwingUI - Explore New Horizons</h2>
        <p class="text-lg max-w-[600px] mb-6">
          This is the second slide. Connect ideas and build innovative solutions.
        </p>
        <button class="px-7 py-3 text-base bg-white/90 text-gray-800 rounded-full hover:bg-white transition">
          Get Inspired
        </button>
      </div>

      <div
        class="min-h-full flex flex-col justify-center items-center text-center p-10 text-white rounded-[20px]"
        style="background: linear-gradient(135deg, #667eea, #764ba2);"
      >
        <h2 class="text-4xl mb-4">SwingUI - Slide Three</h2>
        <p class="text-lg max-w-[600px] mb-6">
          This is the third slide. Inspire your creativity with engaging visuals.
        </p>
        <button class="px-7 py-3 text-base bg-white/90 text-gray-800 rounded-full hover:bg-white transition">
          Start Creating
        </button>
      </div>


      <div
        class="min-h-full flex flex-col justify-center items-center text-center p-10 text-white rounded-[20px]"
        style="background: linear-gradient(135deg, #ff758c, #ff7eb3);"
      >
        <h2 class="text-4xl mb-4">SwingUI - Welcome Aboard</h2>
        <p class="text-lg max-w-[600px] mb-6">
          This is the first slide. Discover a vibrant experience like never before.
        </p>
        <button class="px-7 py-3 text-base bg-white/90 text-gray-800 rounded-full hover:bg-white transition">
          Explore Now
        </button>
      </div>
    </div>


    <div id="dots" class="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
      <div class="w-3.5 h-3.5 my-1 bg-gray-300 rounded-full cursor-pointer dot active"></div>
      <div class="w-3.5 h-3.5 my-1 bg-gray-300 rounded-full cursor-pointer dot"></div>
      <div class="w-3.5 h-3.5 my-1 bg-gray-300 rounded-full cursor-pointer dot"></div>
    </div>
  </div>
</div>

`;

  useEffect(() => {
    const slideElement = slidesRef.current;
    if (!slideElement) return;

    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      if (currentIndex === totalSlides + 1) {
        slideElement.style.transition = 'none';
        setCurrentIndex(1);

        slideElement.offsetHeight;
      } else if (currentIndex === 0) {
        slideElement.style.transition = 'none';
        setCurrentIndex(totalSlides);

        slideElement.offsetHeight;
      }
    };

    slideElement.addEventListener('transitionend', handleTransitionEnd);

    if (slideElement.style.transition === 'none') {
      const timer = setTimeout(() => {
        slideElement.style.transition = 'transform 0.6s ease-in-out';
      }, 10);
      return () => clearTimeout(timer);
    }

    return () => {
      slideElement.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [currentIndex, totalSlides]);

  useEffect(() => {
    const slideElement = slidesRef.current;
    if (!slideElement) return;

    if (slideElement.style.transition !== 'none') {
      slideElement.style.transition = 'transform 0.6s ease-in-out';
    }
  }, [currentIndex]);

  const handleWheel = (e) => {
    e.preventDefault();

    if (isTransitioning || wheelThrottleRef.current) return;

    const scrollThreshold = 10;
    if (Math.abs(e.deltaY) > scrollThreshold) {
      wheelThrottleRef.current = true;
      setIsTransitioning(true);

      if (e.deltaY > 0) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setCurrentIndex((prev) => prev - 1);
      }

      setTimeout(() => {
        wheelThrottleRef.current = false;
      }, 600);
    }
  };

  const handleDotClick = (dotIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(dotIndex + 1);
  };

  const getRealIndex = (index) => {
    if (index === 0) return totalSlides - 1;
    if (index > totalSlides) return 0;
    return index - 1;
  };

  const renderSlide = (slideData) => (
    <div
      className='min-h-full flex flex-col justify-center items-center text-center p-10 text-white rounded-[20px]'
      style={{ background: slideData.background }}
    >
      <h2 className='text-4xl mb-4'>{slideData.title}</h2>
      <p className='text-lg max-w-[600px] mb-6'>{slideData.description}</p>
      <button className='px-7 py-3 text-base bg-white/90 text-gray-800 rounded-full hover:bg-white transition'>
        {slideData.buttonText}
      </button>
    </div>
  );

  return (
    <div
      className={`w-full px-2 py-6 transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        <h2 className='text-3xl sm:text-4xl font-bold mb-2'>Vertical Slider</h2>
        <p className='mb-10 sm:mb-16'>
          This vertical slider demo showcases a smooth scroll experience with an
          infinite loop effect. Navigate through slides using the mouse wheel or
          the navigation dots.
        </p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode ? (
          <div className='flex justify-center items-center h-[600px] bg-gray-100 rounded-lg shadow-md'>
            <div
              onWheel={handleWheel}
              className='relative w-4/5 h-[85vh] max-h-[500px] overflow-hidden rounded-[20px] bg-gradient-to-br from-white to-gray-100 shadow-lg flex'
            >
              <div
                ref={slidesRef}
                className='flex flex-col transition-transform duration-500 ease-in-out transform flex-1'
                style={{ transform: `translateY(-${currentIndex * 100}%)` }}
              >
                {renderSlide(slides[2])}

                {slides.map((slide, index) => (
                  <React.Fragment key={index}>
                    {renderSlide(slide)}
                  </React.Fragment>
                ))}

                {renderSlide(slides[0])}
              </div>

              <div className='absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center z-10'>
                {Array.from({ length: totalSlides }).map((_, i) => (
                  <div
                    key={i}
                    onClick={() => handleDotClick(i)}
                    className={`w-3.5 h-3.5 my-1 ${
                      getRealIndex(currentIndex) === i
                        ? 'bg-gray-800'
                        : 'bg-gray-300'
                    } rounded-full cursor-pointer transition-colors`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className='w-full overflow-x-auto my-4 rounded-xl'>
            <CodeBlock language='html' code={htmlCssCode} />
          </div>
        )}
      </div>
    </div>
  );
};

export default VerticalSliderDemo;
