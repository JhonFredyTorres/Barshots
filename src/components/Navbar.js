import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black z-50 border-b border-red-900">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-red-500 font-bold text-2xl">SHOTS BAR BOGOTÁ</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-red-500 transition-colors">Inicio</a>
            <a href="#" className="text-white hover:text-red-500 transition-colors">Menú</a>
            <a href="#" className="text-white hover:text-red-500 transition-colors">Eventos</a>
            <a href="#" className="text-white hover:text-red-500 transition-colors">Experiencias</a>
            <a href="#" className="text-white hover:text-red-500 transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;