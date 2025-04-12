import React, { useEffect, useState } from 'react';
import { Clipboard, ClipboardCheck } from 'lucide-react';
import PreviewCodeBtn from '../../../components/previewcodebtn';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import TabsData from './TabsData.js';
import '../../SwingKit/AnimatedGradients/style.css';
import '../../SwingKit/Gradients/style.css';

const Tabs = () => {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    if (!showCode) {
      const tabButtons = document.querySelectorAll('.tab-button');

      tabButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          // Remove active styles from all buttons
          tabButtons.forEach((b) => {
            b.classList.remove(
              'text-blue-600',
              'border-blue-600',
              'border-b-[6px]',
            );
            b.classList.add(
              'text-black',
              'border-black',
              'hover:bg-gray-100',
              'hover:-rotate-3',
              'hover:-translate-y-1',
              'hover:shadow-[4px_6px_0px_rgba(0,0,0,0.7)]',
            );
          });

          // Add active styles to the clicked one
          btn.classList.remove(
            'text-black',
            'border-black',
            'hover:bg-gray-100',
            'hover:-rotate-3',
            'hover:-translate-y-1',
            'hover:shadow-[4px_6px_0px_rgba(0,0,0,0.7)]',
          );
          btn.classList.add(
            'text-blue-600',
            'border-blue-600',
            'border-b-[6px]',
          );
        });
      });
    }
  });

  const groupedTabs = TabsData.reduce((acc, tab) => {
    if (!acc[tab.section]) {
      acc[tab.section] = [];
    }
    acc[tab.section].push(tab);
    return acc;
  }, {});

  const TabDemo = ({ tab }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(tab.code.trim());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    };

    return (
      <div className='mb-8'>
        <h2 className='text-3xl font-bold mb-2'>{tab.label}</h2>
        <p className='mb-6'>{tab.description}</p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode && (
          <div className='flex justify-center min-h-40 items-center bg-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-md'>
            <div
              className='w-full flex justify-center'
              dangerouslySetInnerHTML={{ __html: tab.code }}
            />
          </div>
        )}

        {showCode && (
          <div className='w-full overflow-x-auto my-4 rounded-xl relative'>
            <button
              onClick={copyToClipboard}
              className='absolute top-2 right-2 p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
              title='Copy to clipboard'
            >
              {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
            </button>
            <CodeBlock language='html' code={tab.code} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`w-full transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      } p-4`}
    >
      <h2 className='text-3xl font-bold mb-2'>Tab Demos</h2>
      <p className='mb-6'>
        Below are Tab examples showcasing different styles and hover effects.
      </p>

      {Object.entries(groupedTabs).map(([sectionName, Tabs]) => (
        <div key={sectionName} className='mb-8'>
          {/* Render individual buttons in this section */}
          <div className='space-y-12'>
            {Tabs.map((tab) => (
              <TabDemo key={tab.id} tab={tab} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
