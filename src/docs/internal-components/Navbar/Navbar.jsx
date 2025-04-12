import React, { useState, useEffect } from 'react';
import PreviewCodeBtn from '../../../components/previewcodebtn';
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
        <!-- Desktop Navigation - only visible on large screens now (lg) -->
        <div class="hidden lg:flex items-center space-x-8 mx-8">
          <a href="#" class="text-gray-900 hover:text-gray-600 px-3 py-2 font-medium">Home</a>
          <a href="#" class="text-gray-900 hover:text-gray-600 px-3 py-2 font-medium">About</a>
          <div class="relative group">
            <button class="text-gray-900 group-hover:text-gray-600 px-3 py-2 font-medium inline-flex items-center">
              Services
              <i class="ri-arrow-down-s-line ml-1"></i>
            </button>
              <div class="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ">
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
        <div class="hidden lg:flex items-center space-x-4">
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
      
      <div class="lg:hidden flex items-center">
        <button
          id="swing-mobile-menu-button"
          class="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <i class="ri-menu-line text-2xl"></i>
        </button>
      </div>
    </div>
  </div>

  <div id="swing-mobile-menu" class="hidden lg:hidden">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <a
        href="#"
        class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
      >
        Home
      </a>
      <a
        href="#"
        class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
      >
        About
      </a>
      <button
        id="services-dropdown-button"
        class="flex justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
      >
        Services
        <i class="ri-arrow-down-s-line"></i>
      </button>
      <div id="swing-services-dropdown" class="hidden pl-4">
        <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
        >
          Service 1
        </a>
        <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
        >
          Service 2
        </a>
        <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
        >
          Service 3
        </a>
      </div>
      <a
        href="#"
        class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
      >
        Blogs
      </a>
      <a
        href="#"
        class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
      >
        Contact
      </a>

      
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

      if (mobileMenuButton && mobileMenu) {
        const mobileHandler = () => mobileMenu.classList.toggle('hidden');
        mobileMenuButton.addEventListener('click', mobileHandler);
        return () =>
          mobileMenuButton.removeEventListener('click', mobileHandler);
      }

      if (servicesDropdownButton && servicesDropdown) {
        const servicesHandler = () =>
          servicesDropdown.classList.toggle('hidden');
        servicesDropdownButton.addEventListener('click', servicesHandler);
        return () =>
          servicesDropdownButton.removeEventListener('click', servicesHandler);
      }
    }
  }, [showCode]);

  return (
    <div
      className={`w-full transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      } p-4`}
    >
      <h2 className='text-3xl font-bold mb-2'>Responsive Navbar</h2>
      <p className='mb-6'>
        This Navbar component replicates the provided markup, with the LOGO now
        visible in both light and dark modes.
      </p>

      <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

      {!showCode && (
        <div className='flex justify-center items-center h-40 bg-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-md'>
          {/* Render live preview */}
          <div
            className='w-full'
            dangerouslySetInnerHTML={{ __html: htmlCssCode }}
          />
        </div>
      )}

      {showCode && (
        <div className='w-full overflow-x-auto my-4 rounded-xl'>
          <CodeBlock language='html' code={htmlCssCode} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
