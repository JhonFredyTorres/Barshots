import React, { useState } from 'react';
import RouletteWheel from './RouletteWheel';

const RouletteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-4xl h-[80vh] rounded-xl overflow-hidden"
        style={{
          backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0OhP8ib9WwHMo3kKrdGO2gqByb0CvhnIYi8Px')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
        >
          ✕
        </button>
        
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-black bg-opacity-80 p-8 rounded-xl border-2 border-red-500 max-w-2xl w-full">
            <RouletteWheel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouletteModal;