import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

function PreviewCodeBtn({ showCode, setShowCode }) {
  const { darkMode } = useTheme(); 
  return (
    <div className="flex  items-center justify-end gap-3 mb-3">
      <div className={`${darkMode ? 'bg-[var(--dark-navbar-bg)] text-[var(--color-text-dark)] ' : 'bg-[var(--light-navbar-bg)] text-[var(--color-text)] '} px-3 py-1 rounded-lg`}>
      <button
        onClick={() => setShowCode(false)}
        className={`px-5 py-2 text-sm font-medium rounded-lg  transition-all duration-300 ${
          !showCode
            ? ` ${darkMode ? 'bg-[var(--dark-bg)]  text-white' : 'bg-[var(--light-bg)]  text-black'} shadow-lg`
            : `${darkMode ? ' text-gray-400' : ' text-gray-600 '}`
        }`}
      >
        Preview
      </button>
      <button
        onClick={() => setShowCode(true)}
        className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
          showCode
            ? `${darkMode ? 'bg-[var(--dark-bg)] text-white ' : 'bg-[var(--light-bg)] text-black '} shadow-lg`
            : `${darkMode ? ' text-gray-400 ' : ' text-gray-600 '}   `
        }`}
      >
        Code
      </button>
      </div>
    </div>
  );
}

export default PreviewCodeBtn;
