import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Docs from './docs/Docs';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/docs/*' element={<Docs />} />
    </Routes>
  );
};

export default App;
