import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import '../docs/SwingKit/Gradients/style.css';

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSwingKitOpen, setMobileSwingKitOpen] = useState(false);
  const [mobileComponentsOpen, setMobileComponentsOpen] = useState(false);
  
  // Refs for animation targets
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const desktopLinksRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const dropdownMenusRef = useRef([]);
  const mobileDropdownsRef = useRef([]);
  const overlayRef = useRef(null);

  // Initialize animations on mount
  useEffect(() => {
    // Navbar entry animation
    gsap.from(navbarRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    // Logo animation
    gsap.from(logoRef.current, {
      x: -20,
      opacity: 0,
      delay: 0.3,
      duration: 0.6,
      ease: "back.out(1.7)"
    });

    // Desktop links animation
    gsap.from(desktopLinksRef.current.children, {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      delay: 0.5,
      duration: 0.6,
      ease: "power2.out"
    });

    // Clean up animations on unmount
    return () => {
      gsap.killTweensOf([
        navbarRef.current,
        logoRef.current,
        desktopLinksRef.current?.children,
        mobileMenuRef.current,
        overlayRef.current
      ]);
    };
  }, []);

  // Mobile menu animations
  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      });
      
      // Animate mobile menu items
      gsap.from(mobileMenuRef.current.querySelectorAll('a'), {
        x: 30,
        opacity: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.3,
        ease: "power2.out"
      });

      // Animate overlay
      gsap.to(overlayRef.current, {
        opacity: 0.7,
        duration: 0.3
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3
      });
    }
  }, [mobileMenuOpen]);

  // Dropdown animations
  const animateDropdown = (index, open) => {
    const dropdown = dropdownMenusRef.current[index];
    if (dropdown) {
      gsap.to(dropdown, {
        height: open ? 'auto' : 0,
        opacity: open ? 1 : 0,
        duration: 0.3,
        ease: "power2.inOut",
        onStart: () => {
          if (open) dropdown.style.display = 'block';
        },
        onComplete: () => {
          if (!open) dropdown.style.display = 'none';
        }
      });
    }
  };

  // Mobile dropdown animations
  const animateMobileDropdown = (index, open) => {
    const dropdown = mobileDropdownsRef.current[index];
    if (dropdown) {
      gsap.to(dropdown, {
        height: open ? dropdown.scrollHeight : 0,
        duration: 0.3,
        ease: "power2.inOut"
      });
    }
  };



  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setMobileSwingKitOpen(false);
      setMobileComponentsOpen(false);
    }
  };

  

  // Toggle mobile menu
  


  const toggleMobileSwingKit = () => {
    setMobileSwingKitOpen(!mobileSwingKitOpen);
    animateMobileDropdown(0, !mobileSwingKitOpen);
  };

  const toggleMobileComponents = () => {
    setMobileComponentsOpen(!mobileComponentsOpen);
    animateMobileDropdown(1, !mobileComponentsOpen);
  };

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileSwingKitOpen(false);
    setMobileComponentsOpen(false);
  };

  // Handle dropdown hover states
  const handleDropdownEnter = (index) => {
    animateDropdown(index, true);
  };

  const handleDropdownLeave = (index) => {
    animateDropdown(index, false);
  };
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <nav
      ref={navbarRef}
      className={`navbar fixed z-50 w-full px-6 py-4 flex items-center justify-between shadow-md transition-colors duration-300  ${
          darkMode
            ? 'bg-[var(--dark-navbar-bg)] text-[white] transition-colors duration-300'
            : 'bg-[var(--light-navbar-bg)] text-[var(--color-text)] transition-colors duration-300'
        }`}
    >
      {/* Logo */}
      <Link to='/' ref={logoRef} className="focus:outline-none ">
        <img
          src='../src/assets/gradient-logo.png'
          alt='Logo'
          className='w-[125px] h-auto transform hover:scale-105 transition-transform duration-300'
        />
      </Link>

      {/* Desktop Navigation */}
      <div ref={desktopLinksRef} className='hidden md:flex items-center ml-[5vw]'>
        <div className='flex space-x-8'>
          {/* Docs Link */}
          <Link 
            to='/docs' 
            className={`relative group px-2 py-1 font-medium hover:text-[var(--dark-nav-hover)]`}
          >
            Docs
            <span className="absolute bottom-0 left-0 w-0 h-0.5  group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          {/* SwingKit Dropdown */}
          <div 
            className='group relative'
            onMouseEnter={() => handleDropdownEnter(0)}
            onMouseLeave={() => handleDropdownLeave(0)}
          >
            <button className={`flex items-center px-2 py-1 font-medium group hover:text-[var(--dark-nav-hover)]`}>
              SwingKit
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 ml-1 transition-transform duration-200 group-hover:rotate-180'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
              </svg>
            </button>
            <div
              ref={el => dropdownMenusRef.current[0] = el}
              className={`absolute left-0 mt-2 w-50 rounded-md shadow-lg overflow-hidden z-50 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
              style={{ height: 0, opacity: 0, display: 'none' }}
            >
              <Link
                to='/swingkit/gradients'
                className={`block px-4 py-2 transition-all duration-200 transform hover:translate-x-2 ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Gradients
              </Link>
              <Link
                to='/swingkit/animated-gradients'
                className={`block px-4 py-2 transition-all duration-200 transform hover:translate-x-2 ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Animated Gradients
              </Link>
              <Link
                to='/swingkit/text-gradients'
                className={`block px-4 py-2 transition-all duration-200 transform hover:translate-x-2 ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Text Gradient
              </Link>
            </div>
            </div>
         

          {/* Components Dropdown */}
          <div 
            className='group relative'
            onMouseEnter={() => handleDropdownEnter(1)}
            onMouseLeave={() => handleDropdownLeave(1)}
          >
            <button className={`flex items-center px-2 py-1 font-medium group hover:text-[var(--dark-nav-hover)]`}>
              Components
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 ml-1 transition-transform duration-200 group-hover:rotate-180'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
              </svg>
            </button>
            <div
              ref={el => dropdownMenusRef.current[1] = el}
              className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg   z-50 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
              style={{ height: 0, opacity: 0, display: 'none' }}
            >
              <Link
                to='/components/accordion'
                className={`block px-4 py-2 transition-all duration-200 transform hover:translate-x-2 ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Accordions
              </Link>
              <Link
                to='/components/button'
                className={`block px-4 py-2 transition-all duration-200 transform hover:translate-x-2 ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Buttons
              </Link>
              <Link
                to='/components/card'
                className={`block px-4 py-2 transition-all duration-200 transform hover:translate-x-2 ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Cards
              </Link>
              <Link
                to='/components/carousel'
                className={`block px-4 py-2 transition-all duration-200 transform hover:translate-x-2 ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Carousel
              </Link>
              <Link
                to='/components/call-to-action'
                className={`block px-4 py-2 transition-all duration-200 transform hover:translate-x-2 ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                CTA (Call to Action)
              </Link>
              <Link
                to='/components/feature'
                className={`block px-4 py-2 transition-all duration-200 transform hover:translate-x-2 ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Feature
              </Link>
              <Link
                to='/components/footer'
                className={`block px-4 py-2 transition-all duration-200 transform hover:translate-x-2 ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Footer
              </Link>
              <Link
                to='/components/hero'
                className={`block px-4 py-2 transition-all duration-200 transform hover:translate-x-2 ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Hero section
              </Link>
              <Link
                to='/components/image-gallery'
                className={`block px-4 py-2 transition-all duration-200 transform hover:translate-x-2 ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Image Gallery
              </Link>
              <Link
                to='/components/navbar'
                className={`block px-4 py-2 transition-all duration-200 transform hover:translate-x-2 ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Navbar
              </Link>
              <Link
                to='/components/panto-grid'
                className={`block px-4 py-2 transition-all duration-200 transform hover:translate-x-2 ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Panto-grid
              </Link>
              <Link
                to='/components/popups'
                className={`block px-4 py-2 transition-all duration-200 transform hover:translate-x-2 ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Pop Ups
              </Link>
              <Link
                to='/components/pricing'
                className={`block px-4 py-2 transition-all duration-200 transform hover:translate-x-2 ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Pricing
              </Link>
              <Link
                to='/components/tabs'
                className={`block px-4 py-2 transition-all duration-200 transform hover:translate-x-2 ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Tabs
              </Link>
              <Link
                to='/components/testimonials'
                className={`block px-4 py-2 transition-all duration-200 transform hover:translate-x-2 ${
                  darkMode 
                    ? 'text-gray-200 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Testimonials
              </Link>

            </div>
          </div>
        </div>
        

        {/* Divider */}
        <div className='px-4 h-[20px] border-r border-gray-300 dark:border-gray-600 opacity-50 mx-4'></div>

        {/* Theme Toggle and CTA */}
        <div className='flex items-center space-x-4'>
          <button
            onClick={toggleTheme}
            className={`px-3 py-2 rounded-full hidden sm:block transition-all duration-300 hover:scale-110 focus:outline-none ${
              darkMode
                ? 'text-yellow-300 hover:bg-gray-700'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Toggle dark mode"
          >
            <i className={`ri-${darkMode ? 'sun' : 'moon'}-line ${darkMode ? 'text-white': 'text-black'} text-xl `}></i>
          </button>
          <Link
            to='/docs'
            className='swing-ocean-gradient hidden sm:block text-white px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-medium'
          >
            Get Started <i className='ri-arrow-right-s-line'></i>
          </Link>
        </div>
        </div>
      

      {/* Mobile Navigation Toggle */}
      <div className='flex items-center space-x-4 md:hidden '>
        <button
          onClick={toggleTheme}
          className={`px-3 py-2 rounded-full focus:outline-none ${
            darkMode ? 'text-white' : 'text-black'
          } `}
          aria-label="Toggle dark mode"
        >
          <i className={`ri-${darkMode ? 'sun' : 'moon'}-line text-xl `}></i>
        </button>
        <button
          onClick={toggleMobileMenu}
          className={`  p-2 ${
            darkMode ? 'text-white' : 'text-black'
          }   focus:outline-none`}
          aria-label="Toggle menu"
        >
          <i className='ri-menu-line text-3xl '></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-screen w-64 z-50 px-4 py-6 ${
          darkMode
            ? 'bg-gray-900 text-gray-100'
            : 'bg-white text-gray-800'
        }`}
        style={{ transform: 'translateX(100%)', opacity: 0 }}
      >
        <div className='flex flex-col h-full relative'>
          {/* Close Button */}
          <div className='flex justify-end mb-6'>
            <button 
              className={`p-2 rounded-full focus:outline-none ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
              }`}
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <i className='ri-close-line text-2xl'></i>
            </button>
          </div>

          {/* Menu Content */}
          <div className='overflow-y-auto flex-1 pb-20 scrollbar-hidden'>
            <Link
              to='/docs'
              onClick={handleMobileLinkClick}
              className={`block px-6 py-3 rounded-lg mb-2 transition-colors ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              Docs
            </Link>
            
            {/* Mobile SwingKit Dropdown */}
            <div className='mb-2'>
              <button
                className={`flex items-center justify-between w-full px-6 py-3 rounded-lg transition-colors ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
                onClick={toggleMobileSwingKit}
              >
                <span>SwingKit</span>
                <i
                  className={`transition-transform duration-300 ${
                    mobileSwingKitOpen
                      ? 'ri-arrow-up-s-line'
                      : 'ri-arrow-down-s-line'
                  }`}
                ></i>
              </button>
              <div
                ref={el => mobileDropdownsRef.current[0] = el}
                className={`pl-6 overflow-hidden`}
                style={{ height: 0 }}
              >
                <Link
                  to='/swingkit/gradients'
                  onClick={handleMobileLinkClick}
                  className={`block px-4 py-3 rounded-lg my-1 transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  Gradients
                </Link>
                <Link
                  to='/swingkit/animated-gradients'
                  onClick={handleMobileLinkClick}
                  className={`block px-4 py-3 rounded-lg my-1 transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  Animated Gradients
                </Link>
                <Link
                  to='/swingkit/text-gradients'
                  onClick={handleMobileLinkClick}
                  className={`block px-4 py-3 rounded-lg my-1 transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  Text Gradient
                </Link>
              </div>
            </div>

            {/* Mobile Components Dropdown */}
            <div className='mb-2'>
              <button
                className={`flex items-center justify-between w-full px-6 py-3 rounded-lg transition-colors ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
                onClick={toggleMobileComponents}
              >
                <span>Components</span>
                <i
                  className={`transition-transform duration-300 ${
                    mobileComponentsOpen
                      ? 'ri-arrow-up-s-line'
                      : 'ri-arrow-down-s-line'
                  }`}
                ></i>
              </button>
              <div
                ref={el => mobileDropdownsRef.current[1] = el}
                className={`pl-6 overflow-hidden`}
                style={{ height: 0 }}
              >
                <Link
                  to='/components/accordion'
                  onClick={handleMobileLinkClick}
                  className={`block px-4 py-3 rounded-lg my-1 transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  Accordions
                </Link>
                <Link
                  to='/components/button'
                  onClick={handleMobileLinkClick}
                  className={`block px-4 py-3 rounded-lg my-1 transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  Buttons
                </Link>
                <Link
                  to='/components/carousel'
                  onClick={handleMobileLinkClick}
                  className={`block px-4 py-3 rounded-lg my-1 transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  Carousel
                </Link>
                <Link
                  to='/components/call-to-action'
                  onClick={handleMobileLinkClick}
                  className={`block px-4 py-3 rounded-lg my-1 transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  CTA (Call to Action)
                </Link>
                <Link
                  to='/components/feature'
                  onClick={handleMobileLinkClick}
                  className={`block px-4 py-3 rounded-lg my-1 transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  Feature
                </Link>
                <Link
                  to='/components/footer'
                  onClick={handleMobileLinkClick}
                  className={`block px-4 py-3 rounded-lg my-1 transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  Footer
                </Link>
                <Link
                  to='/components/hero'
                  onClick={handleMobileLinkClick}
                  className={`block px-4 py-3 rounded-lg my-1 transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  Hero Section
                </Link>
                <Link
                  to='/components/image-gallery'
                  onClick={handleMobileLinkClick}
                  className={`block px-4 py-3 rounded-lg my-1 transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  Image Gallery
                </Link>
                <Link
                  to='/components/navbar'
                  onClick={handleMobileLinkClick}
                  className={`block px-4 py-3 rounded-lg my-1 transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  Navbar
                </Link>
                <Link
                  to='/components/panto-grid'
                  onClick={handleMobileLinkClick}
                  className={`block px-4 py-3 rounded-lg my-1 transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  Panto-grid
                </Link>
                <Link
                  to='/components/popups'
                  onClick={handleMobileLinkClick}
                  className={`block px-4 py-3 rounded-lg my-1 transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  Pop Ups
                </Link>
                <Link
                  to='/components/pricing'
                  onClick={handleMobileLinkClick}
                  className={`block px-4 py-3 rounded-lg my-1 transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  Pricing
                </Link>
                <Link
                  to='/components/tabs'
                  onClick={handleMobileLinkClick}
                  className={`block px-4 py-3 rounded-lg my-1 transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  Tabs
                </Link>
                <Link
                  to='/components/testimonials'
                  onClick={handleMobileLinkClick}
                  className={`block px-4 py-3 rounded-lg my-1 transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  Testimonials
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/70  z-40 h-[100vh] opacity-0 pointer-events-none transition-opacity duration-300 md:hidden"
        onClick={toggleMobileMenu}
      />

    </nav>
  );
}

export default Navbar;