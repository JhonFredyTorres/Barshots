import React from 'react';
import drinks from '../mock/drinks';
import DrinkCard from './DrinkCard';

const DrinkGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-red-600 mb-8">Nuestros Tragos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {drinks.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </div>
    </div>
  );
};

export default DrinkGrid;