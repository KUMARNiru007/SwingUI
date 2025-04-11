import React from 'react';

function PreviewCodeBtn({ showCode, setShowCode }) {
  return (
    <div className="flex  items-center justify-end gap-3 mb-3">
      <div className='bg-[#02111A] px-3 py-1 rounded-lg'>
      <button
        onClick={() => setShowCode(false)}
        className={`px-5 py-2 text-sm font-medium rounded-lg shadow-md transition-all duration-300 ${
          !showCode
            ? "bg-[#09151C] text-[#FFFFFF]  shadow-lg"
            : "text-[#A2A2A2]   dark:text-[#A2A2A2]"
        }`}
      >
        Preview
      </button>
      <button
        onClick={() => setShowCode(true)}
        className={`px-5 py-2 text-sm font-medium rounded-lg shadow-md transition-all duration-300 ${
          showCode
            ? "bg-[#09151C] text-[#FFFFFF] shadow-lg"
            : "text-[#A2A2A2]   dark:text-[#A2A2A2] "
        }`}
      >
        Code
      </button>
      </div>
    </div>
  );
}

export default PreviewCodeBtn;
