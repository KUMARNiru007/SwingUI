import React from 'react';
import { Routes, Route } from 'react-router';
import Sidebar from '../components/Sidebar';

// Import all internal components
import Accordion from './internal-components/Accordions/Accordions';
import Button from './internal-components/Button/Button';
import CallToAction from './internal-components/CallToAction/CallToAction';
import Card from './internal-components/Cards/Cards';
import Carousel from './internal-components/Carousel/Carousel';
import Footer from './internal-components/Footer/Footer';
import Header from './internal-components/Header/Header';
import Hero from './internal-components/Hero/Hero';
import ImageGallery from './internal-components/ImageGallery/ImageGallery';
import Navbar from './internal-components/Navbar/Navbar';
import PantoGrid from './internal-components/PantoGrid/PantoGrid';
import PopUps from './internal-components/PopUps/PopUps';
import Tabs from './internal-components/Tabs/Tabs';
import Testimonials from './internal-components/Testimonials/Testimonials';

const Components = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 p-6'>
        <Routes>
          <Route path='accordion' element={<Accordion />} />
          <Route path='button' element={<Button />} />
          <Route path='call-to-action' element={<CallToAction />} />
          <Route path='card' element={<Card />} />
          <Route path='carousel' element={<Carousel />} />
          <Route path='footer' element={<Footer />} />
          <Route path='header' element={<Header />} />
          <Route path='hero' element={<Hero />} />
          <Route path='image-gallery' element={<ImageGallery />} />
          <Route path='navbar' element={<Navbar />} />
          <Route path='panto-grid' element={<PantoGrid />} />
          <Route path='popups' element={<PopUps />} />
          <Route path='tabs' element={<Tabs />} />
          <Route path='testimonials' element={<Testimonials />} />
        </Routes>
      </div>
    </div>
  );
};

export default Components;
