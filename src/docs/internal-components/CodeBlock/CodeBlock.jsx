import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'prismjs';
import 'prismjs/components/prism-jsx'; // Ensure the components are imported
import 'prismjs/components/prism-bash';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Prism theme
import 'remixicon/fonts/remixicon.css'; // Remix Icon CDN

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current); // Highlight the code after it renders
    }
  }, [code]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-lg overflow-hidden text-white">
      <pre className="overflow-auto p-4 bg-[#161618]">
        <code ref={codeRef} className="language-jsx">{code}</code>
      </pre>

      <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopy}
          className="bg-[#1d1d1d] text-white px-4 py-3 rounded-md flex items-center gap-2 text-lg border border-gray-500 shadow-md hover:shadow-lg group"
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
                <i className="ri-file-copy-2-line text-xl"></i>
              </motion.span>
            ) : (
              <motion.i
                key="clipboard"
                className="ri-file-copy-line text-xl"
              />
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;