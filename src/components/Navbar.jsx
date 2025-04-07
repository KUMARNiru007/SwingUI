import React, { use, useEffect, useState } from 'react';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const dropdown_menu = document.querySelector('.items');
    const mobile_dropdown = document.querySelector('.mobile');
    if (darkMode) {
      dropdown_menu.classList.remove('bg-[var(--light-dropdown-bg)]');
      dropdown_menu.classList.add('bg-[var(--dark-dropdown-bg)]');

      mobile_dropdown.classList.remove('bg-[var(--light-navbar-bg)]');
      mobile_dropdown.classList.add('bg-[var(--dark-navbar-bg)]');

      navbar.classList.remove('bg-[var(--light-navbar-bg)]');
      navbar.classList.add('bg-[var(--dark-navbar-bg)]');

      document.body.classList.remove(
        'bg-[var(--light-bg)]',
        'text-[var(--color-text)]',
      );
      document.body.classList.add(
        'bg-[var(--dark-bg)]',
        'text-[var(--color-text-dark)]',
      );
    } else {
      dropdown_menu.classList.remove('bg-[var(--dark-dropdown-bg)]');
      dropdown_menu.classList.add('bg-[var(--light-dropdown-bg)]');

      mobile_dropdown.classList.remove('bg-[var(--dark-navbar-bg)]');
      mobile_dropdown.classList.add('bg-[var(--light-navbar-bg)]');

      navbar.classList.remove('bg-[var(--dark-navbar-bg)]');
      navbar.classList.add('bg-[var(--light-navbar-bg)]');
      document.body.classList.remove(
        'bg-[var(--dark-bg)]',
        'text-[var(--color-text-dark)]',
      );
      document.body.classList.add(
        'bg-[var(--light-bg)]',
        'text-[var(--color-text)]',
      );
    }
  }, [darkMode, mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  return (
    <nav className='navbar sticky z-50 w-full px-6 py-4 flex items-center justify-between shadow-[var(--shadow-default)]'>
      <a href='/'>
        <img
          src='../src/assets/gradient-logo.png'
          alt='Logo'
          className='w-[125px] h-auto'
        />
      </a>

      {/* Desktop menu */}
      <div className='hidden md:flex custom-desktop items-center'>
        <div className='flex space-x-8'>
          <a href='#' className='hover:text-blue-500 '>
            Home
          </a>
          <a href='#' className='hover:text-blue-500'>
            About
          </a>
          <div className='group relative'>
            <a href='#' className='flex items-center hover:text-blue-500'>
              Services
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
            </a>
            <div className='items absolute left-0 py-2 w-40 rounded-md hidden group-hover:!block z-50 shadow-md'>
              <a
                href='#'
                className='block px-4 py-2 hover:text-blue-400 hover:bg-gray-200 transition duration-300 ease-in-out'
              >
                Service 1
              </a>
              <a
                href='#'
                className='block px-4 py-2 hover:text-blue-400 hover:bg-gray-200 transition duration-300 ease-in-out'
              >
                Service 2
              </a>
              <a
                href='#'
                className='block px-4 py-2 hover:text-blue-400 hover:bg-gray-200 transition duration-300 ease-in-out'
              >
                Service 3
              </a>
            </div>
          </div>
          <a href='#' className='hover:text-blue-500'>
            Blogs
          </a>
          <a href='#' className='hover:text-blue-500'>
            Contact
          </a>
        </div>
        <div className='px-4'></div>
        <div className='flex items-center space-x-4 pl-4'>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className='text-xl px-2 py-2 transition duration-300 ease-in-out'
          >
            <i className={`ri-${darkMode ? 'sun' : 'moon'}-fill`}></i>
          </button>
          <a
            href='#'
            className='swing-ocean-gradient hover:swing-ocean-gradient text-white px-6 py-2 rounded-md'
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Mobile menu buttons */}
      <div className='hidden custom-mobile items-center space-x-4 md:hidden'>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className='theme-toggle px-3 py-2 rounded-md focus:outline-none'
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
        className={`mobile fixed top-0 right-0 h-svh w-64 shadow-md custom-mobile z-50 px-2 py-4 pr-4 transform transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='mobile-menu-content flex flex-col w-full'>
          <div className='mobile-menu-header flex justify-end mb-8'>
            <button className='focus:outline-none' onClick={toggleMobileMenu}>
              <i className='ri-close-line text-2xl'></i>
            </button>
          </div>
          <a
            href='#'
            className='block px-6 py-3 hover:text-blue-500 transition duration-200'
          >
            Home
          </a>
          <a
            href='#'
            className='block px-6 py-3 hover:text-blue-500 transition duration-200'
          >
            About
          </a>
          <div className='relative dropdown'>
            <a
              href='#'
              className='flex items-center justify-between px-6 py-3 hover:text-blue-500 transition duration-200'
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
            </a>
            <div
              className={`pl-8 overflow-hidden transition-all duration-300 ease-in-out ${
                mobileServicesOpen ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <a
                href='#'
                className='block px-2 py-3 hover:text-blue-500 transition duration-200'
              >
                Service 1
              </a>
              <a
                href='#'
                className='block px-2 py-3 hover:text-blue-500 transition duration-200'
              >
                Service 2
              </a>
              <a
                href='#'
                className='block px-2 py-3 hover:text-blue-500 transition duration-200'
              >
                Service 3
              </a>
            </div>
          </div>
          <a
            href='#'
            className='block px-6 py-3 hover:text-blue-500 transition duration-200'
          >
            Blogs
          </a>
          <a
            href='#'
            className='block px-6 py-3 hover:text-blue-500 transition duration-200'
          >
            Contact
          </a>
          <a
            href='#'
            className='block mx-6 my-2 swing-ocean-gradient hover:swing-ocean-gradient text-white px-6 py-2 rounded-md text-center mt-auto transition duration-200'
          >
            Get Started
          </a>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={toggleMobileMenu}
        />
      )}
    </nav>
  );
}

export default Navbar;
