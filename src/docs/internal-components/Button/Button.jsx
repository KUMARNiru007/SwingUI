import React, { useState } from 'react';
import { Clipboard, ClipboardCheck } from 'lucide-react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import buttonData from './ButtonData.js';
import '../../SwingKit/AnimatedGradients/style.css';
import '../../SwingKit/Gradients/style.css';
import '../../SwingKit/TextGradients/style.css';
import { Link } from 'react-router';

const Button = () => {
  const { darkMode } = useTheme();

  // Group buttons by section
  const groupedButtons = buttonData.reduce((acc, btn) => {
    (acc[btn.section] = acc[btn.section] || []).push(btn);
    return acc;
  }, {});

  const [codeViews, setCodeViews] = useState({});

  const toggleCodeView = (id) => {
    setCodeViews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const ButtonDemo = ({ button }) => {
    const showCode = !!codeViews[button.id];

    return (
      <div>
        <h2 className='text-xl sm:text-2xl font-semibold mb-2'>
          {button.label}
        </h2>
        <p className='mb-4'>{button.description}</p>

        <PreviewCodeBtn
          showCode={showCode}
          setShowCode={() => toggleCodeView(button.id)}
        />

        {!showCode ? (
          <div className='flex justify-center items-center h-40 bg-gray-200 rounded-lg shadow-md'>
            <div
              className='w-full flex justify-center'
              dangerouslySetInnerHTML={{ __html: button.code }}
            />
          </div>
        ) : (
          <div
            className='
              w-full my-4 rounded-xl relative
              whitespace-pre overflow-x-auto
              md:whitespace-pre-wrap md:break-words md:overflow-x-visible
            '
          >
            <CodeBlock language='html' code={button.code} />
          </div>
        )}

        <hr
          className={`my-10 border-t ${
            darkMode
              ? 'border-gray-700 opacity-30'
              : 'border-gray-300 opacity-50'
          }`}
        />
      </div>
    );
  };

  const propertiesData = [
    {
      propertyName: 'background (custom class)',
      defaultValue: 'swing-ocean-gradient',
      description:
        'Applies a gradient background effect using the official swing-ocean-gradient class.',
    },
    {
      propertyName: 'hover background (custom)',
      defaultValue: 'hover:swing-ocean-gradient',
      description:
        'Applies the swing-ocean-gradient background on hover for visual interactivity.',
    },
    {
      propertyName: 'icon class (custom)',
      defaultValue: 'ri-arrow-right-s-line',
      description: 'Renders an arrow icon from the Remix Icon library.',
    },
    {
      propertyName: 'icon visibility transition',
      defaultValue: 'opacity-0 group-hover:opacity-100',
      description:
        'Hides the icon initially and reveals it with a fade effect on group hover.',
    },
    {
      propertyName: 'text hover transform',
      defaultValue: 'group-hover:translate-x-[-10px]',
      description:
        'Shifts the text 10px to the left on group hover for animated interaction.',
    },
    {
      propertyName: 'text transition',
      defaultValue: 'transition-transform duration-200',
      description: 'Smoothly animates the text transformation over 200ms.',
    },
    {
      propertyName: 'icon transition',
      defaultValue: 'transition-all duration-200',
      description:
        'Applies smooth transition to all icon properties over 200ms.',
    },
  ];

  return (
    <div
      className={`w-full transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      } px-0 py-6`}
    >
      <div className='max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 py-8 sm:py-6'>
        <h2 className='text-3xl mb-3 sm:mb-8 sm:text-4xl font-bold pb-4'>
          Buttons
        </h2>

        {Object.entries(groupedButtons).map(([sectionName, buttons]) => (
          <div key={sectionName} className='mb-8'>
            <h3 className='text-xl sm:text-2xl font-semibold mb-4'>
              {sectionName}
            </h3>
            <div className='space-y-12'>
              {buttons.map((button) => (
                <ButtonDemo key={button.id} button={button} />
              ))}
            </div>
          </div>
        ))}

        <h3 className='text-xl sm:text-2xl font-semibold mb-4'>
          Gradient Color
        </h3>
        <p className='mb-10 sm:mb-16'>
          Explore vibrant gradient backgrounds that can be applied to buttons
          and other UI elements. These smooth, colorful gradients can enhance
          the visual appeal and interactivity of your design. If you want to
          explore more gradient styles, check out the
          <Link to='/swingkit/gradients' className='swing-ocean-gradient-text'>
            {' '}
            Gradient Collection.
          </Link>
        </p>

        <h3 className='text-xl sm:text-2xl font-semibold mb-4'>
          Animated Gradient
        </h3>
        <p className='mb-10 sm:mb-16'>
          These animated gradients offer dynamic, moving color transitions,
          adding an interactive and visually engaging effect to your design. If
          you want to explore more Swing Animated Gradients, check out the
          <Link
            to='/swingkit/animated-gradients'
            className='swing-ocean-gradient-text'
          >
            {' '}
            Animated Gradient Collection.
          </Link>
        </p>

        <h2 className='text-xl sm:text-2xl font-semibold mb-4'>Properties</h2>
        <div className='w-full mb-12 overflow-x-auto max-w-full'>
          <table
            className={`w-full table-auto border-collapse rounded-lg ${
              darkMode ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            <thead>
              <tr className={darkMode ? 'bg-gray-700' : 'bg-gray-200'}>
                <th className='py-3 px-2 sm:px-4 text-left font-semibold w-1/5'>
                  Property Name
                </th>
                <th className='py-3 px-2 sm:px-4 text-left font-semibold w-1/3'>
                  Default Value
                </th>
                <th className='py-3 px-2 sm:px-4 text-left font-semibold w-1/2'>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {propertiesData.map((item, idx) => (
                <tr
                  key={idx}
                  className={`border-t ${
                    darkMode ? 'border-gray-700' : 'border-gray-200'
                  }`}
                >
                  <td className='py-3 px-2 sm:px-4 break-words'>
                    {item.propertyName}
                  </td>
                  <td className='py-3 px-2 sm:px-4'>
                    <code
                      className={`px-2 py-1 rounded text-sm ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-200'
                      } inline-block min-w-full break-words`}
                    >
                      {item.defaultValue}
                    </code>
                  </td>
                  <td className='py-3 px-2 sm:px-4 break-words'>
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Button;
