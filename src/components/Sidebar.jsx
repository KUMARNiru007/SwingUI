import React from "react";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Docs</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/docs" className="hover:text-gray-300">Installation</Link>
        </li>
        <li>
          <Link to="/docs/cdn" className="hover:text-gray-300">CDN</Link>
        </li>
        <li>
          <Link to="/docs/components" className="hover:text-gray-300">Components</Link>
        </li>
        <li>
          <Link to="/docs/utilities" className="hover:text-gray-300">Utilities</Link>
        </li>
        <li>
          <Link to="/docs/button" className="hover:text-gray-300">Button</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
