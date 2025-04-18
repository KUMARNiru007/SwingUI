'use client';
import React, { useEffect, useRef, useState } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import htmlCssCode from './WordRotating.js';

const RotatingWordsComponent = () => {
  const { darkMode } = useTheme();
  const [showCode, setShowCode] = useState(false);
  const wordsRef = useRef([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % wordsRef.current.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    wordsRef.current.forEach((el, i) => {
      if (el) {
        el.classList.add('hidden');
        el.classList.remove('word-active');
      }
    });

    const currentWord = wordsRef.current[index];
    if (currentWord) {
      currentWord.classList.remove('hidden');
      currentWord.classList.add('word-transition', 'word-enter');
      void currentWord.offsetWidth;
      currentWord.classList.add('word-active');

      setTimeout(() => {
        currentWord.classList.remove('word-enter');
      }, 500);
    }
  }, [index]);

  const rotatingWords = ['Like', 'Love' , "Your's"];

  return (
    <div className={`w-full transition-colors duration-300 ${darkMode ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]' : 'bg-[var(--light-bg)] text-[var(--color-text)]'}`}>  
      <div className="max-w-5xl mx-auto responsive-width px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className='text-3xl sm:text-4xl font-bold mb-2'>Word Rotating Animation</h2>
        <p className='mb-10 sm:mb-16'>This demo showcases rotating words using Tailwind CSS and React transitions.</p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode ? (
          <div className='flex justify-center items-center h-[200px] bg-white text-black from-gray-100 to-blue-100 rounded-lg shadow-md'>
            <div className='relative h-20 w-40 overflow-hidden perspective-1000 flex items-center justify-center'>
              {rotatingWords.map((word, i) => (
                <span
                  key={i}
                  ref={(el) => (wordsRef.current[i] = el)}
                  className={`absolute text-4xl font-bold rotating-word ${i !== 0 ? 'hidden' : ''}`}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className='w-full overflow-x-auto my-4 rounded-xl'>
            <CodeBlock language='html' code={htmlCssCode} />
          </div>
        )}
      </div>

      <style jsx>{`
        .word-transition {
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .word-enter {
          opacity: 0;
          transform: translateY(50%) rotateX(-90deg);
        }
        .word-active {
          opacity: 1;
          transform: translateY(0) rotateX(0deg);
        }
        .word-exit {
          opacity: 0;
          transform: translateY(-50%) rotateX(90deg);
        }
      `}</style>
    </div>
  );
};

export default RotatingWordsComponent;