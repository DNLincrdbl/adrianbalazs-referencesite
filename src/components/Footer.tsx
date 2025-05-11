import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Leistungen',
      links: [
        { text: 'Dachdeckerarbeiten', href: '#services' },
        { text: 'Dachdecker', href: '#services' },
        { text: 'Dachfenster', href: '#services' },
        { text: 'Energieberatung', href: '#services' },
      ],
    },
    {
      title: 'Unternehmen',
      links: [
        { text: 'Über uns', href: '#about' },
        { text: 'Referenzen', href: '#references' },
        { text: 'Kontakt', href: '#contact' },
      ],
    },
    {
      title: 'Rechtliches',
      links: [
        { text: 'Impressum', href: '/impressum' },
        { text: 'Datenschutz', href: '/datenschutz' },
        { text: 'AGB', href: '/agb' },
      ],
    },
  ];

  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              Adrian Balazs
            </h3>
            <p className="text-stone-400 mb-4">
              Ihr zuverlässiger Partner für alle Arbeiten rund ums Dach – mit 17 Jahren Erfahrung im Dachdeckerhandwerk.
            </p>
          </div>

          {/* Navigation Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.href}
                      className="text-stone-400 hover:text-red-500 transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-stone-400 text-sm">
              © {currentYear} Adrian Balazs. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="/impressum"
                className="text-stone-400 hover:text-red-500 transition-colors text-sm"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-stone-400 hover:text-red-500 transition-colors text-sm"
              >
                Datenschutz
              </Link>
              <Link
                href="/agb"
                className="text-stone-400 hover:text-red-500 transition-colors text-sm"
              >
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 