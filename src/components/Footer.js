import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">SHOTS BAR BOGOTÁ</h3>
            <p className="text-gray-400">El mejor lugar para disfrutar de los mejores cócteles y shots en Bogotá.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios</h4>
            <p className="text-gray-400">Miércoles a Viernes: 5PM - 2AM</p>
            <p className="text-gray-400">Sábado: 3PM - 3AM</p>
            <p className="text-gray-400">Domingo: Cerrado</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="text-gray-400">Calle 85 #14-25, Bogotá</p>
            <p className="text-gray-400">+57 123 456 7890</p>
            <p className="text-gray-400">reservas@shotsbarbogota.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">TikTok</a>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r">
                  Suscribir
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Shots Bar Bogotá. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;