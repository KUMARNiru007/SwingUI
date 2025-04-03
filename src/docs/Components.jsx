import React from 'react';
import { Routes, Route } from 'react-router';
import Sidebar from '../components/Sidebar';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

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
