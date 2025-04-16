import React from 'react';
import { Routes, Route } from 'react-router';
import { useTheme } from '../context/ThemeContext.jsx';

import Accordion from '../docs/internal-components/Accordions/Accordions.jsx';
import Button from '../docs/internal-components/Button/Button.jsx';
import CallToAction from '../docs/internal-components/CallToAction/CallToAction.jsx';
import Card from '../docs/internal-components/Cards/Cards.jsx';
import Carousel from '../docs/internal-components/Carousel/Carousel.jsx';
import Feature from '../docs/internal-components/Feature/Feature.jsx';
import Footer from '../docs/internal-components/Footer/Footer.jsx';
import Header from '../docs/internal-components/Header/Header.jsx';
import Hero from '../docs/internal-components/Hero/Hero.jsx';
import ImageGallery from '../docs/internal-components/ImageGallery/ImageGallery.jsx';
import Navbar from '../docs/internal-components/Navbar/Navbar.jsx';
import PantoGrid from '../docs/internal-components/PantoGrid/PantoGrid.jsx';
import PopUps from '../docs/internal-components/PopUps/PopUps.jsx';
import Tabs from '../docs/internal-components/Tabs/Tabs.jsx';
import Testimonials from '../docs/internal-components/Testimonials/Testimonials.jsx';
import Pricing from '../docs/internal-components/Prcing/Pricing.jsx';

const Components = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex min-h-screen w-full  transition-colors duration-300${
        darkMode
          ? 'bg-[var(--dark-bg)] text-[var(--color-text-dark)]'
          : 'bg-[var(--light-bg)] text-[var(--color-text)]'
      }`}
    >
      <div className='flex-1 flex flex-col'>
        <div
          className={` overflow-auto  rounded-lg transition-colors duration-300${
            darkMode ? 'bg-[var(--dark-bg)]' : 'bg-[var(--light-bg)]'
          }`}
        >
          <Routes>
            {/* <Route path='accordion' element={<Accordion />} /> */}
            <Route path='button' element={<Button />} />
            {/* <Route path='call-to-action' element={<CallToAction />} /> */}
            <Route path='card' element={<Card />} />
            {/* <Route path='carousel' element={<Carousel />} /> */}
            <Route path='feature' element={<Feature />} />
            {/* <Route path='footer' element={<Footer />} /> */}
            <Route path='header' element={<Header />} />
            {/* <Route path='hero' element={<Hero />} /> */}
            <Route path='image-gallery' element={<ImageGallery />} />
            <Route path='navbar' element={<Navbar />} />
            <Route path='panto-grid' element={<PantoGrid />} />
            {/* <Route path='popups' element={<PopUps />} /> */}
            <Route path='tabs' element={<Tabs />} />
            <Route path='testimonials' element={<Testimonials />} />
            <Route path='pricing' element={<Pricing />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Components;
