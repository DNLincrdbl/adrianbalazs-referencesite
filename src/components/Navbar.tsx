'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', text: 'Start' },
    { href: '#about', text: 'Über Uns' },
    { href: '#references', text: 'Referenzen' },
    { href: '#contact', text: 'Kontakt' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-red-900' : 'text-white'
              }`}>
                Adrian Balazs
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-stone-700 hover:text-red-900' 
                    : 'text-white hover:text-red-100'
                }`}
              >
                {link.text}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-900 to-red-800 text-white font-medium hover:from-red-800 hover:to-red-700 transition-all shadow-md hover:shadow-lg"
            >
              Kostenlos Beraten
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
                isScrolled 
                  ? 'text-stone-700 hover:text-red-900 hover:bg-stone-100' 
                  : 'text-white hover:text-red-100 hover:bg-white/10'
              }`}
            >
              <span className="sr-only">Menü öffnen</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden bg-white/95 backdrop-blur-sm`}>
        <div className="px-4 pt-2 pb-3 space-y-1 border-t border-stone-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-red-900 hover:bg-stone-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </Link>
          ))}
          <Link
            href="#contact"
            className="block px-3 py-2 text-base font-medium text-white bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 rounded-lg text-center shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Kostenlos Beraten
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 