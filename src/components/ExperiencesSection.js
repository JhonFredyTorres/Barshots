import React from 'react';
import experiences from '../mock/experiences';
import ExperienceCard from './ExperienceCard';

const ExperiencesSection = ({ onNavigate, onOpenAIBartender }) => { // Accept onOpenAIBartender prop
  return (
    <section className="py-16 bg-black px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bebas text-red-500 mb-12 text-center">
          EXPERIENCIAS INTERACTIVAS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => (
            <ExperienceCard 
              key={exp.id} 
              experience={exp} 
              onNavigate={onNavigate} 
              onOpenAIBartender={onOpenAIBartender} // Pass the prop
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;