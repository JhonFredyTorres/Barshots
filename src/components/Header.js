import React from 'react';

const Header = () => {
  return (
    <header className="bg-black py-6 px-4 shadow-md border-b border-red-600">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-red-600 text-2xl font-bold">BarSoft</h1>
        <nav>
          <ul className="flex space-x-6 text-white">
            <li className="hover:text-red-500 transition-colors">Inicio</li>
            <li className="hover:text-red-500 transition-colors">Menú</li>
            <li className="hover:text-red-500 transition-colors">Contacto</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;