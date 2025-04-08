import React from 'react';
import { Routes, Route } from 'react-router';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../context/ThemeContext';

import Login from '../docs/Forms/Login/Login';
import Register from '../docs/Forms/Register/Register';
import Newsletter from '../docs/Forms/Newsletter/Newsletter';
import Contact from '../docs/Forms/ContactUs/ContactUs';

const Form = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex min-h-screen w-full font-[var(--font-poppins)] ${
        darkMode ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]' : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      <div
        className={`w-64 flex-shrink-0 shadow-lg ${
          darkMode ? 'bg-[var(--dark-navbar-bg)]' : 'bg-[var(--light-navbar-bg)]'
        }`}
      >
        <Sidebar />
      </div>

      <div className='flex-1 flex flex-col'>
        <div
          className={`flex-1 p-6 overflow-auto shadow-md rounded-lg ${
            darkMode ? 'bg-[var(--dark-bg)]' : 'bg-[var(--light-bg)]'
          }`}
        >
          <Routes>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='newsletter' element={<Newsletter />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Form;
