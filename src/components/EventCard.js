import React from 'react';

const EventCard = ({ title, date, image }) => {
  return (
    <div className="relative rounded-xl overflow-hidden group">
      <div className="h-64 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-500">Imagen: {image}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <div className="text-red-500 font-bold mb-1">{date}</div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500 transition-all duration-300"></div>
    </div>
  );
};

export default EventCard;