import React from 'react';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/gradient-logo.png';

export default function Footer() {
  const { darkMode } = useTheme();

  const bgClass = darkMode
    ? 'bg-[var(--dark-navbar-bg)] text-[var(--color-text-dark)]'
    : 'bg-[var(--light-navbar-bg)] text-[var(--color-text)]';

  return (
    <footer className={`px-4 py-8  ${bgClass}`}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 mt-8">
            <img src={logo} alt="SwingUI Logo" className="h-18" />
          </div>

          <div className="mb-4">
            <p className="font-bold">
              Built with <span className="text-red-500">❤</span> by Backbenchers
            </p>
          </div>

          <div className={`max-w-6xl mx-auto text-sm mb-12`}>
            <p className={'mb-1'}>
              SwingUI is a hackathon project born during the <span className="font-semibold">ChaiCode Web Dev First Cohort</span> — crafted by a passionate team of backbenchers who
            </p>
            <p className={'mb-1'}>
              poured their hearts into every line of code. Guided by the incredible mentors <span className="font-semibold">Hitesh Sir, Piyush Sir, Anirudh Sir, Mukul Sir</span>, and <span className="font-semibold">Akash Sir</span>,
            </p>
            <p>
              we built SwingUI not just to ship components, but to learn, grow, and create something we're truly proud of.
            </p>
          </div>
        </div>

        <div className={`flex flex-wrap justify-between items-center border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'} pt-3 pl-10 ${bgClass}`}>

            
          <div className="text-sm mb-4 md:mb-0">
            © 2025 SwingUI. All Rights Reserved.
          </div>

          <div className="flex space-x-6 font-medium">
            <a href="#" className="transition-colors">Github</a>
            <a href="https://discord.com/invite/gd9Vjb6VCm" target="_blank" rel="noopener noreferrer" className="transition-colors">Discord</a>
            <a href="https://x.com/swing_ui" target="_blank" rel="noopener noreferrer" className="transition-colors pr-10">X (formerly Twitter)</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
