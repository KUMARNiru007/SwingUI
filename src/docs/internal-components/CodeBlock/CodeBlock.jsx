import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../../../../src/index.css";
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-bash';
import 'prismjs/themes/prism-tomorrow.css';
import 'remixicon/fonts/remixicon.css';

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg text-white">
      {/* Code Area */}
      <pre className="p-4 pr-16 text-sm overflow-x-auto whitespace-pre-wrap break-words">
        <code ref={codeRef} className="language-jsx">{code}</code>
      </pre>

      {/* Copy Button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={handleCopy}
          className="bg-[#1d1d1d] text-white px-3 py-2 rounded-md flex items-center gap-2 text-sm border border-gray-500 shadow-md hover:shadow-lg"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                key="copied"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.1 }}
                className="flex items-center gap-2"
              >
                Copied
                <i className="ri-file-copy-2-line text-base"></i>
              </motion.span>
            ) : (
              <motion.i
                key="clipboard"
                className="ri-file-copy-line text-base"
              />
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;