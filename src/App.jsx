import React from 'react';

import Navbar from "./components/Navbar"; 
import "./index.css"
import Layout from './Layout/Layout';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
    <Navbar />
    <Layout/>
    </div>
  );
};

export default App;
