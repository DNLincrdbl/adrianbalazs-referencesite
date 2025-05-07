import React from 'react';
import Gallery from './Gallery';

const References = () => {
  // Az összes kép a pictures mappából
  const galleryImages = Array.from({ length: 25 }, (_, i) => `ref (${i + 1}).JPG`);

  return (
    <section id="references" className="py-24 bg-gradient-to-b from-stone-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-red-900 relative inline-block">
            Unsere Referenzen
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-800 to-amber-700 rounded-full transform scale-x-75"></div>
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Entdecken Sie eine Auswahl unserer erfolgreich abgeschlossenen Projekte. 
            Jedes Projekt zeigt unsere Handwerkskunst und Qualitätsarbeit.
          </p>
        </div>

        <div className="mb-16">
          <Gallery images={galleryImages} />
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-900 to-red-800 text-white rounded-lg font-semibold hover:from-red-800 hover:to-red-700 transition-all shadow-lg hover:shadow-xl group"
          >
            Projekt Anfragen
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default References; 