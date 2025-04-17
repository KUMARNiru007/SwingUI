'use client';
import React, { useState, useEffect, useRef } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import htmlCssCode from './ImageAccordions';

const ImageAccordions = () => {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();
  const slidesRef = useRef(null);
  const dotsRef = useRef(null);
  const slideCount = 3;

  const slidesData = [
    { title: 'SwingUI - Welcome Aboard', text: 'This is the first slide. Discover a vibrant experience like never before.', bgStyle: 'linear-gradient(135deg, #ff758c, #ff7eb3)' },
    { title: 'SwingUI - Explore New Horizons', text: 'This is the second slide. Connect ideas and build innovative solutions.', bgStyle: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
    { title: 'SwingUI - Slide Three', text: 'This is the third slide. Inspire your creativity with engaging visuals.', bgStyle: 'linear-gradient(135deg, #667eea, #764ba2)' },
  ];

  useEffect(() => {
    const container = slidesRef.current;
    const dots = Array.from(dotsRef.current.children);
    let idx = 1;
    let isTransitioning = false;

    const firstClone = container.children[0].cloneNode(true);
    const lastClone = container.children[slideCount - 1].cloneNode(true);
    container.appendChild(firstClone);
    container.insertBefore(lastClone, container.children[0]);

    container.style.transform = `translateY(-100%)`;
    container.style.transition = 'transform 0.5s ease-in-out';

    const updateDots = () => {
      dots.forEach((dot, i) => dot.classList.toggle('bg-blue-500', i === idx - 1));
    };
    updateDots();

    const goTo = (target) => {
      if (isTransitioning) return;
      isTransitioning = true;
      idx = target;
      container.style.transition = 'transform 0.5s ease-in-out';
      container.style.transform = `translateY(-${idx * 100}%)`;
      updateDots();
    };

    const nextSlide = () => goTo(idx + 1);
    const prevSlide = () => goTo(idx - 1);

    const onTransitionEnd = () => {
      isTransitioning = false;
      if (idx === 0) {
        idx = slideCount;
        container.style.transition = 'none';
        container.style.transform = `translateY(-${idx * 100}%)`;
      }
      if (idx === slideCount + 1) {
        idx = 1;
        container.style.transition = 'none';
        container.style.transform = `translateY(-100%)`;
      }
    };

    container.addEventListener('transitionend', onTransitionEnd);

    const onWheel = (e) => {
      e.preventDefault();
      e.deltaY > 0 ? nextSlide() : prevSlide();
    };
    container.addEventListener('wheel', onWheel, { passive: false });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => goTo(i + 1));
    });

    return () => {
      container.removeEventListener('transitionend', onTransitionEnd);
      container.removeEventListener('wheel', onWheel);
    };
  }, [slideCount]);

  const slidesJSX = slidesData.map((s, i) => (
    <div
      key={i}
      className="min-h-full flex flex-col justify-center items-center text-center p-10 text-white rounded-[20px]"
      style={{ background: s.bgStyle }}
    >
      <h2 className="text-4xl mb-4">{s.title}</h2>
      <p className="text-lg max-w-[600px] mb-6">{s.text}</p>
      <button className="px-7 py-3 text-base bg-white/90 text-gray-800 rounded-full hover:bg-white transition">
        {i === 0 ? 'Explore Now' : i === 1 ? 'Get Inspired' : 'Start Creating'}
      </button>
    </div>
  ));

  const dotsJSX = Array.from({ length: slideCount }).map((_, i) => (
    <div key={i} className="w-3.5 h-3.5 my-1 bg-gray-300 rounded-full cursor-pointer dot" />
  ));

  return (
    <div className={`w-full px-2 py-6 transition-colors duration-300 ${darkMode ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]' : 'bg-[var(--light-bg)] text-[var(--color-text)]'}`}>  
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        <h2 className='text-3xl sm:text-4xl font-bold mb-2'>ImageAccordions</h2>
        <p className='mb-10 sm:mb-16'>
          This vertical slider demo showcases a smooth scroll experience with an
          infinite loop effect. Navigate through slides using the mouse wheel or
          the navigation dots.
        </p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode ? (
          <div className='flex justify-center items-center h-[600px] bg-gradient-to-b from-gray-100 to-blue-100 rounded-lg shadow-md'>
            <div className="relative w-[80%] h-[85vh] overflow-hidden rounded-[20px] shadow-lg flex">
              <div
                ref={slidesRef}
                className="flex flex-col transition-transform duration-500 ease-in-out transform"
              >
                {slidesJSX}
              </div>
              <div
                ref={dotsRef}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center z-10"
              >
                {dotsJSX}
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

export default ImageAccordions;
