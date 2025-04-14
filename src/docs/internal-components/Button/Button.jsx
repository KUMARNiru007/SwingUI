import React, { useState } from 'react';
import { Clipboard, ClipboardCheck } from 'lucide-react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import buttonData from './ButtonData.js';
import '../../SwingKit/AnimatedGradients/style.css';
import '../../SwingKit/Gradients/style.css';
import "../../SwingKit/TextGradients/style.css"
import { Link } from 'react-router';

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
      <div>
        <h2 className='text-xl sm:text-2xl font-semibold mb-2'>{button.label}</h2>
        <p className='mb-4'>{button.description}</p>
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

  const propertiesData =[
    {
      className: 'swing-ocean-gradient',
      section : 'swing button ',
      description: 'A swing button with a vibrant gradient background ',
    },
    {
      className: 'swing-ocean-gradient hover:swing-ocean-gradient',
      section : 'swing button ',
      description: 'A swing button that shows alternate gradient on hover',
    },
    {
      className: 'swing-ocean-gradient-animate',
      section : 'Animated swing button ',
      description:
        'An animated swing button with continous gradient motion',
    },
    {
      className: 'swing-ocean-gradient-animate hover:swing-ocean-gradient ',
      section : 'Animated swing button ',
      description: 'An animated swing button that changes its gradient on hover',
    }
  ];

  return (
    <div
      className={`w-full transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      } `}
    >
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
      <h2 className='text-3xl sm:text-4xl font-bold mb-2'>Buttons</h2>
      <p className='mb-10 sm:mb-16'>
      The Button component offers a variety of dynamic, gradient-filled buttons with smooth 
      Swing animations for an engaging user experience. Each button type is designed to 
      deliver an interactive and visually appealing UI element.
      </p>
      

      {Object.entries(groupedButtons).map(([sectionName, buttons]) => (
        <div key={sectionName} className='mb-8'>
          <h3 className='text-xl sm:text-2xl font-semibold mb-4'>{sectionName}</h3>

          <div className='space-y-12'>
            {buttons.map((button) => (
              <ButtonDemo key={button.id} button={button} />
            ))}
          
          </div>
          
        </div>
      ))}
      <h3 className='text-xl sm:text-2xl font-semibold mb-4'>Gradient Color</h3>
      <p className='mb-10 sm:mb-16'>
      Explore vibrant gradient backgrounds that can be applied to buttons and other UI 
      elements. These smooth, colorful gradients can enhance the visual appeal and 
      interactivity of your design. 
      If you want to explore more gradient styles, check out the <Link to="/swingkit/gradients" className='swing-ocean-gradient-text'> Gradient Collection</Link>.
      </p>
      <h3 className='text-xl sm:text-2xl font-semibold mb-4'>Animated Gradient</h3>
      <p className='mb-10 sm:mb-16'>
      These animated gradients offer dynamic, moving color transitions, adding an interactive 
      and visually engaging effect to your design. 
      If you want to explore more Swing Animated Gradients, check out the <Link to="/swingkit/animated-gradients" className='swing-ocean-gradient-text'> Animated 
        Gradient Collection. </Link>.
      </p>

      <h2 className='text-xl sm:text-2xl font-semibold mb-4 '>Properties</h2>
            <div className='w-full mb-12 overflow-x-auto'>
              <table
                className={`w-full border-collapse rounded-lg overflow-hidden ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <thead>
                  <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <th className='py-3 px-4 text-left font-semibold'>
                      Class Name
                    </th>
                    <th className='py-3 px-4 text-left font-semibold'>
                      Section
                    </th>

                    <th className='py-3 px-4 text-left font-semibold'>
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {propertiesData.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-t ${
                        darkMode ? 'border-gray-700' : 'border-gray-200'
                      }`}
                    >
                      <td className='py-3 px-4'>
                        <code
                          className={`px-2 py-1 rounded text-sm ${
                            darkMode ? 'bg-gray-700' : 'bg-gray-200'
                          }`}
                        >
                          .{item.className}
                        </code>
                      </td>
                      <td className='py-3 px-4'>{item.section}</td>
                      <td className='py-3 px-4'>{item.description}</td>
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
