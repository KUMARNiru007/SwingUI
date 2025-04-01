const iframe = document.getElementById("left-navigation");
const componentPage = document.getElementById('component-page');

// Wait for iframe to load first
iframe.addEventListener('load', () => {
    const iframeDoc = iframe.contentDocument;
    
    // Single event listener for all clicks in the navigation
    iframeDoc.body.addEventListener('click', (event) => {
        event.preventDefault();
      const target = event.target.closest('.getting-Started, .components');
      
      if (!target) return; // Ignore clicks on non-relevant elements
      
      
      
      // Determine base path based on class
      const basePath = target.classList.contains('getting-Started') ? './' : '../';
      updateIframeContent(target, basePath);
    });
  });

// Generic function to handle iframe creation
function updateIframeContent(element, basePath) {
  const className = element.classList[0] || 'default-class';
  const contentPath = `${basePath}${className}/${element.id}/index.html`;
  console.log(contentPath);
  
  
  componentPage.innerHTML = `
    <iframe
      id="${element.id}-${className}"
      src="${contentPath}"
      title="${element.id}-${className}"
      class="w-full h-full border-0 scrollbar-hide"
    ></iframe>`;
}