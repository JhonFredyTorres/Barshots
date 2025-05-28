import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-black px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bebas text-red-500 mb-12 text-center">
          CONTÁCTANOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-red-500 text-3xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-white mb-2">Ubicación</h3>
            <p className="text-gray-400">Calle 85 #14-25, Bogotá</p>
          </div>
          <div className="text-center">
            <div className="text-red-500 text-3xl mb-4">🕒</div>
            <h3 className="text-xl font-bold text-white mb-2">Horarios</h3>
            <p className="text-gray-400">Miércoles a Sábado: 5PM - 3AM</p>
          </div>
          <div className="text-center">
            <div className="text-red-500 text-3xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-white mb-2">Contacto</h3>
            <div className="flex justify-center gap-4 mt-4">
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full">
                WhatsApp
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full">
                Llamar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;