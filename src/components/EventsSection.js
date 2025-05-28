import React from 'react';
import EventCard from './EventCard';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Noche de Karaoke",
      date: "15 OCT 2023",
      image: "karaoke-night.jpg"
    },
    {
      id: 2,
      title: "Fiesta Neon",
      date: "28 OCT 2023",
      image: "neon-party.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-900 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bebas text-red-500 mb-12 text-center">
          EVENTOS DESTACADOS
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} title={event.title} date={event.date} image={event.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;