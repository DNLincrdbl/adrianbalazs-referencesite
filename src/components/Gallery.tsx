'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.slice(0, 8).map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group border-2 border-stone-100 shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={`/pictures/${image}`}
              alt={`Referenz ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                <p className="text-white text-sm font-medium mt-2">Vergrößern</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-fadeIn">
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white bg-black/40 hover:bg-red-700/80 rounded-full p-2 shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-700"
            onClick={closeLightbox}
            aria-label="Schließen"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev button */}
          <button
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-red-700/80 rounded-full p-2 md:p-3 shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-700"
            onClick={() => navigateImage('prev')}
            aria-label="Vorheriges Bild"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image with animation */}
          <div className="relative w-full max-w-4xl aspect-video flex items-center justify-center animate-scaleIn">
            <img
              src={`/pictures/${images[selectedImage]}`}
              alt={`Referenz ${selectedImage + 1}`}
              className="object-contain rounded-3xl shadow-2xl border-4 border-white/10 max-h-[80vh] max-w-full transition-all duration-300"
              style={{ background: 'rgba(0,0,0,0.1)' }}
            />
            {/* Image index badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/60 px-5 py-2 rounded-full shadow-md text-lg font-medium backdrop-blur-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </div>

          {/* Next button */}
          <button
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-red-700/80 rounded-full p-2 md:p-3 shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-700"
            onClick={() => navigateImage('next')}
            aria-label="Nächstes Bild"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery; 