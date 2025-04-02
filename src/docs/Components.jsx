import React from 'react';
import { Routes, Route } from 'react-router';
import Sidebar from '../components/Sidebar';
import Button from './components/Button/Button';

const Components = () => {
  return (
    <div className='flex'>
      {/* Sidebar */}
      <Sidebar />

      {/* Right Content Area */}
      <div className='flex-1 p-6'>
        <Routes>
          {/* <Route path='/' element={<h1>All Swing UI Components</h1>} /> */}
          <Route path='button' element={<Button />} />
        </Routes>
      </div>
    </div>
  );
};

export default Components;
