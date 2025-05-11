'use client';
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="relative">
        {/* Logo or company name */}
        <div className="text-2xl font-bold text-red-900 mb-8 text-center animate-fadeInDelay">
          Adrian Balazs
        </div>
        
        {/* Spinner */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-20 h-20 border-4 border-red-100 rounded-full animate-fadeInDelay2"></div>
          {/* Inner spinning ring */}
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-red-900 rounded-full animate-spin animate-fadeInDelay2"></div>
        </div>

        {/* Loading text */}
        <div className="mt-6 text-red-900 font-medium text-center animate-fadeInDelay3">
          Wird geladen...
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 