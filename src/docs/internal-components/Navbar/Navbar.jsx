import React, { useState, useEffect } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';

const Navbar = () => {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();

  const htmlCssCode = `

<nav class="bg-white shadow-sm m-4">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <a href="#" class="text-4xl font-bold text-gray-900">LOGO</a>
        </div>
      </div>

      <div class="flex">
        <!-- Desktop Navigation -->
        <div class="hidden xl:flex items-center space-x-8 mx-8">
          <a href="#" class="text-gray-900 hover:text-gray-600 px-3 py-2 font-medium">Home</a>
          <a href="#" class="text-gray-900 hover:text-gray-600 px-3 py-2 font-medium">About</a>
          <div class="relative">
            <button id="desktop-services-dropdown-button" class="text-gray-900 hover:text-gray-600 px-3 py-2 font-medium inline-flex items-center">
              Services
              <i class="ri-arrow-down-s-line ml-1"></i>
            </button>
            <!-- Click-based dropdown with absolute positioning -->
            <div id="desktop-services-dropdown" class="absolute z-50 left-1/2 transform -translate-x-1/2 top-full mt-2 w-48 rounded-md shadow-md bg-white hidden">
              <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 1</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 2</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 3</a>
              </div>
            </div>
          </div>
          <a href="#" class="text-gray-900 hover:text-gray-600 px-3 py-2 font-medium">Blogs</a>
          <a href="#" class="text-gray-900 hover:text-gray-600 px-3 py-2 font-medium">Contact</a>
        </div>

        <!-- Social Icons (Desktop) -->
        <div class="hidden xl:flex items-center space-x-4">
          <a href="#" class="text-gray-500 hover:text-gray-900">
            <i class="ri-facebook-fill text-xl"></i>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900">
            <i class="ri-instagram-line text-xl"></i>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900">
            <i class="ri-twitter-x-line text-xl"></i>
          </a>
        </div>
      </div>
      
      <div class="xl:hidden flex items-center">
        <button
          id="swing-mobile-menu-button"
          class="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <i class="ri-menu-line text-2xl"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div id="swing-mobile-menu" class="hidden xl:hidden">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Home</a>
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">About</a>
      <div class="relative">
        <button id="services-dropdown-button" class="flex justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
          Services
          <i class="ri-arrow-down-s-line"></i>
        </button>
        <div id="swing-services-dropdown" class="hidden pl-4">
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Service 1</a>
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Service 2</a>
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Service 3</a>
        </div>
      </div>
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Blogs</a>
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Contact</a>

      <div class="flex space-x-4 px-3 py-2">
        <a href="#" class="text-gray-500 hover:text-gray-900">
          <i class="ri-facebook-fill text-xl"></i>
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-900">
          <i class="ri-instagram-line text-xl"></i>
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-900">
          <i class="ri-twitter-x-line text-xl"></i>
        </a>
      </div>
    </div>
  </div>
</nav>
`;
  useEffect(() => {
    if (!showCode) {
      const mobileMenuButton = document.getElementById(
        'swing-mobile-menu-button',
      );
      const mobileMenu = document.getElementById('swing-mobile-menu');
      const servicesDropdownButton = document.getElementById(
        'services-dropdown-button',
      );
      const servicesDropdown = document.getElementById(
        'swing-services-dropdown',
      );
      const desktopButton = document.getElementById(
        'desktop-services-dropdown-button',
      );
      const desktopDropdown = document.getElementById(
        'desktop-services-dropdown',
      );
      const previewContainer = document.querySelector('.preview-container');

      const toggleMobileMenu = () => {
        mobileMenu?.classList.toggle('hidden');
      };

      const toggleMobileDropdown = (e) => {
        e.stopPropagation();
        servicesDropdown?.classList.toggle('hidden');
      };

      const toggleDesktopDropdown = (e) => {
        e.stopPropagation();
        desktopDropdown?.classList.toggle('hidden');
        if (desktopDropdown && !desktopDropdown.classList.contains('hidden')) {
          previewContainer?.classList.add('pb-30', 'pt-4');
        } else {
          previewContainer?.classList.remove('pb-30', 'pt-4');
        }
      };

      const closeAllDropdowns = () => {
        if (
          servicesDropdown &&
          !servicesDropdown.classList.contains('hidden')
        ) {
          servicesDropdown.classList.add('hidden');
        }
        if (desktopDropdown && !desktopDropdown.classList.contains('hidden')) {
          desktopDropdown.classList.add('hidden');
          previewContainer?.classList.remove('pb-30', 'pt-2');
        }
      };

      mobileMenuButton?.addEventListener('click', toggleMobileMenu);
      servicesDropdownButton?.addEventListener('click', toggleMobileDropdown);
      desktopButton?.addEventListener('click', toggleDesktopDropdown);
      document.addEventListener('click', closeAllDropdowns);

      return () => {
        mobileMenuButton?.removeEventListener('click', toggleMobileMenu);
        servicesDropdownButton?.removeEventListener(
          'click',
          toggleMobileDropdown,
        );
        desktopButton?.removeEventListener('click', toggleDesktopDropdown);
        document.removeEventListener('click', closeAllDropdowns);
      };
    }
  }, [showCode]);

  return (
    <div
      className={` max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      <h2 className='text-3xl sm:text-4xl font-bold pb-6 mt-8'> Navbar</h2>
      <p className='mb-10 sm:mb-16'>
        The Responsive Navbar component offers a dynamic, user-friendly
        navigation bar with light/dark mode support, mobile responsiveness, and
        interactive dropdowns, enhancing user experience across devices.
      </p>

      <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

      {!showCode && (
        <div className='flex justify-center items-center bg-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-md w-full preview-container'>
          <div
            className='w-full navbar-container'
            style={{
              width: '100%',
              maxWidth: '100%',
            }}
            dangerouslySetInnerHTML={{ __html: htmlCssCode }}
          />
        </div>
      )}

      {showCode && (
        <div className='w-full my-4 rounded-xl navbar-container'>
          <CodeBlock language='html' code={htmlCssCode} />
        </div>
      )}
      <hr
        className={`my-10 border-t ${
          darkMode ? 'border-gray-700 opacity-30' : 'border-gray-300 opacity-50'
        }`}
      />
    </div>
  );
};

export default Navbar;
