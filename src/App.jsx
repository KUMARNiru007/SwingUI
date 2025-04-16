import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './index.css';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide/*" element={<Layout />} />
      </Routes>
    </div>
  );
};

export default App;
