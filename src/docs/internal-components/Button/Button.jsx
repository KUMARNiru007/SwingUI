import React, { useState } from 'react';
import { Clipboard, ClipboardCheck } from 'lucide-react';
import PreviewCodeBtn from '../../../components/previewcodebtn';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import buttonData from './buttonData.js';
import '../../SwingKit/AnimatedGradients/style.css';
import '../../SwingKit/Gradients/style.css';

const Button = () => {
  const { darkMode } = useTheme();

  const groupedButtons = buttonData.reduce((acc, button) => {
    if (!acc[button.section]) {
      acc[button.section] = [];
    }
    acc[button.section].push(button);
    return acc;
  }, {});

  const [codeViews, setCodeViews] = useState({});

  const toggleCodeView = (id) => {
    setCodeViews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const ButtonDemo = ({ button }) => {
    const showCode = codeViews[button.id] || false;

    return (
      <div className='mb-8 px-4 py-6 '>
        <h2 className='text-3xl font-bold mb-2'>{button.label}</h2>
        <p className='mb-6'>{button.description}</p>
        <PreviewCodeBtn
          showCode={showCode}
          setShowCode={() => toggleCodeView(button.id)}
        />

        {!showCode && (
          <div className='flex justify-center items-center h-40 bg-gray-200 rounded-lg shadow-md'>
            <div
              className='w-full flex justify-center'
              dangerouslySetInnerHTML={{ __html: button.code }}
            />
          </div>
        )}
        {showCode && (
          <div className='w-full overflow-x-auto my-4 rounded-xl relative'>
            <CodeBlock language='html' code={button.code} />
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
      <h2 className='text-3xl font-bold mb-2'>Button Demos</h2>
      <p className='mb-6'>
        Below are button examples showcasing different styles and hover effects.
      </p>

      {Object.entries(groupedButtons).map(([sectionName, buttons]) => (
        <div key={sectionName} className='mb-8'>
          <h3 className='text-2xl font-semibold mb-4'>{sectionName}</h3>

          <div className='space-y-12'>
            {buttons.map((button) => (
              <ButtonDemo key={button.id} button={button} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Button;
