import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Docs from './docs/Docs';
import Components from "./docs/Components";
import Navbar from "./components/Navbar"; 
import "./index.css"

const App = () => {
  return (
    <div className="flex flex-col min-h-screen --font-body">
      <Navbar />
      <div className="flex-1 pt-16">
        <Routes>
    
          <Route path="/" element={<div className="w-full"><Home /></div>} />
          <Route 
            path="/docs/*" 
            element={
              <div className="w-full max-w-xxl mx-auto px-4 sm:px-6 lg:px-8">
                <Docs />
              </div>
            } 
          />
          <Route 
            path="/components/*" 
            element={
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Components />
              </div>
            } 
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
