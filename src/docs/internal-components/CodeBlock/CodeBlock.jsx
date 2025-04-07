import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-bash';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

const CodeBlock = ({ language, code }) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-lg overflow-hidden text-white">
      <pre className="overflow-auto p-4 bg-[#161618]">
        <code ref={codeRef} className={`language-${language}`}>{code}</code>
      </pre>
      <div className="absolute top-3 right-3 transition-opacity">



        <button
          onClick={handleCopy}
          className="bg-[#161618] hover:bg-[#161618] text-white px-3 py-1 rounded flex items-center gap-2 text-sm group"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6 4V8H18V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H6ZM8 2H16V6H8V2Z" />
                </svg>
              </motion.span>
            ) : (
              <>
                <motion.span
                  key="lang"
                  className="group-hover:hidden text-xs text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {language}
                </motion.span>

                <motion.svg
                  key="clipboard"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 hidden group-hover:block"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6 4V8H18V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H6ZM8 2H16V6H8V2Z" />
                </motion.svg>
              </>
            )}
          </AnimatePresence>
        </button>


      </div>
    </div>
  );
};

export default CodeBlock;