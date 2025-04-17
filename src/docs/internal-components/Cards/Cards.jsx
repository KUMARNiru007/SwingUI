import React, { useState } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';
import '../../SwingKit/Gradients/style.css';
import './style.css';

const CardsDemo = () => {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();
  const [showCard, setShowCard] = useState(false);

  const htmlCssCode = `
<div class="w-full flex justify-center">
  <div class="flex flex-wrap justify-center w-full max-w-4xl bg-gray-200 rounded-lg p-6 mx-auto">
    
    <!-- Card 1 -->
    <div class="group relative h-auto min-h-72 w-full lg:w-[48%] mb-6 lg:mr-[2%] transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2" style="max-width: 350px;">
      <div class="absolute top-1 left-1 h-full w-full swing-ocean-gradient border-2 border-black -z-10 transition-all duration-300 group-hover:top-2 group-hover:left-2"></div>
      <div class="absolute top-2 left-2 h-full w-full swing-ocean-gradient border-2 border-black -z-20 transition-all duration-300 group-hover:top-4 group-hover:left-4"></div>

 
      <div class="relative flex flex-col justify-between h-full w-full p-6 swing-ocean-gradient border-2 border-black">
        <div class="flex flex-col justify-between h-full">
          <h1 class="font-semibold text-2xl text-gray-900">DYNAMIC</h1>
          <p class="text-[18px] text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae molestias culpa nesciunt assumenda mollitia.
          </p>
        </div>
        <a href="#!" class="hidden group-hover:flex justify-center w-full py-2 mt-4 bg-white border-2 border-black font-semibold transition duration-300 text-gray-900">
          LET'S GO
        </a>
        <a href="#!" class="flex xl:hidden justify-center w-full py-2 mt-4 bg-white border-2 border-black font-semibold text-gray-900">
          LET'S GO
        </a>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="group relative h-auto min-h-72 w-full lg:w-[48%] mb-6 lg:ml-[2%] transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2" style="max-width: 350px;">
      <div class="absolute top-1 left-1 h-full w-full swing-peach-gradient border-2 border-black -z-10 transition-all duration-300 group-hover:top-2 group-hover:left-2"></div>
      <div class="absolute top-2 left-2 h-full w-full swing-peach-gradient border-2 border-black -z-20 transition-all duration-300 group-hover:top-4 group-hover:left-4"></div>

   
      <div class="relative flex flex-col justify-between h-full w-full p-6 swing-peach-gradient border-2 border-black">
        <div class="flex flex-col justify-between h-full">
          <h1 class="font-semibold text-2xl text-gray-900">DATA DRIVEN</h1>
          <p class="text-[18px] text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae molestias culpa nesciunt assumenda mollitia.
          </p>
        </div>
        <a href="#!" class="hidden group-hover:flex justify-center w-full py-2 mt-4 bg-white border-2 border-black font-semibold transition duration-300 text-gray-900">
          LET'S GO
        </a>
        <a href="#!" class="flex xl:hidden justify-center w-full py-2 mt-4 bg-white border-2 border-black font-semibold text-gray-900">
          LET'S GO
        </a>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="group relative h-auto min-h-72 w-full lg:w-[48%] mb-6 lg:mr-[2%] transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2" style="max-width: 350px;">
      <div class="absolute top-1 left-1 h-full w-full swing-fire-gradient border-2 border-black -z-10 transition-all duration-300 group-hover:top-2 group-hover:left-2"></div>
      <div class="absolute top-2 left-2 h-full w-full swing-fire-gradient border-2 border-black -z-20 transition-all duration-300 group-hover:top-4 group-hover:left-4"></div>

    
      <div class="relative flex flex-col justify-between h-full w-full p-6 swing-fire-gradient border-2 border-black">
        <div class="flex flex-col justify-between h-full">
          <h1 class="font-semibold text-2xl text-gray-900">DUTIFUL</h1>
          <p class="text-[18px] text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae molestias culpa nesciunt assumenda mollitia.
          </p>
        </div>
        <a href="#!" class="hidden group-hover:flex justify-center w-full py-2 mt-4 bg-white border-2 border-black font-semibold transition duration-300 text-gray-900">
          LET'S GO
        </a>
        <a href="#!" class="flex xl:hidden justify-center w-full py-2 mt-4 bg-white border-2 border-black font-semibold text-gray-900">
          LET'S GO
        </a>
      </div>
    </div>

    <!-- Card 4 -->
    <div class="group relative h-auto min-h-72 w-full lg:w-[48%] mb-6 lg:ml-[2%] transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2" style="max-width: 350px;">
      <div class="absolute top-1 left-1 h-full w-full swing-love-gradient border-2 border-black -z-10 transition-all duration-300 group-hover:top-2 group-hover:left-2"></div>
      <div class="absolute top-2 left-2 h-full w-full swing-love-gradient border-2 border-black -z-20 transition-all duration-300 group-hover:top-4 group-hover:left-4"></div>

      <div class="relative flex flex-col justify-between h-full w-full p-6 swing-love-gradient border-2 border-black">
        <div class="flex flex-col justify-between h-full">
          <h1 class="font-semibold text-2xl text-gray-900">DEMURE</h1>
          <p class="text-[18px] text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae molestias culpa nesciunt assumenda mollitia.
          </p>
        </div>
        <a href="#!" class="hidden group-hover:flex justify-center w-full py-2 mt-4 bg-white border-2 border-black font-semibold transition duration-300 text-gray-900">
          LET'S GO
        </a>
        <a href="#!" class="flex xl:hidden justify-center w-full py-2 mt-4 bg-white border-2 border-black font-semibold text-gray-900">
          LET'S GO
        </a>
      </div>
    </div>
  </div>
</div>
`;

  const htmlCssCode2 = `
<div class="max-w-6xl mx-auto">
      <div class="flex flex-wrap items-start py-12">
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div class="overflow-hidden rounded-3xl">
            <a
              href="#!"
              class="course-bg-hover block p-6 bg-zinc-900 overflow-hidden relative"
            >
              <div
                class="course-bg h-32 w-32 bg-yellow-500 absolute -top-20 -right-20 rounded-full transition-all duration-500"
              ></div>
              <div
                class="min-h-[87px] mb-3 font-bold text-3xl text-white relative z-10"
              >
                UI/Web &amp; Graph design
              </div>
              <div class="card-text text-zinc-400 text-base mb-4 relative z-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div class="relative z-10">
                <span class="know-more text-yellow-500 inline-block"
                  >Know more</span
                >
              </div>
            </a>
          </div>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div class="overflow-hidden rounded-3xl">
            <a
              href="#!"
              class="course-bg-hover block p-6 bg-zinc-900 overflow-hidden relative"
            >
              <div
                class="course-bg h-32 w-32 bg-green-500 absolute -top-20 -right-20 rounded-full transition-all duration-500"
              ></div>
              <div
                class="min-h-[87px] mb-3 font-bold text-3xl text-white relative z-10"
              >
                UX/UI Web-Design&#160;+ Mobile Design
              </div>
              <div class="card-text text-zinc-400 text-base mb-4 relative z-10">
                Lorem ipsum dolor sit amet, consectetur elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div class="relative z-10">
                <span class="know-more text-green-500 inline-block"
                  >Know more</span
                >
              </div>
            </a>
          </div>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div class="overflow-hidden rounded-3xl">
            <a
              href="#!"
              class="course-bg-hover block p-6 bg-zinc-900 overflow-hidden relative"
            >
              <div
                class="course-bg h-32 w-32 bg-red-600 absolute -top-20 -right-20 rounded-full transition-all duration-500"
              ></div>
              <div
                class="min-h-[87px] mb-3 font-bold text-3xl text-white relative z-10"
              >
                Annual package "Product+UX/UI"
              </div>
              <div class="card-text text-zinc-400 text-base mb-4 relative z-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div class="relative z-10">
                <span class="know-more text-red-600 inline-block"
                  >Know more</span
                >
              </div>
            </a>
          </div>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div class="overflow-hidden rounded-3xl">
            <a
              href="#!"
              class="course-bg-hover block p-6 bg-zinc-900 overflow-hidden relative"
            >
              <div
                class="course-bg h-32 w-32 bg-purple-600 absolute -top-20 -right-20 rounded-full transition-all duration-500"
              ></div>
              <div
                class="min-h-[87px] mb-3 font-bold text-3xl text-white relative z-10"
              >
                Graphic Design
              </div>
              <div class="card-text text-zinc-400 text-base mb-4 relative z-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div class="relative z-10">
                <span class="know-more text-purple-600 inline-block"
                  >Know more</span
                >
              </div>
            </a>
          </div>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div class="overflow-hidden rounded-3xl">
            <a
              href="#!"
              class="course-bg-hover block p-6 bg-zinc-900 overflow-hidden relative"
            >
              <div
                class="course-bg h-32 w-32 bg-pink-600 absolute -top-20 -right-20 rounded-full transition-all duration-500"
              ></div>
              <div
                class="min-h-[87px] mb-3 font-bold text-3xl text-white relative z-10"
              >
                Motion Design
              </div>
              <div class="card-text text-zinc-400 text-base mb-4 relative z-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div class="relative z-10">
                <span class="know-more text-pink-600 inline-block"
                  >Know more</span
                >
              </div>
            </a>
          </div>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div class="overflow-hidden rounded-3xl">
            <a
              href="#!"
              class="course-bg-hover block p-6 bg-zinc-900 overflow-hidden relative"
            >
              <div
                class="course-bg h-32 w-32 bg-indigo-600 absolute -top-20 -right-20 rounded-full transition-all duration-500"
              ></div>
              <div
                class="min-h-[87px] mb-3 font-bold text-3xl text-white relative z-10"
              >
                Front-end development
              </div>
              <div class="card-text text-zinc-400 text-base mb-4 relative z-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div class="relative z-10">
                <span class="know-more text-indigo-600 inline-block"
                  >Know more</span
                >
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>`;

  return (
    <div
      className={`[@media(min-width:300px)_and_(max-width:350px)]:w-[325px] w-full py-6 transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      } px-4`}
    >
      <div className='max-w-5xl mx-auto py-8 sm:py-12'>
        <h2 className='text-3xl sm:text-4xl font-bold mb-2 pb-4'>
          Spring cards
        </h2>
        <p className='mb-10 sm:mb-16'>
          This card demo utilizes Swing-inspired gradients and smooth hover
          effects to create dynamic, interactive UI components. It showcases a
          visually engaging experience with seamless transitions and modern
          design aesthetics.
        </p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode && (
          <div className='flex justify-center items-center min-h-[12rem] bg-gray-200 rounded-lg shadow-md'>
            <div
              className='w-full'
              dangerouslySetInnerHTML={{ __html: htmlCssCode }}
            />
          </div>
        )}

        {showCode && (
          <div className='w-full overflow-x-auto my-4 rounded-xl'>
            <CodeBlock language='html' code={htmlCssCode} />
          </div>
        )}
      </div>
      <div className='max-w-5xl mx-auto py-8 sm:py-12'>
        <h2 className='text-3xl sm:text-4xl font-bold mb-2 pb-4'>
          Hover Cards
        </h2>
        <p className='mb-10 sm:mb-16'>
          This card demo utilizes Swing-inspired gradients and smooth hover
          effects to create dynamic, interactive UI components. It showcases a
          visually engaging experience with seamless transitions and modern
          design aesthetics.
        </p>

        <PreviewCodeBtn showCode={showCard} setShowCode={setShowCard} />

        {!showCard && (
          <div className='flex justify-center items-center min-h-[12rem] bg-gray-200 rounded-lg shadow-md'>
            <div
              className='w-full'
              dangerouslySetInnerHTML={{ __html: htmlCssCode2 }}
            />
          </div>
        )}

        {showCard && (
          <div className='w-full overflow-x-auto my-4 rounded-xl'>
            <CodeBlock language='html' code={htmlCssCode2} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardsDemo;
