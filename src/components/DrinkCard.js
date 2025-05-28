import React from 'react';

const DrinkCard = ({ drink }) => {
  return (
    <div className="bg-black rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 border border-red-600">
      <div className="h-48 bg-gray-900 flex items-center justify-center">
        <span className="text-red-500">Imagen: {drink.image}</span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2 text-red-500">{drink.name}</h3>
        <p className="text-red-400 mb-3">${drink.price}</p>
        <p className="text-sm text-gray-400">
          Ingredientes: {drink.ingredients.join(", ")}
        </p>
        <button className="mt-3 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-800 transition-colors">
          Pedir
        </button>
      </div>
    </div>
  );
};

export default DrinkCard;