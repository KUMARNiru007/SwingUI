import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      <h1 className="text-5xl font-bold mb-4">Welcome to Swing UI</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        A simple and powerful UI Library built with tailwindcss.
      </p>
      <Link
        to="/docs"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Home;
