import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../../src/index.css';
import { Link } from 'react-router-dom';
import blog1 from '../assets/images-for-Showcase/Animated_Gradinent_Light.webp';
import blog2 from '../assets/images-for-Showcase/Buttons_Light.webp';
import blog3 from '../assets/images-for-Showcase/Cards_Light.webp';
import blog4 from '../assets/images-for-Showcase/Gradinent_Light.webp';
import blog5 from '../assets/images-for-Showcase/Gradinent_Text_Light.webp';
import blog6 from '../assets/images-for-Showcase/NavBar_Light.webp';
import blog7 from '../assets/images-for-Showcase/Tabs_Light.webp';

const allCardsData = [
  { id: 1, img: blog1, title: 'Animated Gradinent' },
  { id: 2, img: blog2, title: 'Buttons' },
  { id: 3, img: blog3, title: 'Cards' },
  { id: 4, img: blog4, title: 'Gradinent' },
  { id: 5, img: blog5, title: 'Gradinent Text' },
  { id: 6, img: blog6, title: 'NavBar' },
  { id: 7, img: blog7, title: 'Tabs' },
];

const Showcase = () => {
  const { darkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [containerOffset, setContainerOffset] = useState(0);
  const carouselRef = useRef(null);
  const cardContainerRef = useRef(null);
  const touchStartX = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1);
      else if (width < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };

    const updateContainerOffset = () => {
      if (cardContainerRef.current) {
        const rect = cardContainerRef.current.getBoundingClientRect();
        const containerRect = carouselRef.current?.parentElement?.getBoundingClientRect();
        const offset = rect.left - (containerRect?.left || 0);
        setContainerOffset(Math.max(0, offset));
      }
    };

    updateVisibleCount();
    updateContainerOffset();

    const resizeObserver = new ResizeObserver(updateContainerOffset);
    if (cardContainerRef.current) {
      resizeObserver.observe(cardContainerRef.current);
    }

    window.addEventListener('resize', () => {
      updateVisibleCount();
      updateContainerOffset();
    });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateVisibleCount);
    };
  }, []);

  useEffect(() => {
    const startAutoPlay = () => {
      if (isAutoPlaying) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % allCardsData.length);
        }, 3000);
      }
    };

    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsAutoPlaying(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      setCurrentIndex((prev) => (prev + 1) % allCardsData.length);
    } else if (diff < -50) {
      setCurrentIndex((prev) => (prev - 1 + allCardsData.length) % allCardsData.length);
    }

    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 3000);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + allCardsData.length) % allCardsData.length);
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 3000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % allCardsData.length);
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 3000);
  };

  const getVisibleCards = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % allCardsData.length;
      result.push(allCardsData[index]);
    }
    return result;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className={`flex p-4 sm:p-10 lg:p-16 w-full transition-colors duration-300 ${
      darkMode ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]' : 'bg-[var(--light-bg)] text-[var(--color-text)]'
    }`}>
      <section 
        className='text-center w-full relative'
        style={{ fontFamily: 'var(--font-poppins)' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <span className='swing-ocean-gradient-animate hover:swing-ocean-gradient text-white text-[14px] font-medium px-6 py-2 rounded-full inline-block mb-4'>
          OUR COMPONENTS
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
          Ready–to–Use Components
          </h2>
          <p className='text-lg max-w-3xl mx-auto'>
          Skip the boilerplate. SwingUI offers pre-styled, customizable Tailwind components built to save time and look great out of the box.
          </p>
        </div>

          <div className='relative' ref={carouselRef}>
            <button 
              onClick={goToPrev}
              style={{ left: `${containerOffset - 20}px` }}
              className={`absolute top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center 
                ${darkMode ? 'bg-[var(--dark-navbar-bg)] text-white' : 'bg-white text-gray-800'} shadow-md hover:scale-110 transition-transform`}
              aria-label="Previous"
            >
              &lt;
            </button>

            <div 
              ref={cardContainerRef}
              className='flex justify-center gap-4 sm:gap-6 overflow-hidden touch-pan-x'
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {visibleCards.map((card, index) => (
                <div
                  key={`${card.id}-${index}`}
                  className={`flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[400px]
                    p-4 rounded-2xl transition duration-300
                    ${darkMode ? 'border border-[var(--dark-hover-bg)] shadow-md' : 'border border-[#e6e8f0] shadow-md'}
                  `}
                  style={{
                    backgroundColor: darkMode
                      ? 'var(--dark-navbar-bg)'
                      : '#f9f7fa',
                  }}
                >
                  <div 
                    className='relative rounded-xl overflow-hidden mb-3'
                    style={{
                      padding: '10px',
                      aspectRatio: '1080/720',
                      backgroundColor: darkMode ? 'var(--dark-bg)' : '#eef1f6'
                    }}
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className='object-cover w-full h-full rounded-lg'
                    />
                  </div>
                  <h3 className={`text-base font-bold ${darkMode ? 'text-[var(--color-text-dark)]' : 'text-black'}`}>
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>

            <button 
              onClick={goToNext}
              style={{ right: `${containerOffset - 20}px` }}
              className={`absolute top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center 
                ${darkMode ? 'bg-[var(--dark-navbar-bg)] text-white' : 'bg-white text-gray-800'} shadow-md hover:scale-110 transition-transform`}
              aria-label="Next"
            >
              &gt;
            </button>
          </div>

          <Link to='/components/button'>
            <button className='cursor-pointer px-6 py-3 mt-24 rounded-full w-[85%] sm:w-auto border border-gray-300 font-semibold hover:text-white hover:bg-gray-800 transition'>
              Explore All Components
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Showcase;