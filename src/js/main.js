import { initializeCodeCopy } from './utils/copyCode.js';
import { initializeNavigation } from './utils/navigation.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  initializeCodeCopy();
});