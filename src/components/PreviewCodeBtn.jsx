import React from 'react';

function PreviewCodeBtn({ showCode, setShowCode }) {
  return (
    <div className="flex items-center justify-end gap-2 sm:gap-3 mb-3">
      <div className='bg-[#02111A] px-2 sm:px-3 py-1 rounded-lg flex'>
        <button
          onClick={() => setShowCode(false)}
          className={`px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg shadow-md transition-all duration-300 ${
            !showCode
              ? "bg-[#09151C] text-[#FFFFFF] shadow-lg"
              : "text-[#A2A2A2] dark:text-[#A2A2A2]"
          }`}
          aria-pressed={!showCode}
        >
          Preview
        </button>
        <button
          onClick={() => setShowCode(true)}
          className={`px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg shadow-md transition-all duration-300 ${
            showCode
              ? "bg-[#09151C] text-[#FFFFFF] shadow-lg"
              : "text-[#A2A2A2] dark:text-[#A2A2A2]"
          }`}
          aria-pressed={showCode}
        >
          Code
        </button>
      </div>
    </div>
  );
}

export default PreviewCodeBtn;
