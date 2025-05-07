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
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-red-400 transition-colors bg-black/30 p-2 rounded-full backdrop-blur-sm"
            onClick={() => navigateImage('prev')}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative w-full max-w-5xl aspect-video">
            <Image
              src={`/pictures/${images[selectedImage]}`}
              alt={`Referenz ${selectedImage + 1}`}
              fill
              className="object-contain"
              quality={100}
            />
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-red-400 transition-colors bg-black/30 p-2 rounded-full backdrop-blur-sm"
            onClick={() => navigateImage('next')}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery; 