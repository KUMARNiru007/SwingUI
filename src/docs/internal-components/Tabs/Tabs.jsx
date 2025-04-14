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
      const tabs = [
        {
          id: 'Issues',
          title: '# Issues',
        },
        {
          id: 'Kanban',
          title: '# Kanban',
        },
        {
          id: 'Gantt',
          title: '# Gantt',
        },
        {
          id: 'Documentation',
          title: '# Documentation',
        },
      ];

      let activeTab = 'Issues';

      const tabContainer = document.getElementById('tabContainer');
      const tabTitle = document.getElementById('tab-title');
      const tabbox = document.getElementById('tab-box');

      function renderTabs() {
        tabContainer.innerHTML = '';
        tabs.forEach((tab) => {
          const btn = document.createElement('button');
          btn.innerHTML = `
                <span class="sm:inline">${tab.id}</span>
                `;
          btn.className = `tab-button flex-1 w-full sm:w-auto md:w-40 text-xs sm:text-sm font-semibold py-2 sm:py-3 px-3 sm:px-6 border-2 rounded-lg bg-white transition-all duration-300 ${
            activeTab === tab.id
              ? 'text-[var(--light-nav-hover)] border-[var(--light-nav-hover)] border-b-[6px]'
              : 'text-black border-black hover:bg-gray-100 hover:-rotate-3 hover:-translate-y-1 hover:shadow-[4px_6px_0px_rgba(0,0,0,0.7)]'
          }`;
          btn.addEventListener('click', () => {
            activeTab = tab.id;
            renderTabs();
            renderContent();
          });
          tabContainer.appendChild(btn);
        });
      }

      function renderContent() {
        const currentTab = tabs.find((t) => t.id === activeTab);
        tabTitle.textContent = currentTab.title;
      }

      renderTabs();
      renderContent();
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
        <h2 className='text-2xl sm:text-3xl font-bold mb-2'>{tab.label}</h2>
        <p className='mb-4 sm:mb-6 text-sm sm:text-base'>{tab.description}</p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode && (
          <div className='flex justify-center min-h-40 items-center bg-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-md'>
            <div
              className='w-full flex justify-center p-2 sm:p-4'
              dangerouslySetInnerHTML={{ __html: tab.code }}
            />
          </div>
        )}

        {showCode && (
          <div className='w-full overflow-x-auto my-2 sm:my-4 rounded-xl relative'>
            <button
              onClick={copyToClipboard}
              className='absolute top-2 right-2 p-1 sm:p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
              title='Copy to clipboard'
            >
              {copied ? (
                <ClipboardCheck size={16} className='sm:w-5 sm:h-5' />
              ) : (
                <Clipboard size={16} className='sm:w-5 sm:h-5' />
              )}
            </button>
            <CodeBlock language='html' code={tab.code} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`w-full py-6  max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      } py-4 sm:py-6`}
    >
      <h2 className='text-2xl sm:text-3xl font-bold mb-2'>Tab Demos</h2>
      <p className='mb-4 sm:mb-6 text-sm sm:text-base'>
        Below are Tab examples showcasing different styles and hover effects.
      </p>

      {Object.entries(groupedTabs).map(([sectionName, Tabs]) => (
        <div key={sectionName} className='mb-6 sm:mb-8'>
          <div className='space-y-8 sm:space-y-12'>
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
