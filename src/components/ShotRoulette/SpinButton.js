import React from 'react';

const SpinButton = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-8 py-4 rounded-full text-xl font-bold ${disabled ? 'bg-gray-600' : 'bg-red-600 hover:bg-red-700'} text-white shadow-lg transition-all transform hover:scale-105 neon-red-glow`}
    >
      ¡GIRAR RULETA!
    </button>
  );
};

export default SpinButton;