import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './utils/scrollToTop.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ThemeProvider>
        <ScrollToTop />
        <App />
      </ThemeProvider>
    </StrictMode>
  </BrowserRouter>,
);
