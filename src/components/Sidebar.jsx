import React from 'react';
import { Link } from 'react-router';

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border-r border-gray-200 dark:border-gray-700 p-6 shadow-lg">
      <nav className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">📖 Docs</h3>
          <div className="mt-2 space-y-2">
            <NavItem to="/docs" label="Docs - Home" />
            <NavItem to="/docs/installation" label="Installation" />
            <NavItem to="/docs/cdn" label="CDN" />
            <NavItem to="/docs/utilities" label="Utilities" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">🛠 Components</h3>
          <div className="mt-2 space-y-2">
            <NavItem to="/components/button" label="Button" />
            <NavItem to="/components/header" label="Header" />
            <NavItem to="/components/footer" label="Footer" />
            <NavItem to="/components/hero" label="Hero Section" />
            <NavItem to="/components/navbar" label="Navbar" />
          </div>
        </div>
      </nav>
    </div>
  );
};

const NavItem = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="block px-4 py-2 text-gray-800 dark:text-gray-300 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600"
    >
      {label}
    </Link>
  );
};

export default Sidebar;
