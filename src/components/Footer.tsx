import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Leistungen',
      links: [
        { text: 'Dachdeckerarbeiten', href: '#services' },
        { text: 'Zimmererarbeiten', href: '#services' },
        { text: 'Dachfenster', href: '#services' },
        { text: 'Energieberatung', href: '#services' },
      ],
    },
    {
      title: 'Unternehmen',
      links: [
        { text: 'Über uns', href: '#about' },
        { text: 'Referenzen', href: '#references' },
        { text: 'Karriere', href: '#career' },
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
              Ihr zuverlässiger Partner für alle Arbeiten rund ums Dach. Qualität und Tradition seit 1990.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-stone-400 hover:text-red-500 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
                </svg>
              </a>
            </div>
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