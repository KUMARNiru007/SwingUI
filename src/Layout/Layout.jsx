import React from 'react';
import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import Docs from './Docs';
import SwingKit from './SwingKit';
import Components from './Components';
import Form from './Form';

const Layout = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs/*" element={<Docs />} />
        <Route path="/components/*" element={<Components />} />
        <Route path="/swingkit/*" element={<SwingKit />} />
        <Route path="/forms/*" element={<Form />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};

export default Layout;
