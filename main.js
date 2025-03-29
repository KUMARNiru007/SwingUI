document.addEventListener('DOMContentLoaded', () => {
  // Add active class to current page link
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll('#sidebar-nav a');
  
  links.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Copy code snippets
  document.querySelectorAll('pre code').forEach(block => {
    block.addEventListener('click', () => {
      const text = block.textContent;
      navigator.clipboard.writeText(text).then(() => {
        // Show copy feedback
        const originalText = block.textContent;
        block.textContent = 'Copied!';
        setTimeout(() => {
          block.textContent = originalText;
        }, 2000);
      });
    });
  });
});