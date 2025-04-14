import React from 'react';
import CodeBlock from '../components/CodeBlock/CodeBlock.jsx';
import { useTheme } from '../../context/ThemeContext';
import '../SwingKit/TextGradients/style.css';
import './style.css';
import { Link } from 'react-router';


const QuickStart = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`w-full transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
      style={{
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
      }}
    >
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        <div className='flex flex-col items-start'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-2'>
            🚀 <strong>Quick Start</strong>
          </h1>
          <p className='mb-10 sm:mb-16'>
            Getting started with{' '}
            <span className='swing-ocean-gradient-text font-bold'>SwingUI</span>
          </p>

          <div className='w-full'>
            <h2 className='text-xl sm:text-2xl font-semibold mb-4'>
              1. Install the Prerequisites
            </h2>

            <div className='w-full mb-8'>
              <p className='mb-6'>
                Include Tailwind CSS and Remix Icon in your{' '}
                <code>{`<head>`}</code> to make sure everything works as
                expected.
              </p>

              <div className='w-full codeblock-wrapper mb-6'>
                <CodeBlock
                  code={`<!-- SwingUI CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/imaaryan/cdn-swing@main/dist/assets/swingui.min.css" />`}
                />
              </div>

              <div className='w-full codeblock-wrapper mb-6'>
                <CodeBlock
                  code={`<!-- SwingUI JS -->
<script src="https://cdn.jsdelivr.net/gh/imaaryan/cdn-swing@main/dist/assets/swingui.min.js"></script>`}
                />
              </div>
            </div>

            <hr
              className={`my-10 border-t ${
                darkMode
                  ? 'border-gray-700 opacity-30'
                  : 'border-gray-300 opacity-50'
              }`}
            />

            <h2 className='text-xl sm:text-2xl font-semibold mb-4'>
              2. Add SwingUI CDN
            </h2>
            <div className='w-full mb-6'>
              <p className='mb-6'>
                Now, drop in SwingUI's CSS and JS to unlock all the components
                and styles.
              </p>
              <div className='w-full codeblock-wrapper mb-6'>
                <CodeBlock
                  code={`<!-- Paste this code in Header -->
<link href="https://cdn.jsdelivr.net/gh/imaaryan/cdn-swing@main/dist/assets/swingui.min.css" rel="stylesheet">`}
                />
              </div>
            </div>

            <div className='w-full codeblock-wrapper mb-8'>
              <CodeBlock
                code={`<!-- Paste this code above Body tag end -->
<script src="https://cdn.jsdelivr.net/gh/imaaryan/cdn-swing@main/dist/assets/swingui.min.js"></script>`}
              />
            </div>
            <p className='mb-6'>
              ⚡ That's it — no config, no setup. Just plug and play..
            </p>

            <hr
              className={`my-10 border-t ${
                darkMode
                  ? 'border-gray-700 opacity-30'
                  : 'border-gray-300 opacity-50'
              }`}
            />

            <h2 className='text-2xl sm:text-3xl font-bold mb-4'>
              Join the Community
            </h2>
            <p className='mb-3'>
              Swing UI is built with love for developers, and we'd love for you
              to be part of the journey!
            </p>
            <p className='mb-8'>
              Whether you're looking for help, want to give feedback, or
              contribute to the library, you're welcome to join our community.
            </p>

            <h3 className='text-lg sm:text-xl font-medium mb-2'>
              🚀 Get Involved:
            </h3>
            <ul className='list-disc mb-8 space-y-2 pl-5'>
              <li>🗣️ Ask questions &amp; share ideas</li>
              <li>🛠️ Contribute to components and improvements</li>
              <li>📢 Stay updated with new releases and tips</li>
            </ul>

            <h3 className='text-lg sm:text-xl font-medium mb-2'>
              📌 Connect With Us:
            </h3>
            <ul className='list-disc mb-8 space-y-2 pl-5'>
              <li> <Link to="#"  className='swing-ocean-gradient-text'> GitHub Repository </Link> – Star, fork, or raise issues</li>
              <li>
               <Link to="https://discord.com/invite/gd9Vjb6VCm" target='_blank' className='swing-ocean-gradient-text'> Discord Community</Link> – Chat with other devs &amp; get support
              </li>
              <li> <Link to="https://x.com/swing_ui" target='_blank' className='swing-ocean-gradient-text'>Twitter / X </Link> – Follow us for updates &amp; sneak peeks</li>
            </ul>

            <p className='mb-8'>
              Together, we can make <strong>Swing UI</strong> better every day!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStart;
