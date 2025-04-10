import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router';
import '../docs/SwingKit/Gradients/style.css';

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleMobileServices = () => setMobileServicesOpen(!mobileServicesOpen);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav
      className={`navbar fixed z-50 mb-34 w-full px-6 py-4 flex items-center justify-between shadow-[var(--shadow-default)] transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-navbar-bg)] text-[var(--color-text-dark)] '
          : 'bg-[var(--light-navbar-bg)] text-[var(--color-text)] '
      }`}
    >
      <Link to='/'>
        <img
          src='../src/assets/gradient-logo.png'
          alt='Logo'
          className='w-[125px] h-auto'
        />
      </Link>

      <div className='hidden md:flex custom-desktop items-center'>
        <div className='flex space-x-8'>
          <Link to='/' className='hover:text-[var(--dark-nav-hover)]'>
            Home
          </Link>
          <Link to='/docs' className='hover:text-[var(--dark-nav-hover)]'>
          Docs
          </Link>
          <div className='group relative'>
            <span className='flex items-center cursor-pointer hover:text-[var(--dark-nav-hover)]'>
            SwingKit

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 ml-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </span>
            <div
              className={`absolute left-0 py-2 w-40 rounded-md hidden group-hover:!block z-50 shadow-md ${
                darkMode ? 'bg-[var(--dark-bg)]' : 'bg-white'
              }`}
            >
              <Link
                to='/swingkit/gradients'
                className='block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition'
              >
                Gradients
              </Link>
              <Link
                to='/swingkit/animated-gradients'
                className='block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition'
              >
                Animated Gradients
              </Link>
              <Link
                to='/swingkit/transitions'
                className='block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition'
              >
                Transitions
              </Link>
            </div>
          </div>
          <div className='group relative'>
  <span className='flex items-center cursor-pointer hover:text-[var(--dark-nav-hover)]'>
    Components
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-4 w-4 ml-1'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M19 9l-7 7-7-7'
      />
    </svg>
  </span>
  <div
    className={`absolute left-0 py-2 w-56 rounded-md hidden group-hover:!block z-50 shadow-md ${
      darkMode ? 'bg-[var(--dark-bg)]' : 'bg-white'
    }`}
  >
    <Link to='/components/accordion' className='block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition'>Accordions</Link>
    <Link to='/components/button' className='block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition'>Buttons</Link>
    <Link to='/components/card' className='block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition'>Cards</Link>
    <Link to='/components/carousel' className='block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition'>Carousel</Link>
    <Link to='/components/call-to-action' className='block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition'>CTA (Call to Action)</Link>
    <Link to='/components/footer' className='block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition'>Footer</Link>
    <Link to='/components/hero' className='block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition'>Hero section</Link>
    <Link to='/components/image-gallery' className='block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition'>Image Gallery</Link>
    <Link to='/components/navbar' className='block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition'>Navbar</Link>
    <Link to='/components/panto-grid' className='block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition'>Panto-grid</Link>
    <Link to='/components/popups' className='block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition'>Pop Ups</Link>
    <Link to='/components/tabs' className='block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition'>Tabs</Link>
    <Link to='/components/testimonials' className='block px-4 py-2 hover:text-[var(--dark-nav-hover)] transition'>Testimonials</Link>
  </div>
</div>

          <Link to='/contact' className='hover:text-[var(--dark-nav-hover)]'>
            Contact
          </Link>
        </div>

        <div className='flex items-center space-x-4 pl-4'>
          <button
            onClick={toggleTheme}
            className='text-xl px-2 py-2 transition'
          >
            <i className={`ri-${darkMode ? 'sun' : 'moon'}-fill`}></i>
          </button>
          <Link
            to='/get-started'
            className='swing-ocean-gradient hover:swing-ocean-gradient text-white px-6 py-2 rounded-md'
          >
            Get Started
          </Link>
        </div>
      </div>

{/* Mobile NavBar */}

      <div className='flex custom-mobile items-center space-x-4 md:hidden'>
        <button
          onClick={toggleTheme}
          className='theme-toggle px-3 py-2 rounded-md'
        >
          <i className={`ri-${darkMode ? 'sun' : 'moon'}-fill`}></i>
        </button>
        <button
          onClick={toggleMobileMenu}
          className='swing-ocean-gradient hover:swing-ocean-gradient rounded-md px-2 py-2'
        >
          <i className='ri-menu-line px-2 py-2 text-xl text-white'></i>
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-svh w-64 z-50 px-2 py-4 pr-4 transform transition-all duration-300 ${
          darkMode
            ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
            : 'bg-[var(--light-bg)] text-[var(--color-text)]'
        } ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex flex-col w-full'>
          <div className='flex justify-end mb-8'>
            <button className='focus:outline-none' onClick={toggleMobileMenu}>
              <i className='ri-close-line text-2xl'></i>
            </button>
          </div>
          <Link
            to='/'
            onClick={handleMobileLinkClick}
            className='block px-6 py-3 hover:text-[var(--dark-nav-hover)] transition'
          >
            Home
          </Link>
          <Link
            to='/about'
            onClick={handleMobileLinkClick}
            className='block px-6 py-3 hover:text-[var(--dark-nav-hover)] transition'
          >
            About
          </Link>
          <div className='relative'>
            <span
              className='flex items-center justify-between px-6 py-3 hover:text-[var(--dark-nav-hover)] transition cursor-pointer'
              onClick={toggleMobileServices}
            >
              Services
              <i
                className={`transition-transform duration-300 ${
                  mobileServicesOpen
                    ? 'ri-arrow-up-s-line transform rotate-180'
                    : 'ri-arrow-down-s-line'
                }`}
              ></i>
            </span>
            <div
              className={`pl-8 overflow-hidden transition-all duration-300 ${
                mobileServicesOpen ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <Link
                to='/services/1'
                onClick={handleMobileLinkClick}
                className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
              >
                Service 1
              </Link>
              <Link
                to='/services/2'
                onClick={handleMobileLinkClick}
                className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
              >
                Service 2
              </Link>
              <Link
                to='/services/3'
                onClick={handleMobileLinkClick}
                className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'
              >
                Service 3
              </Link>
            </div>
          </div>
          <Link
            to='/blogs'
            onClick={handleMobileLinkClick}
            className='block px-6 py-3 hover:text-[var(--dark-nav-hover)] transition'
          >
            Blogs
          </Link>

          <Link
            to='/docs'
            onClick={handleMobileLinkClick}
            className='block mx-6 my-2 swing-ocean-gradient hover:swing-ocean-gradient text-white px-6 py-2 rounded-md text-center mt-auto transition'
          >
            Get Started
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className={`fixed custom-mobile inset-0 ${
            darkMode
              ? 'bg-[var(--dark-navbar-bg)]'
              : 'bg-[var(--light-navbar-bg)]'
          } bg-opacity-50 z-40 md:hidden transition-opacity duration-300`}
          onClick={toggleMobileMenu}
        />
      )}
    </nav>
  );
}

export default Navbar;
