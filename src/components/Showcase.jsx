import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../../src/index.css';

import blog1 from '../assets/images-for-Showcase/Animated_Gradinent_Light.webp';
import blog2 from '../assets/images-for-Showcase/Buttons_Light.webp';
import blog3 from '../assets/images-for-Showcase/Cards_Light.webp';
import blog4 from '../assets/images-for-Showcase/Gradinent_Light.webp';
import blog5 from '../assets/images-for-Showcase/Gradinent_Text_Light.webp';
import blog6 from '../assets/images-for-Showcase/NavBar_Light.webp';
import blog7 from '../assets/images-for-Showcase/Tabs_Light.webp';

const cardsData = [
  { id: 1, img: blog1, title: 'Animated Gradinent' },
  { id: 2, img: blog2, title: 'Buttons' },
  { id: 3, img: blog3, title: 'Cards' },
  { id: 4, img: blog4, title: 'Gradinent' },
  { id: 5, img: blog5, title: 'Gradinent Text' },
  { id: 6, img: blog6, title: 'NavBar' },
  { id: 7, img: blog7, title: 'Tabs' },
];

const Showcase = () => {
  const carouselRef = useRef(null);
  const { darkMode } = useTheme();

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const scrollAmount =
          carouselRef.current.offsetWidth < 640
            ? carouselRef.current.offsetWidth * 0.9
            : carouselRef.current.offsetWidth < 1024
            ? carouselRef.current.offsetWidth * 0.5
            : carouselRef.current.offsetWidth / 3;

        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

        if (
          carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
          carouselRef.current.scrollWidth
        ) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Wheel scroll
  useEffect(() => {
    const handleWheel = (e) => {
      if (carouselRef.current && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        carouselRef.current.scrollBy({ left: e.deltaY });
      }
    };
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  // Mouse drag scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      carousel.classList.add('cursor-grabbing');
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      carousel.classList.remove('cursor-grabbing');
    };

    const handleMouseUp = () => {
      isDown = false;
      carousel.classList.remove('cursor-grabbing');
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 1.5;
      carousel.scrollLeft = scrollLeft - walk;
    };

    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    carousel.addEventListener('mouseup', handleMouseUp);
    carousel.addEventListener('mousemove', handleMouseMove);

    return () => {
      carousel.removeEventListener('mousedown', handleMouseDown);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      carousel.removeEventListener('mouseup', handleMouseUp);
      carousel.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`flex p-20 w-full transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      <section
        className='text-center w-full'
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header */}
          <div className='mb-10 sm:mb-12'>
            <span className='inline-block px-4 py-2 swing-ocean-gradient-animate text-white text-xs sm:text-sm font-semibold rounded-full mb-4 bg-gradient-to-r from-[#3badb2] to-[#004aad]'>
              OUR COMPONENTS
            </span>
            <h2 className='text-xl sm:text-3xl lg:text-4xl font-extrabold mb-4'>
              Ready–to–Use Components
            </h2>
            <p className='text-sm sm:text-base max-w-2xl mx-auto'>
              Skip the boilerplate. SwingUI offers pre-styled, customizable
              Tailwind components built to save time and look great out of the
              box.
            </p>
          </div>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className='flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 cursor-grab active:cursor-grabbing px-2 sm:px-0'
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {cardsData.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className={`flex-shrink-0 snap-start 
                  w-[85vw] sm:w-[60vw] md:w-[33.33vw] lg:w-[25vw] max-w-[420px] 
                  p-3 sm:p-4 md:p-5
                  rounded-2xl text-left
                  transition duration-300
                  ${darkMode ? 'border border-[var(--dark-hover-bg)] shadow-md' : 'border border-[#e6e8f0] shadow-md'}
                `}
                style={{
                  backgroundColor: darkMode
                    ? 'var(--dark-navbar-bg)'
                    : '#f9f7fa',
                }}
              >
                <div
                  className='rounded-xl w-full h-[180px] sm:h-[200px] md:h-[240px] mb-4 flex items-center justify-center overflow-hidden'
                  style={{
                    backgroundColor: darkMode ? 'var(--dark-bg)' : '#eef1f6',
                  }}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className='object-cover w-full h-full rounded-xl'
                  />
                </div>
                <h3
                  className={`text-base sm:text-lg md:text-xl font-bold mb-2 transition-colors duration-200 ${
                    darkMode ? 'text-[var(--color-text-dark)]' : 'text-black'
                  } hover:text-[var(--color-primary)]`}
                >
                  {card.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className='mt-12 sm:mt-14 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold transition duration-200 hover:swing-ocean-gradient swing-ocean-gradient hover:bg-[var(--color-primary-hover)] text-white'>
            Explore All Components
          </button>
        </div>
      </section>
    </div>
  );
};

export default Showcase;