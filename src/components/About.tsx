import React from 'react';
import Image from 'next/image';

const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Dachdeckerarbeiten',
      description: 'Professionelle Ausführung aller Arten von Dacharbeiten',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Energieberatung',
      description: 'Kompetente Beratung für energieeffiziente Dachlösungen',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
      title: 'Zimmererarbeiten',
      description: 'Traditionelle Handwerkskunst mit modernen Techniken',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: 'Dachfenster',
      description: 'Installation und Wartung von hochwertigen Dachfenstern',
    },
  ];

  return (
    <section id="about" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative h-[600px] mb-12 lg:mb-0">
            <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-800 rounded-2xl transform -rotate-3 scale-95 opacity-20" />
            <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/about.jpg"
                alt="Handwerker bei der Arbeit"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-red-900">
              Tradition trifft Innovation
            </h2>
            <p className="text-lg text-stone-700 mb-8 leading-relaxed">
              Seit über 30 Jahren sind wir Ihr zuverlässiger Partner für alle Arbeiten rund ums Dach. 
              Unser Familienbetrieb verbindet traditionelles Handwerk mit modernster Technik, 
              um Ihnen die bestmögliche Qualität zu bieten.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg transform hover:-translate-y-1 transition-all">
                <div className="text-4xl font-bold text-red-900 mb-2">30+</div>
                <div className="text-stone-600">Jahre Erfahrung</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg transform hover:-translate-y-1 transition-all">
                <div className="text-4xl font-bold text-red-900 mb-2">1000+</div>
                <div className="text-stone-600">Zufriedene Kunden</div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex-shrink-0 p-3 bg-red-100 rounded-lg text-red-900">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-stone-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 