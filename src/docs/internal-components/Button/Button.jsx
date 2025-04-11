import React, { useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";
import PreviewCodeBtn from "../../../components/previewcodebtn";
import { useTheme } from "../../../context/ThemeContext.jsx";
import CodeBlock from "../CodeBlock/CodeBlock.jsx";

const Button = () => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const { darkMode } = useTheme(); 

  const codeSnippet = 
`<button class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md hover:scale-105 transition-all duration-300">
  MyBtn
</button>`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className={`  w-full  transition-colors duration-300 ${darkMode ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)] ' : 'bg-[var(--light-bg)] text-[var(--color-text)] '}`}>
      <h2 className="text-3xl font-bold  mb-2">Beautiful Button</h2>
      <p className="mb-6">
      Welcome to our framework documentation. This guide will help you understand the core concepts and get started with building applications quickly and efficiently.

At the very basic level, our framework provides a simple, intuitive API while offering powerful features that support complex application development. Our focus is on developer experience without sacrificing performance.
      </p>

      < PreviewCodeBtn showCode={showCode} setShowCode={setShowCode}/>

      {!showCode && (
        <div className="flex justify-center  items-center h-40 bg-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-md">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            Click Me
          </button>
        </div>
      )}

      {showCode && (
        
        <div className="w-full overflow-x-auto my-4 rounded-xl">
        <CodeBlock language="js" code={codeSnippet} />
      </div>
     
      
      )}
    </div>
  );
};

export default Button;
