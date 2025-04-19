import React from 'react';
import {
  FaPalette,
  FaBars,
  FaUserCircle,
  FaSpinner,
  FaMousePointer,
} from 'react-icons/fa';
import '../../src/index.css';
import { useTheme } from '../context/ThemeContext';
import '../docs/SwingKit/Gradients/style.css';

const items = [
  {
    icon: <i className='ri-radio-button-line'></i>,
    title: 'Button',
    desc: 'Customizable button styles',
  },
  {
    icon: <i class='ri-palette-fill'></i>,
    title: 'Color',
    desc: 'Rich color system',
  },
  {
    icon: <i className='ri-menu-add-line'></i>,
    title: 'Navigation',
    desc: 'Intuitive nav systems',
  },
  {
    icon: <i className='ri-loop-right-line'></i>,
    title: 'Loader',
    desc: 'Loading indicators',
  },
  {
    icon: <i className='ri-profile-line'></i>,
    title: 'Avatar',
    desc: 'Use profile images',
  },
  { icon: <FaPalette />, title: 'Theme', desc: 'Dark/light toggle' },
  {
    icon: <i className='ri-profile-line'></i>,
    title: 'Click',
    desc: 'Interactive elements',
  },
  {
    icon: <i className='ri-bar-chart-fill'></i>,
    title: 'Progress',
    desc: 'Progress indicators',
  },
  {
    icon: <i className='ri-side-bar-fill'></i>,
    title: 'Sidebar',
    desc: 'Collapsible menus',
  },
  {
    icon: <i className='ri-account-pin-circle-fill'></i>,
    title: 'Profile',
    desc: 'User accounts',
  },
];

const GalleryCard = ({ icon, title, desc }) => (
  <div className='group w-full sm:w-60 h-60 bg-[#1c1c1c] border border-gray-700 rounded-xl flex-shrink-0 flex flex-col items-center justify-center text-center p-4 shadow-lg transition-all duration-300 hover:shadow-2xl swing-ocean-gradient-text hover:text-white mx-2 sm:mx-0'>
    <div className='text-5xl mb-4 swing-ocean-gradient-text bg-[#1c1c1c] p-4 rounded-full border border-[#2ca7cf] transform transition-transform duration-300 group-hover:scale-125 '>
      {icon}
    </div>
    <h3 className='text-lg font-bold underline'>{title}</h3>
    <p className='text-sm text-white mt-2'>{desc}</p>
  </div>
);

const InfiniteRow = ({ direction = 'left', duration = 20 }) => {
  const animationClass =
    direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';
  const duplicatedItems = [...items, ...items]; // visual loop

  return (
    <div className='w-full overflow-hidden py-6'>
      <div
        className={`flex gap-2 sm:gap-6 w-max ${animationClass}`}
        style={{
          animationDuration: `${duration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = 'paused';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = 'running';
        }}
      >
        {duplicatedItems.map((item, i) => (
          <div
            key={`${direction}-${i}`}
            className='w-[calc(50%-0.5rem)] sm:w-auto'
          >
            <GalleryCard icon={item.icon} title={item.title} desc={item.desc} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ComponentsFeaturesGallery = () => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`w-screen px-4 py-16 overflow-x-hidden mx-auto ${
        darkMode
          ? ' text-[var(--color-text-dark)]'
          : ' text-[var(--color-text)]'
      }`}
    >
      <div className='text-center mb-12 max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold text-[#2ca7cf]'>
          Components & Features
        </h2>
        <p className='mt-2 text-lg max-w-2xl mx-auto'>
          A modern Tailwind CSS component library that helps you design sleek,
          responsive interfaces with ease – and style to spare.
        </p>
      </div>

      <div className='max-w-screen'>
        <div className='max-w-full'>
          <InfiniteRow direction='left' duration={25} />
          <InfiniteRow direction='right' duration={30} />
        </div>
      </div>
    </div>
  );
};

export default ComponentsFeaturesGallery;
