'use client';
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white animate-fadeIn">
      {/* Spinner */}
      <div className="relative animate-scaleIn">
        {/* Outer ring */}
        <div className="w-20 h-20 border-4 border-red-100 rounded-full"></div>
        {/* Inner spinning ring */}
        <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-red-900 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

// Tailwind custom animations (add to globals.css):
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// .animate-fadeIn { animation: fadeIn 0.4s ease; }
// @keyframes scaleIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
// .animate-scaleIn { animation: scaleIn 0.4s cubic-bezier(0.4,0,0.2,1); } 