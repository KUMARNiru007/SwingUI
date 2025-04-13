import { useState, useEffect, useRef, useCallback } from 'react';

import img1 from '../assets/features/link-cdn.webp';
import img2 from '../assets/features/want-gradinent.webp';
import img3 from '../assets/features/add-animate.webp';
import linkIcon from '../assets/icons/link.webp';
import blendToolIcon from '../assets/icons/blend-tool.webp';
import motionGraphicIcon from '../assets/icons/motion-graphic.webp';

import '../docs/SwingKit/Gradients/style.css';

export default function FeaturesSection() {
  // Scroll state and refs
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const sliderContainerRef = useRef(null);
  const [touchStartY, setTouchStartY] = useState(0);
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const [sliderItems, setSliderItems] = useState([]);

  // New state/ref for user interaction control
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const interactionTimeoutRef = useRef(null);

  // Helper to mark that the user has interacted
  const handleUserInteraction = () => {
    setIsUserInteracting(true);
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    // Resume auto-scroll after 2 seconds of inactivity
    interactionTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 2000);
  };

  // Features data (for the left-hand feature cards)
  const features = [
    {
      icon: 'link',
      title: 'Link the Essentials',
      description:
        "Include Tailwind CSS, Remix Icon, and our SwingUI CSS & JS CDN files in your project — you're all set to start building.",
    },
    {
      icon: 'gradient',
      title: 'Need a Gradient?',
      description:
        'Add our custom gradient class to any element and get a clean, modern background instantly. No configs. No chaos.',
    },
    {
      icon: 'animation',
      title: 'Add Animation',
      description:
        'Want it to move? Just slap on -animate and SwingUI will handle the rest — smooth, stylish motion with zero setup.',
    },
  ];

  // Initialize slider items and initial scroll position
  useEffect(() => {
    if (scrollContainerRef.current && sliderContainerRef.current) {
      const sliderElements =
        sliderContainerRef.current.querySelectorAll('.slider-item');
      const sliderArr = Array.from(sliderElements);
      setSliderItems(sliderArr);

      // Set initial position
      setInitialPosition(sliderArr);

      // Mark the first slider item as active
      if (sliderElements.length > 0) {
        sliderElements[0].classList.add('active');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMaxScroll = () => {
    if (!sliderContainerRef.current || !scrollContainerRef.current) return 0;
    return -(
      sliderContainerRef.current.scrollHeight -
      scrollContainerRef.current.clientHeight
    );
  };

  const setInitialPosition = (sliderArr) => {
    if (!sliderArr.length || !scrollContainerRef.current) return;
    const itemHeight = sliderArr[0]?.offsetHeight || 0;
    // visiblePortion is used to keep a slight preview of the next image (adjust as needed)
    const visiblePortion = itemHeight / 9;
    const initialOffset = -(
      itemHeight -
      scrollContainerRef.current.clientHeight +
      visiblePortion
    );
    const newScrollY = Math.max(getMaxScroll(), Math.min(0, initialOffset));
    setCurrentScrollY(newScrollY);
    if (sliderContainerRef.current) {
      sliderContainerRef.current.style.transform = `translateY(${newScrollY}px)`;
    }
    updateItemsVisibility(newScrollY);
  };

  const updateItemsVisibility = (scrollY) => {
    if (!scrollContainerRef.current || sliderItems.length === 0) return;
    const containerHeight = scrollContainerRef.current.clientHeight;
    const visibilityThreshold = containerHeight * 0.5;
    let newActiveIndex = activeIndex;

    sliderItems.forEach((item, index) => {
      const itemTop = item.offsetTop + scrollY;
      const itemBottom = itemTop + item.offsetHeight;

      if (
        itemTop >= -visibilityThreshold &&
        itemBottom <= containerHeight + visibilityThreshold
      ) {
        item.classList.add('active');
        item.classList.remove('fade-out');
        newActiveIndex = index;
      } else if (
        (itemTop < -visibilityThreshold && itemBottom > -visibilityThreshold) ||
        (itemTop < containerHeight + visibilityThreshold &&
          itemBottom > containerHeight + visibilityThreshold)
      ) {
        // Middle transition area
        item.classList.remove('active', 'fade-out');
      } else {
        item.classList.remove('active');
        item.classList.add('fade-out');
      }
    });
    if (newActiveIndex !== activeIndex) {
      setActiveIndex(newActiveIndex);
    }
  };

  // Manual wheel handler with interaction detection
  const handleWheel = useCallback(
    (e) => {
      e.preventDefault();
      handleUserInteraction(); // Pause auto-scroll on interaction
      const targetScrollY = Math.max(
        getMaxScroll(),
        Math.min(0, currentScrollY - e.deltaY),
      );
      setCurrentScrollY(targetScrollY);
      if (sliderContainerRef.current) {
        sliderContainerRef.current.style.transform = `translateY(${targetScrollY}px)`;
      }
      updateItemsVisibility(targetScrollY);
    },
    [currentScrollY],
  );

  // Manual touch handlers
  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    handleUserInteraction(); // Pause auto-scroll on touch
    const touchDelta = touchStartY - e.touches[0].clientY;
    setTouchStartY(e.touches[0].clientY);
    const targetScrollY = Math.max(
      getMaxScroll(),
      Math.min(0, currentScrollY - touchDelta),
    );
    setCurrentScrollY(targetScrollY);
    if (sliderContainerRef.current) {
      sliderContainerRef.current.style.transform = `translateY(${targetScrollY}px)`;
    }
    updateItemsVisibility(targetScrollY);
  };

  // Global event listeners for wheel/touch within the slider region
  useEffect(() => {
    const handleGlobalWheel = (e) => {
      if (!scrollContainerRef.current) return;
      const rect = scrollContainerRef.current.getBoundingClientRect();
      const withinSlider =
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right;
      const canScrollDown = currentScrollY > getMaxScroll();
      const canScrollUp = currentScrollY < 0;
      if (withinSlider && (canScrollUp || canScrollDown)) {
        handleWheel(e);
      }
    };

    const handleGlobalTouchMove = (e) => {
      if (!scrollContainerRef.current) return;
      const rect = scrollContainerRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      if (!touch) return;
      const withinSlider =
        touch.clientY >= rect.top &&
        touch.clientY <= rect.bottom &&
        touch.clientX >= rect.left &&
        touch.clientX <= rect.right;
      const canScrollDown = currentScrollY > getMaxScroll();
      const canScrollUp = currentScrollY < 0;
      if (withinSlider && (canScrollUp || canScrollDown)) {
        e.preventDefault();
        handleTouchMove(e);
      }
    };

    window.addEventListener('wheel', handleGlobalWheel, { passive: false });
    window.addEventListener('touchmove', handleGlobalTouchMove, {
      passive: false,
    });
    return () => {
      window.removeEventListener('wheel', handleGlobalWheel);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
    };
  }, [handleWheel, currentScrollY]);

  useEffect(() => {
    if (sliderItems.length === 0 || isUserInteracting) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % sliderItems.length;
        const itemHeight = sliderItems[0].offsetHeight;
        const targetScrollY = -nextIndex * itemHeight;
        setCurrentScrollY(targetScrollY);
        if (sliderContainerRef.current) {
          sliderContainerRef.current.style.transform = `translateY(${targetScrollY}px)`;
        }
        updateItemsVisibility(targetScrollY);
        return nextIndex;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, [sliderItems, isUserInteracting]);

  // Renders icon based on feature
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'link':
        return (
          <div className='bg-blue-500 text-white p-3 rounded-full'>
            <img src={linkIcon} alt='link' className='w-6 h-6' />
          </div>
        );
      case 'gradient':
        return (
          <div className='bg-blue-500 text-white p-3 rounded-full'>
            <img src={blendToolIcon} alt='gradient' className='w-6 h-6' />
          </div>
        );
      case 'animation':
        return (
          <div className='bg-blue-500 text-white p-3 rounded-full'>
            <img src={motionGraphicIcon} alt='animation' className='w-6 h-6' />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className='bg-white w-full py-16 font-sans'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <span className='bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full inline-block mb-4'>
            EASY TO USE
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Built on Top of Tailwind CSS
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            We provide our own pre-built component classes—just layer them on
            top of your Tailwind setup. Here's an example:
          </p>
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-6xl mx-auto'>
          {/* Left Side: Feature Cards */}
          <div className='w-full lg:w-1/2 space-y-6'>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 ${
                  activeIndex === index ? 'scale-105 border-blue-200' : ''
                }`}
              >
                <div className='flex items-start gap-4'>
                  {renderIcon(feature.icon)}
                  <div>
                    <h3 className='font-bold text-xl text-gray-900 mb-2'>
                      {feature.title}
                    </h3>
                    <p className='text-gray-600'>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='w-full lg:w-1/2'>
            <div
              ref={scrollContainerRef}
              className='relative w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg swing-ocean-gradient'
              onTouchStart={handleTouchStart}
            >
              <div
                ref={sliderContainerRef}
                className='absolute w-full transition-transform duration-300 ease-out'
                style={{ transform: `translateY(${currentScrollY}px)` }}
              >
                <div className='slider-item w-full h-80 md:h-96 transition-all duration-500'>
                  <div className='w-full h-full flex items-center justify-center'>
                    <img
                      src={img1}
                      alt='Link the Essentials feature demonstration'
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
                <div className='slider-item w-full h-80 md:h-96 transition-all duration-500'>
                  <div className='w-full h-full flex items-center justify-center'>
                    <img
                      src={img2}
                      alt='Gradient feature demonstration'
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
                <div className='slider-item w-full h-80 md:h-96 transition-all duration-500'>
                  <div className='w-full h-full flex items-center justify-center'>
                    <img
                      src={img3}
                      alt='Animation feature demonstration'
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
