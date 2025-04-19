const containerEl = document.querySelector('.relative.h-screen'); // root container
  const cursor = containerEl.querySelector('.w-5.h-5');
  const shape1 = containerEl.querySelector('.bg-blue-600');
  const shape2 = containerEl.querySelector('.bg-red-100');
  const shape3 = containerEl.querySelector('.bg-yellow-400');
  const textEl = containerEl.querySelector('h1');

  function resetPositions() {
    [cursor, shape1, shape2, shape3].forEach(el => {
      if (el) el.style.opacity = '0';
    });
  }

  function handleTextMouseMove(e) {
    const rect = containerEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    [cursor, shape1, shape2, shape3].forEach(el => {
      if (el) {
        el.style.opacity = '1';
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    });
  }

  if (containerEl && textEl) {
    textEl.addEventListener('mousemove', handleTextMouseMove);
    textEl.addEventListener('mouseleave', resetPositions);
    containerEl.addEventListener('mouseleave', resetPositions);
  }

  // Bubble Effect
  const main = document.querySelector('.main');
  const bubbleCursor = main?.querySelector('.cursor');
  const heading = main?.querySelector('h1');

  function handleMouseMove(e) {
    const rect = main.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    requestAnimationFrame(() => {
      bubbleCursor.style.left = `${x}px`;
      bubbleCursor.style.top = `${y}px`;
      if (bubbleCursor.style.opacity !== '1') {
        bubbleCursor.style.opacity = '1';
      }
    });
  }

  function handleMouseEnter() {
    bubbleCursor.style.transform = 'scale(2.5)';
  }

  function handleMouseLeave() {
    bubbleCursor.style.transform = 'scale(1)';
  }

  function handleContainerLeave() {
    bubbleCursor.style.opacity = '0';
  }

  if (main && bubbleCursor && heading) {
    main.addEventListener('mousemove', handleMouseMove);
    main.addEventListener('mouseleave', handleContainerLeave);
    heading.addEventListener('mouseenter', handleMouseEnter);
    heading.addEventListener('mouseleave', handleMouseLeave);
  }

