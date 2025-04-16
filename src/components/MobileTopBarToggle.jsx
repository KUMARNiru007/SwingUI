import React from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const MobileTopBarToggle = ({ sidebarOpen, toggleSidebar }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`md:hidden flex items-center justify-between p-4 transition-all duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <X size={28} /> : <Menu size={24} />}
      </button>
    </div>
  );
};

export default MobileTopBarToggle;