import React, { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg shadow-md fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
          🚀 Swing UI
        </Link>

        <div className="hidden md:flex space-x-6">
          <NavItem to="/" label="Home" />
          <NavItem to="/docs" label="Docs" />
          <NavItem to="/components" label="Components" />
        </div>

        <button className="md:hidden p-2 text-gray-800 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 p-4 shadow-lg border-t border-gray-200 dark:border-gray-700">
          <NavItem to="/" label="Home" onClick={() => setIsOpen(false)} />
          <NavItem to="/docs" label="Docs" onClick={() => setIsOpen(false)} />
          <NavItem to="/components" label="Components" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ to, label, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-2 text-gray-800 dark:text-gray-300 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600"
    >
      {label}
    </Link>
  );
};

export default Navbar;
