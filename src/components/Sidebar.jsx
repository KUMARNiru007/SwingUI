import React from 'react';
import { Link, useLocation } from 'react-router';
import { useTheme } from '../context/ThemeContext';

const sections = [
  {
    title: 'Getting Started',
    items: [
      { to: '/guide/docs/quick-start', label: 'Quick Start' },
      // { to: '/guide/docs/cdn', label: 'CDN' },
    ],
  },
  {
    title: 'SwingKit',
    items: [
      { to: '/guide/swingkit/gradients', label: 'Gradients' },
      { to: '/guide/swingkit/animated-gradients', label: 'Animated Gradients' },
      { to: '/guide/swingkit/text-gradients', label: 'Text Gradients' },
    ],
  },
  {
    title: 'Components',
    items: [
      // { to: '/guide/components/accordion', label: 'Accordions' },
      { to: '/guide/components/button', label: 'Buttons' },
      { to: '/guide/components/card', label: 'Cards' },
      // { to: '/guide/components/carousel', label: 'Carousel' },
      // { to: '/guide/components/call-to-action', label: 'CTA (Call to Action)' },
      { to: '/guide/components/feature', label: 'Feature' },
      // { to: '/guide/components/footer', label: 'Footer' },
      // { to: '/guide/components/hero', label: 'Hero section' },
      { to: '/guide/components/image-gallery', label: 'Image Gallery' },
      { to: '/guide/components/navbar', label: 'Navbar' },
      // { to: '/guide/components/panto-grid', label: 'Panto-grid' },
      // { to: '/guide/components/popups', label: 'Pop Ups' },
      { to: '/guide/components/pricing', label: 'Pricing' },
      { to: '/guide/components/tabs', label: 'Tabs' },
      { to: '/guide/components/testimonials', label: 'Testimonials' },
    ],
  },
  // {
  //   title: 'Forms',
  //   items: [
  //     { to: '/guide/forms/login', label: 'Login' },
  //     { to: '/guide/forms/register', label: 'Register' },
  //     { to: '/guide/forms/newsletter', label: 'Newsletter' },
  //     { to: '/guide/forms/contact', label: 'Contact Us' },
  //   ],
  // },
];

const Sidebar = () => {
  const { darkMode } = useTheme();

  return (
    <aside
      className={`fixed top-[74px] left-0 h-[calc(100dvh_-_74px)] w-[280px]  transition-colors duration-300 overflow-y-auto px-4 border-r shadow-md
        ${
          darkMode
            ? 'bg-[var(--dark-navbar-bg)] text-[var(--color-text)] transition-colors duration-300'
            : 'bg-[var(--light-navbar-bg)] text-[var(--color-text)] transition-colors duration-300'
        }`}
    >
      <nav className='py-6'>
        {sections.map((section, index) => (
          <div key={index}>
            <div
              className={`text-sm font-semibold px-2 py-4 tracking-wide opacity-70
                ${
                  darkMode
                    ? 'text-[var(--dark-nav-default)]'
                    : 'text-[var(--light-nav-default)]'
                }`}
            >
              {section.title}
            </div>
            <div className='flex flex-col gap-1'>
              {section.items.map((item, id) => (
                <NavItem
                  key={id}
                  to={item.to}
                  label={item.label}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

const NavItem = ({ to, label, darkMode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`
        block px-6 py-2 text-sm no-underline transition-colors duration-300
        ${
          isActive
            ? 'text-[var(--color-primary)] font-semibold'
            : darkMode
            ? 'text-[var(--dark-nav-default)] hover:text-[var(--dark-nav-hover)]'
            : 'text-[var(--color-text)] hover:text-[var(--light-nav-hover)]'
        }
      `}
    >
      {label}
    </Link>
  );
};

export default Sidebar;
