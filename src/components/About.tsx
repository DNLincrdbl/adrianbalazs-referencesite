import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-900/5 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-tl from-red-900/5 to-transparent rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-900 mb-4">
            Ihr Partner für Dach & Zimmerei
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Wir verbinden traditionelles Handwerk mit modernster Technik für Ihr perfektes Dach
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/pictures/ref (25).JPG"
                alt="Professionelle Dachdeckerarbeiten"
                fill
                className="object-cover"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6">
              <div className="grid grid-cols-1 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-900 mb-1">17+</div>
                  <div className="text-sm text-stone-600">Jahre Erfahrung</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-stone-700 leading-relaxed">
                Mit einer über Generationen gewachsenen Tradition und 17 Jahren persönlicher Erfahrung im Dachdeckerhandwerk 
                bieten wir Ihnen umfassende Expertise in allen Bereichen der Dacharbeiten.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Unser Leistungsspektrum umfasst die komplette Dachsanierung und Dachreparaturen, 
                Installation von Dachrinnen und Fallrohren, Terrassen- und Garagenbau sowie 
                Flachdach- und Schrägdachkonstruktionen.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Als erfahrene Dachdecker und Zimmerer verbinden wir traditionelles Handwerk mit 
                modernster Technik, um Ihnen die bestmögliche Qualität zu garantieren.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-900 to-red-800 text-white rounded-xl font-semibold hover:from-red-800 hover:to-red-700 transition-all shadow-lg hover:shadow-xl group"
              >
                Kostenlose Beratung
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 