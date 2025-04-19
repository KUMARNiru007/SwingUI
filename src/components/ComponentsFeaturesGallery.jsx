import React from 'react';
import {
  FaPalette,
  FaBars,
  FaUserCircle,
  FaSpinner,
  FaMousePointer,
} from 'react-icons/fa';
import '../../src/index.css';

const items = [
  {
    icon: <FaMousePointer />,
    title: 'Button',
    desc: 'Customizable button styles',
  },
  { icon: <FaPalette />, title: 'Color', desc: 'Rich color system' },
  { icon: <FaBars />, title: 'Navigation', desc: 'Intuitive nav systems' },
  { icon: <FaSpinner />, title: 'Loader', desc: 'Loading indicators' },
  { icon: <FaUserCircle />, title: 'Avatar', desc: 'Use profile images' },
  { icon: <FaPalette />, title: 'Theme', desc: 'Dark/light toggle' },
  { icon: <FaMousePointer />, title: 'Click', desc: 'Interactive elements' },
  { icon: <FaSpinner />, title: 'Progress', desc: 'Progress indicators' },
  { icon: <FaBars />, title: 'Sidebar', desc: 'Collapsible menus' },
  { icon: <FaUserCircle />, title: 'Profile', desc: 'User accounts' },
];

const GalleryCard = ({ icon, title, desc }) => (
  <div className='group w-full sm:w-60 h-60 bg-[#1c1c1c] border border-gray-700 rounded-xl flex-shrink-0 flex flex-col items-center justify-center text-center p-4 shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-[#2ca7cf] mx-2 sm:mx-0'>
    <div className='text-5xl mb-4 text-[#2ca7cf] bg-[#1c1c1c] p-4 rounded-full border border-[#2ca7cf] transform transition-transform duration-300 group-hover:scale-125'>
      {icon}
    </div>
    <h3 className='text-lg font-bold text-[#2ca7cf] underline'>{title}</h3>
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
  return (
    <div className='w-screen bg-[#06141f] px-4 py-16 text-white overflow-x-hidden mx-auto '>
      <div className='text-center mb-12 max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold text-[#2ca7cf]'>
          Components & Features
        </h2>
        <p className='mt-2 text-lg max-w-2xl mx-auto text-white'>
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
