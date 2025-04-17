import React, { useState,} from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import './Ratings.css'

const Rating = () => {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();

  const htmlCssCode = `

<section>
  <div class="swing-ratings">
    <label class="angry">
      <input type="radio" value="1" name="swing-ratings" />
      <div>
        <svg class="eye left">
          <use xlink:href="#eye"></use>
        </svg>
        <svg class="eye right">
          <use xlink:href="#eye"></use>
        </svg>
        <svg class="mouth">
          <use xlink:href="#mouth"></use>
        </svg>
      </div>
    </label>
    <label class="sad">
      <input type="radio" value="2" name="swing-ratings" />
      <div>
        <svg class="eye left">
          <use xlink:href="#eye"></use>
        </svg>
        <svg class="eye right">
          <use xlink:href="#eye"></use>
        </svg>
        <svg class="mouth">
          <use xlink:href="#mouth"></use>
        </svg>
      </div>
    </label>
    <label class="ok">
      <input type="radio" value="3" name="swing-ratings" />
      <div></div>
    </label>
    <label class="good">
      <input type="radio" value="4" name="swing-ratings" checked />
      <div>
        <svg class="eye left">
          <use xlink:href="#eye"></use>
        </svg>
        <svg class="eye right">
          <use xlink:href="#eye"></use>
        </svg>
        <svg class="mouth">
          <use xlink:href="#mouth"></use>
        </svg>
      </div>
    </label>
    <label class="happy">
      <input type="radio" value="5" name="swing-ratings" />
      <div>
        <svg class="eye left">
          <use xlink:href="#eye"></use>
        </svg>
        <svg class="eye right">
          <use xlink:href="#eye"></use>
        </svg>
      </div>
    </label>
  </div>
  
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 4" id="eye">
      <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 7" id="mouth">
      <path d="M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5"></path>
    </symbol>
  </svg>
</section>
`;

  return (
    <div
      className={`w-full px-2 py-6 transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        <h2 className='text-3xl sm:text-4xl font-bold mb-2'>Rating Component</h2>
        <p className='mb-10 sm:mb-16'>
          This interactive rating component features animated emoji faces that respond to user selection.
          Each face changes expression when selected, providing visual swing-ratings.
        </p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode ? (
          <div className='flex justify-center items-center h-[300px] bg-gray-200 rounded-lg shadow-md'>
            <div className='p-8 bg-white rounded-xl shadow-lg'>
              <div dangerouslySetInnerHTML={{ __html: htmlCssCode }} />
            </div>
          </div>
        ) : (
          <div className='w-full overflow-x-auto my-4 rounded-xl'>
            <CodeBlock language='html' code={htmlCssCode} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Rating;