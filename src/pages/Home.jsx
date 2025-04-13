import React from "react";
import { Link } from "react-router"; 
import { useTheme } from '../context/ThemeContext';
import Hero from "../components/Hero";
import Footer from "../components/Footer"

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
    < Hero />
    <Footer />
      
    </div>
  );
};

export default Home;
