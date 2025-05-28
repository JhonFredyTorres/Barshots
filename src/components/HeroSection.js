import React from 'react';

const HeroSection = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen bg-black overflow-hidden pt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0HUYDyQRcSojWGwvDPb4hl1EOXpnTeqzCZR0g')" }}
      ></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-bebas">
          SIEMPRE EL PRE SERÁ MEJOR EN SHOTS
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50">
            RESERVA AHORA
          </button>
          <button 
            onClick={scrollToMenu}
            className="border-2 border-white hover:border-red-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            VER MENÚ
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;