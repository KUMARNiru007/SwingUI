import React, { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-bash';
import 'prismjs/themes/prism-tomorrow.css';
import 'remixicon/fonts/remixicon.css';
import CopyButton from '../copyButton/copyButton.jsx';
import '../../../App.css';

const CodeBlock = ({ code }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const codeRef = useRef(null);

  const lines = code.trim().split('\n');
  const previewLines = lines.slice(0, 15).join('\n');
  const isLong = lines.length > 15;
  const visibleCode = isExpanded ? code : previewLines;

  const collapsedHeightRem = 20;
  const expandedHeightRem = collapsedHeightRem * 1.25 * 1.25;

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [visibleCode]);

  return (
    <div className='relative rounded-lg bg-[#2d2d2d] text-white font-mono text-sm overflow-hidden'>
      <pre
        className='p-4 pt-12 overflow-x-auto overflow-y-auto whitespace-pre-wrap break-words custom-scrollbar rounded-lg transition-all duration-300'
        style={{
          maxHeight: `${isExpanded ? expandedHeightRem : collapsedHeightRem}rem`,
        }}
      >
        <code ref={codeRef} className='language-jsx'>
          {visibleCode}
        </code>
      </pre>

      <div className='absolute top-6 right-6 z-20'>
        <CopyButton className='cursor-pointer' textToCopy={code} />
      </div>

      {!isExpanded && isLong && (
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#1e1e1e]/70 to-[#1e1e1e] opacity-80 flex items-center justify-center z-10 pointer-events-none'>
          <div className='pointer-events-auto'>
            <button
              onClick={() => setIsExpanded(true)}
              className='cursor-pointer bg-[#2b2b2b] text-white px-3 py-1 rounded-md flex items-center gap-1 text-xs border border-gray-600 shadow hover:bg-[#3a3a3a] transition-all duration-200'
            >
              <span style={{ fontFamily: 'var(--font-poppins)' }}>Expand</span>
              <i className='ri-arrow-down-s-line text-base' />
            </button>
          </div>
        </div>
      )}

      {isExpanded && isLong && (
        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20'>
          <button
            onClick={() => setIsExpanded(false)}
            className='cursor-pointer bg-[#2b2b2b] text-white px-3 py-1 rounded-md flex items-center gap-1 text-xs border border-gray-600 shadow hover:bg-[#3a3a3a] transition-all duration-200'
          >
            <span style={{ fontFamily: 'var(--font-poppins)' }}>Collapse</span>
            <i className='ri-arrow-up-s-line text-base' />
          </button>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;