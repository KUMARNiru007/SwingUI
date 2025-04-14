import React from 'react';
import CodeBlock from '../components/CodeBlock/CodeBlock.jsx';
import { useTheme } from '../../context/ThemeContext';

import '../SwingKit/TextGradients/style.css';

const QuickStart = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`w-full max-w-5xl mx-auto px-8 transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      <div className='py-14'>
        <h1 className='text-4xl font-bold mb-4'>
          🚀 <strong>Quick Start</strong>
        </h1>
        <p className='mb-20'>
          Getting started with{' '}
          <span className={'swing-ocean-gradient-text font-bold'}>SwingUI</span>
        </p>

        <h2 className='text-2xl font-semibold mt-3 mb-2'>
          1. Install the Prerequisites
        </h2>

        <div className='w-full overflow-x-auto my-4'>
          <p className='mb-10'>
            Include Tailwind CSS and Remix Icon in your <code>{`<head>`}</code>{' '}
            to make sure everything works as expected.
          </p>
          <div className='w-full overflow-x-auto my-5'>
            <CodeBlock
              language='html'
              code={`<!-- SwingUI CSS -->
<script src="https://cdn.jsdelivr.net/gh/imaaryan/cdn-swing@main/dist/assets/swingui.min.js"></script>`}
            />
          </div>
          <div className='w-full overflow-x-auto my-5'>
            <CodeBlock
              language='js'
              code={`<!-- SwingUI JS -->
<link rel="stylesheet"  href="https://cdn.jsdelivr.net/gh/imaaryan/cdn-swing@main/dist/assets/swingui.min.css"  />`}
            />
          </div>
        </div>

        <hr
          className={`my-12 border-t ${
            darkMode
              ? 'border-gray-700 opacity-30'
              : 'border-gray-300 opacity-50'
          }`}
        />

        <h2 className='text-2xl font-semibold mb-2'>2. Add SwingUI CDN</h2>
        <div className='w-full overflow-x-auto my-5 border-0'>
          <p className='mb-10'>
            Now, drop in SwingUI's CSS and JS to unlock all the components and
            styles.
          </p>
          <CodeBlock
            language='js'
            code={`<!-- Paste this code in Header -->
<link href="https://cdn.jsdelivr.net/gh/imaaryan/cdn-swing@main/dist/assets/swingui.min.css" rel="stylesheet">`}
          />
        </div>
        <div className='w-full overflow-x-auto my-4 mb-10 border-0'>
          <CodeBlock
            language='js'
            code={`<!-- Paste this code in above Body tag end-->
<script src="https://cdn.jsdelivr.net/gh/imaaryan/cdn-swing@main/dist/assets/swingui.min.js"></script>`}
          />
        </div>
        <p className='mb-2'>
          ⚡ That's it — no config, no setup. Just plug and play..
        </p>

        <hr
          className={`my-12 border-t ${
            darkMode
              ? 'border-gray-700 opacity-30'
              : 'border-gray-300 opacity-50'
          }`}
        />

        <h1 className='text-4xl font-bold mb-5'>Join the Community</h1>
        <p className='mb-3'>
          Swing UI is built with love for developers, and we'd love for you to
          be part of the journey!
        </p>
        <p className='mb-10'>
          Whether you're looking for help, want to give feedback, or contribute
          to the library, you're welcome to join our community.
        </p>

        <h3 className='text-2xl font-medium mb-2'>🚀 Get Involved:</h3>
        <ul className='list-disc list-inside mb-10 space-y-1 pl-4'>
          <li>🗣️ Ask questions & share ideas</li>
          <li>🛠️ Contribute to components and improvements</li>
          <li>📢 Stay updated with new releases and tips</li>
        </ul>

        <h3 className='text-2xl font-medium mb-2'>📌 Connect With Us:</h3>
        <ul className='list-disc list-inside mb-10 space-y-1 pl-4'>
          <li>GitHub Repository – Star, fork, or raise issues</li>
          <li>Discord Community – Chat with other devs & get support</li>
          <li>Twitter / X – Follow us for updates & sneak peeks</li>
        </ul>

        <p className='mb-12'>
          Together, we can make <strong>Swing UI</strong> better every day!
        </p>
      </div>
    </div>
  );
};

export default QuickStart;
