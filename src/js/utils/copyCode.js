export function initializeCodeCopy() {
  document.querySelectorAll('pre code').forEach(block => {
    block.addEventListener('click', () => {
      const text = block.textContent;
      navigator.clipboard.writeText(text).then(() => {
        const originalText = block.textContent;
        block.textContent = 'Copied!';
        setTimeout(() => {
          block.textContent = originalText;
        }, 2000);
      });
    });
  });
}