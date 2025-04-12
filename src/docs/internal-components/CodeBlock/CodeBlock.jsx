import React, { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-bash';
import 'prismjs/themes/prism-tomorrow.css';
import 'remixicon/fonts/remixicon.css';

const CodeBlock = ({ code }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  const lines = code.trim().split('\n');
  const previewLines = lines.slice(0, 9).join('\n');
  const isLong = lines.length > 9;
  const visibleCode = isExpanded ? code : previewLines;

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [visibleCode]);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(code);
      } else {

        const textArea = document.createElement('textarea');
        textArea.value = code;
        textArea.style.position = 'fixed';
        textArea.style.top = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative rounded-lg bg-[#2d2d2d] text-white font-mono text-sm overflow-hidden">
      {/* Code Block */}
      <pre className="p-4 pt-12 overflow-x-auto overflow-y-auto max-h-80 whitespace-pre-wrap break-words custom-scrollbar rounded-lg">
        <code ref={codeRef} className="language-jsx">
          {visibleCode}
        </code>
      </pre>

      {/* Copy Button */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={handleCopy}
          className="bg-[#2b2b2b] text-white px-3 py-1 rounded-md flex items-center gap-2 text-xs border border-gray-600 shadow hover:bg-[#3a3a3a] transition-all duration-200"
        >
          {copied ? (
            <>
              <span>Copied</span>
              <i className="ri-check-line text-green-400 text-sm"></i>
            </>
          ) : (
            <>
              <span>Copy</span>
              <i className="ri-file-copy-line text-sm"></i>
            </>
          )}
        </button>
      </div>

      {/* Expand Overlay */}
      {!isExpanded && isLong && (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#1e1e1e]/70 to-[#1e1e1e] opacity-80 flex items-center justify-center z-10 pointer-events-none">
          <div className="pointer-events-auto">
            <button
              onClick={() => setIsExpanded(true)}
              className="bg-[#2b2b2b] text-white px-3 py-1 rounded-md flex items-center gap-1 text-xs border border-gray-600 shadow hover:bg-[#3a3a3a] transition-all duration-200"
            >
              <span>Expand</span>
              <i className="ri-arrow-down-s-line text-base" />
            </button>
          </div>
        </div>
      )}

      {/* Collapse Button */}
      {isExpanded && isLong && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={() => setIsExpanded(false)}
            className="bg-[#2b2b2b] text-white px-3 py-1 rounded-md flex items-center gap-1 text-xs border border-gray-600 shadow hover:bg-[#3a3a3a] transition-all duration-200"
          >
            <span>Collapse</span>
            <i className="ri-arrow-up-s-line text-base" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;