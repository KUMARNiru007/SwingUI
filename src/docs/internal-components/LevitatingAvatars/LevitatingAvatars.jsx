import React, { useState, useEffect, useRef } from 'react';
import PreviewCodeBtn from '../../../components/PreviewCodeBtn.jsx';
import { useTheme } from '../../../context/ThemeContext.jsx';
import CodeBlock from '../../components/CodeBlock/CodeBlock.jsx';

import pic1 from '../../../assets/Images-for-avatar/pic1.webp';
import pic2 from '../../../assets/Images-for-avatar/pic2.webp';
import pic3 from '../../../assets/Images-for-avatar/pic3.webp';
import pic4 from '../../../assets/Images-for-avatar/pic4.webp';
import pic5 from '../../../assets/Images-for-avatar/pic5.webp';
import pic6 from '../../../assets/Images-for-avatar/pic6.webp';
import pic7 from '../../../assets/Images-for-avatar/pic7.webp';
import pic8 from '../../../assets/Images-for-avatar/pic8.webp';
import pic9 from '../../../assets/Images-for-avatar/pic9.webp';

function LevitatingAvatars() {
  const [showCode, setShowCode] = useState(false);
  const { darkMode } = useTheme();
  const containerRef = useRef(null);

  useEffect(() => {
    const center = containerRef.current?.querySelector('.center');
    const orbits = containerRef.current?.querySelectorAll('[data-scale]');
    const animationRefs = [];

    if (!center || orbits.length === 0) return;

    function updateSizes() {
      const containerSize = center.offsetWidth;
      const baseIconSize = containerSize * 0.15;

      orbits.forEach((orbit) => {
        const scale = parseFloat(orbit.getAttribute('data-scale'));
        const ringSize = containerSize * scale * 2;
        orbit.style.width = `${ringSize}px`;
        orbit.style.height = `${ringSize}px`;
        orbit.dataset.radius = (ringSize / 2).toFixed(1);

        const icons = orbit.querySelectorAll('.orbit-icon');
        const iconSize = baseIconSize * scale * 2;
        icons.forEach((icon) => {
          icon.style.width = `${iconSize}px`;
          icon.style.height = `${iconSize}px`;
        });
      });
    }

    function animateOrbit(orbit) {
      const icons = orbit.querySelectorAll('.orbit-icon');
      const speed = parseFloat(orbit.dataset.speed);
      let angle = Math.random() * Math.PI * 2;
      const direction = orbit.getAttribute('data-direction');

      function animate() {
        const radius = parseFloat(orbit.dataset.radius);
        angle += (direction === 'clockwise' ? 1 : -1) * 0.008 * speed;

        icons.forEach((icon, index) => {
          const offsetAngle = angle + (Math.PI * 2 * index) / icons.length;
          const x = Math.cos(offsetAngle) * radius;
          const y = Math.sin(offsetAngle) * radius;

          icon.style.left = `calc(50% + ${x}px)`;
          icon.style.top = `calc(50% + ${y}px)`;
        });

        const frameId = requestAnimationFrame(animate);
        animationRefs.push(frameId);
      }

      animate();
    }

    window.addEventListener('resize', updateSizes);
    updateSizes();
    orbits.forEach(animateOrbit);

    return () => {
      window.removeEventListener('resize', updateSizes);
      animationRefs.forEach(cancelAnimationFrame);
    };
  });

  // ✅ Create dynamic HTML string with actual image paths
  const htmlCssCode = `
<div class="bg-white flex justify-center items-center h-screen overflow-hidden">
  <div class="center relative w-1/4 h-1/4 max-w-xs max-h-xs md:w-1/3 md:h-1/3 lg:w-1/2 lg:h-1/2">
    <div class="absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-300" data-scale="0.5" data-speed="0.3" data-direction="clockwise">
      <img src="${pic1}" class="absolute -translate-x-1/2 -translate-y-1/2 orbit-icon rounded-full border border-black" />
      <img src="${pic2}" class="absolute -translate-x-1/2 -translate-y-1/2 orbit-icon rounded-full border border-black" />
      <img src="${pic3}" class="absolute -translate-x-1/2 -translate-y-1/2 orbit-icon rounded-full border border-black" />
      <img src="${pic4}" class="absolute -translate-x-1/2 -translate-y-1/2 orbit-icon rounded-full border border-black" />
    </div>
    <div class="absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-300" data-scale="0.83" data-speed="0.3" data-direction="anticlockwise">
      <img src="${pic5}" class="absolute -translate-x-1/2 -translate-y-1/2 orbit-icon rounded-full border border-black" />
      <img src="${pic6}" class="absolute -translate-x-1/2 -translate-y-1/2 orbit-icon rounded-full border border-black" />
      <img src="${pic7}" class="absolute -translate-x-1/2 -translate-y-1/2 orbit-icon rounded-full border border-black" />
      <img src="${pic8}" class="absolute -translate-x-1/2 -translate-y-1/2 orbit-icon rounded-full border border-black" />
      <img src="${pic9}" class="absolute -translate-x-1/2 -translate-y-1/2 orbit-icon rounded-full border border-black" />
    </div>
    <!-- Centered Logo -->
   <div class="absolute text-8x1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <img src="/logo.webp" class="h-20 object-contain" alt="SwingUI Logo" />
    </div>
  </div>
</div>`;

  return (
    <div
      className={`Feature-custom-width transition-colors duration-300 ${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      <div className="max-w-5xl mx-auto responsive-width px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 pb-4">Levitating Avatars</h2>
        <p className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          The LevitatingAvatars component displays orbiting avatars using pure HTML/CSS and JavaScript-style animation via React hooks. The animation is smooth and fully responsive.
        </p>

        <PreviewCodeBtn showCode={showCode} setShowCode={setShowCode} />

        {!showCode && (
          <div className="flex justify-center items-center min-h-[12rem] bg-gray-200 rounded-lg shadow-md">
            <div
              ref={containerRef}
              className="w-full"
              dangerouslySetInnerHTML={{ __html: htmlCssCode }}
            />
          </div>
        )}

        {showCode && (
          <div className="w-full overflow-x-auto my-4 rounded-lg sm:rounded-xl">
            <CodeBlock language="html" code={htmlCssCode} />
          </div>
        )}

        <hr
        className={`my-10 border-t ${
          darkMode ? 'border-gray-700 opacity-30' : 'border-gray-300 opacity-50'
        }`}
      />
      </div>
    </div>
  );
}

export default LevitatingAvatars;
