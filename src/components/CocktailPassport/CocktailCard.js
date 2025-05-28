import React from 'react';

const CocktailCard = ({ cocktail, unlocked }) => {
  return (
    <div className={`rounded-xl overflow-hidden ${unlocked ? 'border-2 border-red-500' : 'locked-card'}`}>
      <div className="h-40 bg-gray-800 flex items-center justify-center relative">
        {unlocked ? (
          <span className="text-gray-500">Imagen: {cocktail.image}</span>
        ) : (
          <span className="text-gray-500">BLOQUEADO</span>
        )}
      </div>
      <div className="p-4 bg-gray-900">
        <h3 className="font-bold text-white">{cocktail.name}</h3>
        <p className={`text-sm ${unlocked ? 'text-green-500' : 'text-gray-500'}`}>
          {unlocked ? '✓ Desbloqueado' : 'BLOQUEADO'}
        </p>
        {unlocked && (
          <p className="text-xs text-gray-400">Desbloqueado: 15/10/2023</p>
        )}
      </div>
    </div>
  );
};

export default CocktailCard;