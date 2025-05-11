'use client';
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-stone-100 via-white to-stone-50 relative overflow-hidden">
      {/* Modern geometric decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-900/10 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-tl from-red-900/5 to-transparent rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] bg-gradient-to-br from-stone-200/20 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-8 text-red-900 tracking-tight">
            Kontaktieren Sie uns
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Wir beraten Sie gerne persönlich und erstellen Ihnen ein unverbindliches Angebot.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Service Area Card */}
            <div className="group bg-white/70 backdrop-blur-lg rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-br from-red-100 to-red-50 rounded-2xl text-red-900 mr-5 transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-stone-900 mb-1">Unser Standort</h3>
                  <p className="text-stone-600 text-lg">77787 Nordrach</p>
                </div>
              </div>
              <div className="pl-[4.5rem] border-l-2 border-red-100">
                <p className="text-stone-600 text-lg">
                  Wir sind in einem Umkreis von 100 km für Sie tätig
                </p>
              </div>
            </div>

            {/* Contact Methods Card */}
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
              <div className="space-y-8">
                {/* Phone */}
                <div className="group flex items-center">
                  <div className="p-4 bg-gradient-to-br from-red-100 to-red-50 rounded-2xl text-red-900 mr-5 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href="tel:+49123456789" className="text-lg text-stone-900 hover:text-red-900 transition-colors">
                    +49 (0) 123 456789
                  </a>
                </div>

                {/* Email */}
                <div className="group flex items-center">
                  <div className="p-4 bg-gradient-to-br from-red-100 to-red-50 rounded-2xl text-red-900 mr-5 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:info@adrian-balazs.de" className="text-lg text-stone-900 hover:text-red-900 transition-colors">
                    info@adrian-balazs.de
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="group flex items-center">
                  <div className="p-4 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl text-green-700 mr-5 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                    </svg>
                  </div>
                  <a href="https://wa.me/49123456789" target="_blank" rel="noopener noreferrer" className="text-lg text-stone-900 hover:text-green-600 transition-colors">
                    WhatsApp Chat starten
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="mailto:info@adrian-balazs.de"
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-red-900 to-red-800 text-white rounded-2xl font-semibold hover:from-red-800 hover:to-red-700 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(220,38,38,0.2)] text-lg w-full sm:w-auto justify-center"
            >
              <svg className="w-6 h-6 mr-3 transform group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              E-Mail Senden
            </a>
            <a
              href="https://wa.me/49123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-10 py-5 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#128C7E] transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(37,211,102,0.2)] text-lg w-full sm:w-auto justify-center"
            >
              <svg className="w-6 h-6 mr-3 transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 