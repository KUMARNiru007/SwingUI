import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Docs from './Docs';
import SwingKit from './SwingKit';
import Components from './Components';
import Form from './Form';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../context/ThemeContext';
import MobileTopBarToggle from '../components/MobileTopBarToggle';
import { X } from 'lucide-react';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { darkMode } = useTheme();

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  // Close the sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  // Manage body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [sidebarOpen]);

  return (
    <div
      className={`pt-16 transition-colors duration-300 ease-in-out ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      {/* <MobileTopBarToggle sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}

      <div className="flex w-full relative">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-[280px] py-3 transition-all duration-300 flex-shrink-0">
          <Sidebar />
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`md:hidden fixed top-18 left-0 w-[280px] h-[calc(100vh-64px)] z-50 transition-all duration-300 transform shadow-md overflow-y-auto ${
            darkMode
              ? 'bg-[var(--dark-navbar-bg)] text-[var(--color-text-dark)]'
              : 'bg-white text-black'
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

        {/* Backdrop Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-black transition-all duration-300 ${
            sidebarOpen
              ? 'opacity-70 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleSidebar}
          aria-hidden="true"
        />

        {/* Main Content */}
        <div>
          <Routes>
            <Route path="docs/*" element={<Docs />} />
            <Route path="components/*" element={<Components />} />
            <Route path="swingkit/*" element={<SwingKit />} />
            <Route path="forms/*" element={<Form />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Layout;
