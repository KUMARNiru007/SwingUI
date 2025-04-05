import React from 'react';
import { Routes, Route } from 'react-router';
import Sidebar from '../components/Sidebar';
import Button from './internal-components/Button/Button';
import Footer from './internal-components/Footer/Footer';
import Header from './internal-components/Header/Header';
import Hero from './internal-components/Hero/Hero';
import Navbar from './internal-components/Navbar/Navbar';

const Components = () => {
  return (
    <div className='flex'>
  
      <Sidebar />
      <div className='flex-1 p-6'>
        <Routes>      
          <Route path='button' element={<Button />} />
          <Route path='header' element={<Header />} />
          <Route path='footer' element={<Footer />} />
          <Route path='hero' element={< Hero/>} />
          <Route path='navbar' element={< Navbar/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Components;
