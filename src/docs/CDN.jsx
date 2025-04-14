import React from "react";

const CDN = () => {
  return (
    <div className='`px-4 py-6 '>
      <h2 className="text-2xl font-bold  mb-2 sm:text-2xl md:text-3xl py-4 ">CDN</h2>
      <p>Use this CDN link:</p>
      <code className="block bg-gray-800 text-white p-2 rounded">
        &lt;link href="https://cdn.tailwindcss.com" rel="stylesheet"&gt;
      </code>
    </div>
  );
};

export default CDN;
