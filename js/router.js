// SwingUI Router

class Router {
  constructor() {
    this.routes = {};
    this.currentPath = window.location.pathname;
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      this.navigate(window.location.pathname, false);
    });
  }

  // Register a route with its corresponding content
  addRoute(path, callback) {
    this.routes[path] = callback;
  }

  // Navigate to a specific route
  navigate(path, addToHistory = true) {
    if (addToHistory) {
      history.pushState(null, '', path);
    }
    this.currentPath = path;
    
    const route = this.routes[path] || this.routes['/'];
    if (route) {
      route();
    }
  }

  // Initialize router
  init() {
    // Handle initial route
    this.navigate(this.currentPath, false);

    // Handle link clicks
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-route]')) {
        e.preventDefault();
        this.navigate(e.target.getAttribute('data-route'));
      }
    });
  }
}

export default new Router();