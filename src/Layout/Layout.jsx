import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Home from '../pages/Home';
import Docs from './Docs';
import SwingKit from './SwingKit';
import Components from './Components';
import Form from './Form';
import Sidebar from '../components/Sidebar';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { darkMode } = useTheme();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [sidebarOpen]);

  return (
    <div
      className={`w-full pt-16 overflow-x-hidden transition-colors duration-300 ease-in-out ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      {!isHome && (
        <div className="md:hidden flex items-center justify-between p-4 transition-all duration-300">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <X size={28} /> : <Menu size={24} />}
          </button>
        </div>
      )}

      <div className="flex w-full relative">
        {!isHome && (
          <>
            {/* Desktop Sidebar */}
            <div className="hidden md:block w-[280px] py-3 transition-all duration-300 flex-shrink-0">
              <Sidebar />
            </div>

            {/* Mobile Sidebar */}
            <div
            
              className={`md:hidden fixed top-18 left-0 w-[280px] h-[calc(100vh-64px)] z-50 transition-all duration-300 transform shadow-md overflow-y-auto ${
                darkMode
                  ? 'bg-[var(--dark-navbar-bg)] text-[var(--color-text-dark)]'
                  : 'bg-white text-black' // Change bg-[var(--light-navbar-bg)] to bg-white
              } ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}


            >
              <div className="flex justify-end items-center p-4">
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close sidebar"
                >
                  <X size={24} />
                </button>
              </div>
              <Sidebar />
            </div>

            {/* Backdrop Overlay - Updated with blur effect */}
            <div
              
             className={`fixed inset-0 z-40 bg-black transition-all duration-300 ${
             sidebarOpen ? 'opacity-70 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
              onClick={toggleSidebar}
              aria-hidden="true"
            />
          </>
        )}

        <div className="flex-1 min-h-screen">
          <div
            className={`w-full ${
              isHome
                ? '' // No padding on home
                : 'px-[0.875rem] ' // Padding on other pages
            }`}
          >
            <div
              className={`${
                isHome
                  ? '' // No max width on home
                  : 'max-w-screen-xl mx-auto w-full' // Add gap + wrap on others
              }`}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/docs/*" element={<Docs />} />
                <Route path="/components/*" element={<Components />} />
                <Route path="/swingkit/*" element={<SwingKit />} />
                <Route path="/forms/*" element={<Form />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;