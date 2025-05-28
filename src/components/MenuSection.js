import React, { useRef } from 'react';
import MenuItemCard from './MenuItemCard';
import menuItems from '../mock/menuItems';

const MenuSection = () => {
  return (
    <section id="menu" className="py-16 bg-black px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bebas text-red-500 mb-12 text-center">
          NUESTRO MENÚ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;