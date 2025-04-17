import React, { useState, useEffect, useRef } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';

const SpotLightText = () => {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();

  const previewRef = useRef(null);
  const cursorRef = useRef(null);
  const shape1Ref = useRef(null);
  const shape2Ref = useRef(null);
  const shape3Ref = useRef(null);
  const textRef = useRef(null);

  const htmlCode = `
<div class="relative h-screen w-full overflow-hidden">

  <div class="fixed w-5 h-5 rounded-full bg-blue-900 z-50 pointer-events-none transition-transform duration-50 ease-linear opacity-0"></div>
  

  <div class="relative h-full w-full bg-blue-900 overflow-hidden">
    <div class="absolute rounded-full bg-blue-600 w-[650px] h-[650px] -ml-[325px] -mt-[325px] transition-transform duration-100 ease-linear"></div>
    <div class="absolute rounded-full bg-red-100 w-[440px] h-[440px] -ml-[220px] -mt-[220px] transition-transform duration-150 ease-linear"></div>
    <div class="absolute rounded-full bg-yellow-400 w-[270px] h-[270px] -ml-[135px] -mt-[135px] transition-transform duration-200 ease-linear"></div>
  </div>
  

  <div class="absolute inset-0 flex items-center justify-center bg-white mix-blend-screen">
    <h1 class="text-7xl md:text-8xl lg:text-9xl font-black text-blue-900 text-center">Hello there!</h1>
  </div>
</div>
`;

  useEffect(() => {
    if (showCode) return;
    const containerEl = previewRef.current;
    const textEl = textRef.current;
    if (!containerEl || !textEl) return;

    const resetPositions = () => {
      [cursorRef, shape1Ref, shape2Ref, shape3Ref].forEach((ref) => {
        if (ref.current) {
          ref.current.style.opacity = '0';
        }
      });
    };

    resetPositions();

    const handleTextMouseMove = (e) => {
      const { left, top } = containerEl.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      [cursorRef, shape1Ref, shape2Ref, shape3Ref].forEach((ref) => {
        if (ref.current) {
          ref.current.style.opacity = '1';
          ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
      });
    };

    textEl.addEventListener('mousemove', handleTextMouseMove);
    textEl.addEventListener('mouseleave', resetPositions);

    containerEl.addEventListener('mouseleave', resetPositions);

    return () => {
      textEl.removeEventListener('mousemove', handleTextMouseMove);
      textEl.removeEventListener('mouseleave', resetPositions);
      containerEl.removeEventListener('mouseleave', resetPositions);
    };
  }, [showCode]);

  return (

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
        <h2 className='text-3xl sm:text-4xl font-bold pb-4'>
          SpotLight Text
        </h2>
        <p className='mb-10 sm:mb-16'>
          This interactive demo showcases shapes that follow your cursor with a
          smooth, staggered animation effect. The component creates an engaging
          visual experience through overlapping colored shapes and a custom
          cursor. It works on both desktop and mobile devices.
        </p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode && (
          <div
            ref={previewRef}
            className='relative h-96 rounded-lg overflow-hidden cursor-default bg-blue-900'
          >
            <div
              ref={cursorRef}
              style={{ willChange: 'transform' }}
              className='absolute w-5 h-5 rounded-full bg-blue-900 z-50 pointer-events-none transition-transform duration-50 ease-linear opacity-0'
            />

            <div
              ref={shape1Ref}
              style={{ willChange: 'transform' }}
              className='absolute rounded-full bg-blue-600 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96
                         -ml-32 md:-ml-40 lg:-ml-48 -mt-32 md:-mt-40 lg:-mt-48
                         transition-transform duration-100 ease-linear opacity-0'
            />
            <div
              ref={shape2Ref}
              style={{ willChange: 'transform' }}
              className='absolute rounded-full bg-red-100 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80
                         -ml-24 md:-ml-32 lg:-ml-40 -mt-24 md:-mt-32 lg:-mt-40
                         transition-transform duration-150 ease-linear opacity-0'
            />
            <div
              ref={shape3Ref}
              style={{ willChange: 'transform' }}
              className='absolute rounded-full bg-yellow-400 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48
                         -ml-16 md:-ml-20 lg:-ml-24 -mt-16 md:-mt-20 lg:-mt-24
                         transition-transform duration-200 ease-linear opacity-0'
            />

            <div className='absolute inset-0 flex items-center justify-center bg-white mix-blend-screen'>
              <h1
                ref={textRef}
                className='text-4xl md:text-6xl lg:text-8xl font-black text-blue-900 text-center cursor-none hover:scale-105 transition-transform'
              >
                Hello there!
              </h1>
            </div>
          </div>
        )}

        {showCode && (
          <div className='w-full overflow-x-auto my-4 rounded-xl'>
            <CodeBlock language='html' code={htmlCode} />
          </div>
        )}
      </div>
  );
};

export default SpotLightText;
