import React, { useState } from "react";

const ButtonDocs = () => {
  const [showCode, setShowCode] = useState(false);

  const codeSnippet = `
  <button class="px-4 py-2 bg-blue-600 cursor-pointer text-white rounded-lg shadow hover:bg-blue-700">
      MyBtn
  </button>`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
      alert("Code copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">Button</h2>
      <p className="text-gray-600 dark:text-gray-300">
        Buttons are interactive elements that trigger actions when clicked.
      </p>

      {/* Preview & Code Toggle */}
      <div className="flex justify-end items-center my-4">
        <button
          onClick={() => setShowCode(false)}
          className={`px-3 py-1 text-sm border rounded ${
            !showCode ? "bg-gray-300" : "bg-gray-100"
          } cursor-pointer`}
        >
          Preview
        </button>
        <button
          onClick={() => setShowCode(true)}
          className={`ml-2 px-3 py-1 text-sm border rounded ${
            showCode ? "bg-gray-300" : "bg-gray-100"
          } cursor-pointer`}
        >
          Code
        </button>
      </div>

      {/* Preview Section */}
      {!showCode && (
        <div className="flex justify-center items-center h-32 bg-gray-200 rounded">
          <button className="px-4 py-2 bg-blue-600 cursor-pointer text-white rounded-lg shadow hover:bg-blue-700">
            MyBtn
          </button>
        </div>
      )}

      {/* Code Section */}
      {showCode && (
        <div className="relative bg-gray-800 text-yellow-300 p-4 rounded-lg overflow-x-auto">
          <pre>{codeSnippet}</pre>
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 bg-gray-700 p-2 rounded hover:bg-gray-600"
          >
            📋 Copy
          </button>
        </div>
      )}
    </div>
  );
};

export default ButtonDocs;
