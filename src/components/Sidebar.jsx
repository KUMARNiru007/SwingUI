import React from 'react';
import { Link } from 'react-router';

const sections = [
  {
    title: '📘 Getting Started',
    items: [
      { to: '/docs/quick-start', label: 'Quick Start' },
    ],
  },
  {
    title: '🎨 SwingKit',
    items: [
      { to: '/docs/swingkit/gradients', label: 'Gradients' },
      { to: '/docs/swingkit/animated-gradients', label: 'Animated Gradients' },
      { to: '/docs/swingkit/transitions', label: 'Transitions' },
    ],
  },
  {
    title: '🛠 Components',
    items: [
      { to: '/components/accordion', label: 'Accordions' },
      { to: '/components/button', label: 'Buttons' },
      { to: '/components/card', label: 'Cards' },
      { to: '/components/carousel', label: 'Carousel' },
      { to: '/components/call-to-action', label: 'CTA (Call to Action)' },
      { to: '/components/footer', label: 'Footer' },
      { to: '/components/hero', label: 'Hero section' },
      { to: '/components/image-gallery', label: 'Image Gallery' },
      { to: '/components/navbar', label: 'Navbar' },
      { to: '/components/panto-grid', label: 'Panto-grid' },
      { to: '/components/popups', label: 'Pop Ups' },
      { to: '/components/tabs', label: 'Tabs' },
      { to: '/components/testimonials', label: 'Testimonials' },
    ],
  },
  {
    title: '📋 Forms',
    items: [
      { to: '/docs/forms/login', label: 'Login' },
      { to: '/docs/forms/register', label: 'Register' },
      { to: '/docs/forms/newsletter', label: 'Newsletter' },
      { to: '/docs//forms/contact', label: 'Contact Us' },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className='w-64 h-screen overflow-y-auto bg-white/40 backdrop-blur-lg border-r p-6 shadow-lg'>
      <nav className='space-y-4'>
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className='text-lg font-semibold'>{section.title}</h3>
            <div className='mt-2 space-y-2'>
              {section.items.map((item, id) => (
                <NavItem key={id} to={item.to} label={item.label} />
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

const NavItem = ({ to, label }) => {
  return (
    <Link
      to={to}
      className='block px-4 py-2 rounded-lg transition-all duration-300 hover:underline'
    >
      {label}
    </Link>
  );
};

export default Sidebar;
