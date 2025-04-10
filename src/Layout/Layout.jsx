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
      className={`w-full  pt-16 overflow-x-hidden transition-colors duration-300 ease-in-out ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      {!isHome && (
        <div className="md:hidden flex items-center  justify-between p-4 transition-all duration-300">
          <button onClick={toggleSidebar}>
            {sidebarOpen ? <X size={28} /> : <Menu size={24} />}
          </button>
        </div>
      )}

      <div className="flex">
       
        {!isHome && (
          <>
            {/* Desktop  */}
            <div className="hidden md:block w-64 py-3 transition-all duration-300">
              <Sidebar />
            </div>

            {/* Mobile -slide-in */}
            <div
              className={`md:hidden fixed top-18 left-0  w-64 z-50 transition-all duration-300 transform shadow-md ${
                darkMode
                  ? 'bg-[var(--dark-navbar-bg)] text-[var(--color-text-dark)]'
                  : 'bg-[var(--light-navbar-bg)] text-black'
              } ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
              <div className="flex justify-end items-center p-4">
                <button onClick={toggleSidebar}>
                  <X size={24} />
                </button>
              </div>
              <Sidebar />
            </div>

            <div
              className={`fixed inset-0 z-40 transition-opacity duration-300 ${
                sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              } ${darkMode   ? 'bg-[var(--dark-navbar-bg)]'
              : 'bg-[var(--light-navbar-bg)]'}`}
              onClick={toggleSidebar}
            />
          </>
        )}

        <div className="flex-1 transition-all duration-300">
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
  );
};

export default Layout;
