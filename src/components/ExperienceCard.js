import React, { useState } from 'react';
import RouletteModal from './RouletteModal';

const ExperienceCard = ({ experience, onOpenAIBartender }) => { // Accept onOpenAIBartender prop
  const [isRouletteModalOpen, setIsRouletteModalOpen] = useState(false);

  const handleOpenExperience = () => {
    if (experience.title === "Ruleta de Shots") {
      setIsRouletteModalOpen(true);
    } else if (experience.title === "AI Bartender") {
      onOpenAIBartender(); // Call the function to open the AI Bartender
    }
    // Add navigation for other experiences here
  };

  return (
    <>
      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-red-500 transition-all duration-300 group">
        <div className="text-4xl mb-4 group-hover:text-red-500 transition-colors duration-300">
          {experience.icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
        <p className="text-gray-400">{experience.description}</p>
        <div className="mt-4 pt-4 border-t border-gray-800 group-hover:border-red-500 transition-colors duration-300">
          <button
            onClick={handleOpenExperience}
            className="text-red-500 hover:text-red-400 font-semibold"
          >
            Ver más →
          </button>
        </div>
      </div>

      {experience.title === "Ruleta de Shots" && (
        <RouletteModal
          isOpen={isRouletteModalOpen}
          onClose={() => setIsRouletteModalOpen(false)}
        />
      )}
    </>
  );
};

export default ExperienceCard;