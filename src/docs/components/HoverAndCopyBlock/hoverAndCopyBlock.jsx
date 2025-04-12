import React, { useState } from 'react';
import CopyButton from '../../components/copyButton/copyButton.jsx';

const HoverAndCopyBlock = ({ gradient }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='relative rounded-md overflow-hidden border border-gray-700 
                 w-full h-48 sm:h-56 md:h-64 lg:h-72'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          ${gradient.class} 
          flex items-center justify-center 
          w-full h-full 
          text-center text-white 
          rounded-md
        `}
      >
        <span className='text-sm sm:text-base md:text-lg font-semibold'>
          {gradient.name}
        </span>
      </div>

      {isHovered && (
        <div className='absolute top-2 right-2 transition-opacity duration-200'>
          <CopyButton textToCopy={gradient.name} />
        </div>
      )}
    </div>
  );
};

export default HoverAndCopyBlock;
