import React, { useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";

const Button = () => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const codeSnippet = `<button class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md hover:scale-105 transition-all duration-300">
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
    <div className="w-full max-w-2xl mx-auto mt-12 p-8 bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Beautiful Button</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        This button comes with a gradient, smooth hover effect, and a responsive design.
      </p>

      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={() => setShowCode(false)}
          className={`px-5 py-2 text-sm font-medium rounded-full shadow-md transition-all duration-300 ${
            !showCode
              ? "bg-blue-500 text-white shadow-lg"
              : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setShowCode(true)}
          className={`px-5 py-2 text-sm font-medium rounded-full shadow-md transition-all duration-300 ${
            showCode
              ? "bg-blue-500 text-white shadow-lg"
              : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          Code
        </button>
      </div>

      {!showCode && (
        <div className="flex justify-center items-center h-40 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-md">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
            Click Me
          </button>
        </div>
      )}

      {showCode && (
        <div className="relative bg-gray-900 text-green-400 p-6 rounded-lg shadow-lg overflow-x-auto">
          <pre className="whitespace-pre-wrap text-sm font-mono leading-relaxed">
            <code className="text-green-400">{codeSnippet}</code>
          </pre>

          <button
            onClick={copyToClipboard}
            className="absolute top-3 right-3 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition-all duration-300 flex items-center"
          >
            {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
          </button>

          {copied && (
            <span className="absolute top-10 right-2 text-xs bg-black text-white px-2 py-1 rounded-md shadow-md transition-all duration-300">
              Copied!
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Button;
