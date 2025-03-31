// SwingUI Main Entry Point
import '../styles/main.css';
import router from './router.js';

const SwingUI = {
  version: '1.0.0',
  components: {},

  register(name, component) {
    this.components[name] = component;
  },

  init() {
    this.initRouter();
    console.log('SwingUI initialized');
  },

  initRouter() {
    // Define routes
    router.addRoute('/', () => {
      document.querySelector('main').innerHTML = `
        <button class="get-started" data-route="/docs">Get Started</button>
      `;
    });

    router.addRoute('/docs', () => {
      document.querySelector('main').innerHTML = `
        <div class="docs-layout">
          <aside class="docs-sidebar">
            <section>
              <h3>Get Started</h3>
              <ul>
                <li><a href="#" data-route="/docs/installation">Installation</a></li>
                <li><a href="#" data-route="/docs/usage">Usage Guide</a></li>
              </ul>
            </section>
            <section>
              <h3>Components</h3>
              <ul>
                <li><a href="#" data-route="/docs/components/button">Button</a></li>
                <li><a href="#" data-route="/docs/components/accordion">Accordion</a></li>
              </ul>
            </section>
          </aside>
          <main class="docs-content">
            <h1>Welcome to SwingUI</h1>
            <p>A modern, lightweight UI component library for building beautiful web applications.</p>
          </main>
        </div>
      `;
    });

    // Initialize router
    router.init();
  }
};

// Auto-initialize when loaded
document.addEventListener('DOMContentLoaded', () => {
  SwingUI.init();
});

export default SwingUI;