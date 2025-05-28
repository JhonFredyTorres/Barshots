import React from 'react';

const MenuItemCard = ({ item }) => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-red-500/20 transition-all duration-300 border border-gray-800 hover:border-red-500">
      <div className="h-48 bg-gray-800 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white">{item.name}</h3>
          <span className="text-red-500 font-bold">${item.price.toLocaleString()}</span>
        </div>
        <p className="text-gray-400 mt-2">{item.description}</p>
        <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors">
          Pedir
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;