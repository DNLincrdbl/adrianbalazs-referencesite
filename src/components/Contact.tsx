'use client';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'repair',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-stone-100 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-900/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-900/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-red-900">
            Kontaktieren Sie uns
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Wir beraten Sie gerne persönlich und erstellen Ihnen ein unverbindliches Angebot.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-stone-900 mb-6">
                Kontaktinformationen
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-red-100 rounded-lg text-red-900">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-stone-900">Adresse</h4>
                    <p className="text-stone-600">Musterstraße 123<br />12345 Musterstadt</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-red-100 rounded-lg text-red-900">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-stone-900">Telefon</h4>
                    <p className="text-stone-600">+49 (0) 123 456789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-red-100 rounded-lg text-red-900">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-stone-900">E-Mail</h4>
                    <p className="text-stone-600">info@adrian-balazs.de</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-stone-900 mb-6">
                Öffnungszeiten
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-stone-600">Montag - Freitag</span>
                  <span className="text-stone-900 font-medium">8:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Samstag</span>
                  <span className="text-stone-900 font-medium">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Sonntag</span>
                  <span className="text-stone-900 font-medium">Geschlossen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-stone-700 mb-2">
                Art der Anfrage
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              >
                <option value="repair">Reparatur</option>
                <option value="new">Neubau</option>
                <option value="renovation">Sanierung</option>
                <option value="consultation">Beratung</option>
              </select>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                Ihre Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-red-900 to-red-800 text-white rounded-lg font-semibold hover:from-red-800 hover:to-red-700 transition-all shadow-lg hover:shadow-xl"
            >
              Nachricht Senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 