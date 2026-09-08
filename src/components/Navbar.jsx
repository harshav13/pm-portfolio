import React, { useState, useEffect } from 'react';
import { MenuIcon, CancelIcon } from './Hugeicons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about-me' },
    { label: 'Contact', href: 'mailto:harshavalluri52@gmail.com' },
  ];


  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
      scrolled
        ? 'bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#D1D5DB] py-3 shadow-xs'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        {/* Brand logo / title */}
        <a
          href="#"
          className="group flex items-center gap-2 text-base font-semibold text-[#111827] tracking-tight hover:opacity-90 transition-opacity"
        >
          <span className="flex flex-col">
            <span className="leading-tight text-lg font-bold">Harsha Valluri</span>
          </span>
        </a>

        {/* Desktop Navigation Pushed to the Right */}
        <nav className="hidden md:flex items-center gap-6 ml-auto">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group inline-flex items-center text-xs font-medium text-[#4B5563] hover:text-[#433FE5] transition-colors py-1"
            >
              <span className="inline-block transition-transform duration-200 ease-out group-hover:-translate-x-[2px] text-[#9CA3AF] group-hover:text-[#433FE5]">
                [
              </span>
              <span className="px-0.5">{link.label}</span>
              <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-[2px] text-[#9CA3AF] group-hover:text-[#433FE5]">
                ]
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#374151] hover:bg-[#F0F0F0] transition-colors ml-auto cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <CancelIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="max-w-4xl mx-auto md:hidden bg-white border-b border-[#D1D5DB] px-6 py-4 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1 items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center text-sm font-medium text-[#374151] py-2 px-3 rounded-md hover:bg-[#F0F0F0] hover:text-[#433FE5] transition-colors"
              >
                <span className="inline-block transition-transform duration-200 group-hover:-translate-x-[2px] text-[#9CA3AF] group-hover:text-[#433FE5]">
                  [
                </span>
                <span className="px-0.5">{link.label}</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-[2px] text-[#9CA3AF] group-hover:text-[#433FE5]">
                  ]
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
