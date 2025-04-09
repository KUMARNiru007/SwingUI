import React from "react";
import { Link } from "react-router"; 
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br transition-colors  duration-300 ${
        darkMode
          ? 'bg-[var(--dark-navbar-bg)] text-[var(--color-text)]'
          : 'bg-[var(--light-navbar-bg)] text-[var(--color-text)]'
      }`}
    >
      <div className="w-full text-center p-10">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
          Swing UI
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          A powerful, easy-to-use UI Library built with TailwindCSS for modern web applications.
        </p>
        <Link
          to="/docs"
          className="px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white rounded-full shadow-lg hover:scale-105"
        >
          Get Started 🚀
        </Link>
      </div>
    </div>
  );
};

export default Home;
