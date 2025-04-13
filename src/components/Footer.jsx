import React, { useLayoutEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/gradient-logo.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const { darkMode } = useTheme();

  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const descriptionRef = useRef(null);
  const linksRef = useRef(null);

  const bgClass = darkMode
    ? 'bg-[var(--dark-navbar-bg)] text-[var(--color-text-dark)]'
    : 'bg-[var(--light-navbar-bg)] text-[var(--color-text)]';

  const borderClass = darkMode ? 'border-gray-700' : 'border-gray-300';

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%', // when top of footer hits 80% of viewport
        },
      });

      tl.from(logoRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: 'power3.out',
      })
        .from(textRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
        }, "-=0.5")
        .from(descriptionRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
        }, "-=0.5")
        .from(linksRef.current.children, {
          opacity: 0,
          y: 10,
          stagger: 0.15,
          duration: 0.6,
          ease: 'power2.out',
        }, "-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={containerRef}
      className={`w-full flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center ${bgClass}`}
    >
      <div className='w-full px-4 md:px-10'>
        <div className='flex flex-col items-center justify-center text-center mt-6'>
          <div className='mb-4 mt-14' ref={logoRef}>
            <img src={logo} alt='SwingUI Logo' className='h-18' />
          </div>

          <div className='mb-4' ref={textRef}>
            <p className='font-bold'>
              Built with <span className='text-red-500'>❤</span> by Backbenchers
            </p>
          </div>

          <div
            ref={descriptionRef}
            className={`max-w-6xl mx-auto mb-14 ${
              darkMode ? 'text-gray-200' : 'text-gray-700'
            }`}
          >
            <p>
              SwingUI is a hackathon project born during the{' '}
              <span className='font-semibold'>ChaiCode Web Dev First Cohort</span> — crafted by a
              passionate team of backbenchers who poured their hearts into every line of code.
              Guided by the incredible mentors{' '}
              <span className='font-semibold'>
                Hitesh Sir, Piyush Sir, Anirudh Sir, Mukul Sir
              </span>
              , and <span className='font-semibold'>Akash Sir</span>, we built SwingUI not just to
              ship components, but to learn, grow, and create something we're truly proud of.
            </p>
          </div>
        </div>

        <div
          className={`flex flex-col md:flex-row md:justify-between md:items-center border-t ${borderClass} pt-10 pb-8 gap-y-4 text-sm mt-4 mb-4`}
        >
          <div className='text-center md:text-left w-full md:w-auto font-normal'>
            <span>© 2025 SwingUI. All Rights Reserved.</span>
          </div>

          <div className='w-full md:w-auto flex justify-center md:justify-end'>
            <div
              className='flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 font-normal'
              ref={linksRef}
            >
              <a
                href='#'
                className='hover:text-[var(--dark-nav-hover)] transition-colors'
              >
                Github
              </a>
              <a
                href='https://discord.com/invite/gd9Vjb6VCm'
                rel='noopener noreferrer'
                target='_blank'
                className='hover:text-[var(--dark-nav-hover)] transition-colors'
              >
                Discord
              </a>
              <a
                href='https://x.com/swing_ui'
                rel='noopener noreferrer'
                target='_blank'
                className='hover:text-[var(--dark-nav-hover)] transition-colors'
              >
                X (formerly Twitter)
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
