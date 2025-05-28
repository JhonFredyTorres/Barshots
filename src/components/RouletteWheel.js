import React, { useState, useRef } from 'react';
import rouletteOptions from '../mock/rouletteOptions';

const RouletteWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const wheelRef = useRef(null);
  const spinDuration = 5000;

  const spinWheel = () => {
    if (spinning) return;
    
    setSpinning(true);
    setResult(null);
    
    const randomDegree = Math.floor(Math.random() * 360) + 3600;
    wheelRef.current.style.transition = `transform ${spinDuration}ms cubic-bezier(0.17, 0.67, 0.21, 0.99)`;
    wheelRef.current.style.transform = `rotate(${randomDegree}deg)`;
    
    setTimeout(() => {
      setSpinning(false);
      const segmentDegree = 360 / rouletteOptions.length;
      const normalizedDegree = randomDegree % 360;
      const winningIndex = Math.floor(normalizedDegree / segmentDegree);
      setResult(rouletteOptions[winningIndex]);
    }, spinDuration);
  };

  return (
    <div className="flex flex-col items-center py-4">
      <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
        <div 
          ref={wheelRef}
          className="w-full h-full rounded-full border-4 border-red-500 relative overflow-hidden transition-transform duration-5000"
          style={{
            background: 'conic-gradient(' +
              rouletteOptions.map((option, i) => 
                `${option.type === 'shot' ? '#b91c1c' : '#7e22ce'} ${i * (360/rouletteOptions.length)}deg ${(i+1) * (360/rouletteOptions.length)}deg`
              ).join(', ') +
              ')'
          }}
        >
          {rouletteOptions.map((option, i) => (
            <div 
              key={i}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: `rotate(${i * (360/rouletteOptions.length) + (360/rouletteOptions.length/2)}deg)`,
                textTransform: 'rotate(90deg)'
              }}
            >
              <span 
                className="text-white text-xs font-bold absolute"
                style={{
                  transform: 'rotate(-90deg)',
                  transformOrigin: '0 0',
                  left: '50%',
                  top: '10px',
                  width: '100px',
                  textAlign: 'center'
                }}
              >
                {option.name}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-red-600"></div>
      </div>

      <button 
        onClick={spinWheel}
        disabled={spinning}
        className={`px-8 py-3 rounded-full font-bold text-lg ${spinning ? 'bg-gray-600' : 'bg-red-600 hover:bg-red-700'} text-white transition-all mb-4`}
      >
        {spinning ? 'Girando...' : '¡GIRAR RULETA!'}
      </button>

      {result && (
        <div className="mt-4 p-6 bg-gray-900 rounded-xl border border-red-500 max-w-md text-center">
          <h3 className="text-2xl font-bold text-red-500 mb-2">
            {result.type === 'shot' ? '🍹 TOMA UN SHOT 🍹' : '🎤 PENITENCIA 🎤'}
          </h3>
          <p className="text-xl text-white mb-2">{result.name}</p>
          <p className="text-gray-300">{result.description}</p>
        </div>
      )}
    </div>
  );
};

export default RouletteWheel;

// DONE