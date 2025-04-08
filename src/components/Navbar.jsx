import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router';

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleMobileServices = () => setMobileServicesOpen(!mobileServicesOpen);

  return (
    <nav
      className={`navbar sticky z-50 w-full px-6 py-4 flex items-center justify-between shadow-[var(--shadow-default)] ${
        darkMode
          ? 'bg-[var(--dark-navbar-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-navbar-bg)] text-[var(--color-text)]'
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
          <Link to='/' className='hover:text-[var(--dark-nav-hover)]'>Home</Link>
          <Link to='/about' className='hover:text-[var(--dark-nav-hover)]'>About</Link>
          <div className='group relative'>
            <span className='flex items-center cursor-pointer hover:text-[var(--dark-nav-hover)]'>
              Services
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 ml-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
              </svg>
            </span>
            <div
              className={`absolute left-0 py-2 w-40 rounded-md hidden group-hover:!block z-50 shadow-md ${
                darkMode ? 'bg-[var(--dark-bg)]' : 'bg-white'
              }`}
            >
              <Link to='/services/1' className='block px-4 py-2 hover:text-[var(--dark-nav-hover)]  transition'>Service 1</Link>
              <Link to='/services/2' className='block px-4 py-2 hover:text-[var(--dark-nav-hover)]  transition'>Service 2</Link>
              <Link to='/services/3' className='block px-4 py-2 hover:text-[var(--dark-nav-hover)]  transition'>Service 3</Link>
            </div>
          </div>
          <Link to='/blogs' className='hover:text-[var(--dark-nav-hover)]'>Blogs</Link>
          <Link to='/contact' className='hover:text-[var(--dark-nav-hover)]'>Contact</Link>
        </div>

        <div className='flex items-center space-x-4 pl-4'>
          <button onClick={toggleTheme} className='text-xl px-2 py-2 transition'>
            <i className={`ri-${darkMode ? 'sun' : 'moon'}-fill`}></i>
          </button>
          <Link to='/get-started' className='swing-ocean-gradient hover:swing-ocean-gradient text-white px-6 py-2 rounded-md'>Get Started</Link>
        </div>
      </div>

      <div className='flex custom-mobile items-center space-x-4 md:hidden'>
        <button onClick={toggleTheme} className='theme-toggle px-3 py-2 rounded-md'>
          <i className={`ri-${darkMode ? 'sun' : 'moon'}-fill`}></i>
        </button>
        <button onClick={toggleMobileMenu} className='swing-ocean-gradient hover:swing-ocean-gradient rounded-md px-2 py-2'>
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
          <Link to='/' className='block px-6 py-3 hover:text-[var(--dark-nav-hover)] transition'>Home</Link>
          <Link to='/about' className='block px-6 py-3 hover:text-[var(--dark-nav-hover)] transition'>About</Link>
          <div className='relative'>
            <span
              className='flex items-center justify-between px-6 py-3 hover:text-[var(--dark-nav-hover)] transition cursor-pointer'
              onClick={toggleMobileServices}
            >
              Services
              <i className={`transition-transform duration-300 ${mobileServicesOpen ? 'ri-arrow-up-s-line transform rotate-180' : 'ri-arrow-down-s-line'}`}></i>
            </span>
            <div className={`pl-8 overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-40' : 'max-h-0'}`}>
              <Link to='/services/1' className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'>Service 1</Link>
              <Link to='/services/2' className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'>Service 2</Link>
              <Link to='/services/3' className='block px-2 py-3 hover:text-[var(--dark-nav-hover)] transition'>Service 3</Link>
            </div>
          </div>
          <Link to='/blogs' className='block px-6 py-3 hover:text-[var(--dark-nav-hover)] transition'>Blogs</Link>
          <Link to='/contact' className='block px-6 py-3 hover:text-[var(--dark-nav-hover)] transition'>Contact</Link>
          <Link to='/get-started' className='block mx-6 my-2 swing-ocean-gradient hover:swing-ocean-gradient text-white px-6 py-2 rounded-md text-center mt-auto transition'>Get Started</Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className='fixed custom-mobile inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300'
          onClick={toggleMobileMenu}
        />
      )}
    </nav>
  );
}

export default Navbar;
