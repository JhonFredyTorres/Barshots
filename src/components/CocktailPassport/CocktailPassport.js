import React from 'react';
import ProfileSection from './ProfileSection';
import CocktailCard from './CocktailCard';
import AchievementBadge from './AchievementBadge';

const CocktailPassport = () => {
  const cocktails = [
    { id: 1, name: "Mojito", image: "mojito.jpg", unlocked: true },
    { id: 2, name: "Margarita", image: "margarita.jpg", unlocked: true },
    { id: 3, name: "Daiquiri", image: "daiquiri.jpg", unlocked: false },
    { id: 4, name: "Piña Colada", image: "pina-colada.jpg", unlocked: true },
    { id: 5, name: "Old Fashioned", image: "old-fashioned.jpg", unlocked: false },
    { id: 6, name: "Negroni", image: "negroni.jpg", unlocked: true }
  ];

  const achievements = [
    { icon: "🥇", title: "Iniciado", description: "Primer cóctel desbloqueado" },
    { icon: "🍹", title: "Conocedor de Ron", description: "5 cócteles con ron" },
    { icon: "🎯", title: "Mixólogo", description: "10 cócteles desbloqueados" }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bebas text-red-500 mb-8 text-center text-shadow-red-neon">
        PASAPORTE DE CÓCTELES
      </h2>
      
      <ProfileSection />
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {cocktails.map(cocktail => (
          <CocktailCard 
            key={cocktail.id} 
            cocktail={cocktail} 
            unlocked={cocktail.unlocked} 
          />
        ))}
      </div>
      
      <div className="glass-effect p-6 rounded-xl mb-8">
        <h3 className="text-xl font-bold text-white mb-6">LOGROS DESBLOQUEADOS</h3>
        <div className="grid grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <AchievementBadge 
              key={index}
              icon={achievement.icon}
              title={achievement.title}
              description={achievement.description}
            />
          ))}
        </div>
      </div>
      
      <div className="glass-effect p-6 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-4">PRÓXIMO LOGRO</h3>
        <p className="text-gray-300 mb-2">Maestro Tequilero (3/5 cócteles con tequila)</p>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div className="progress-bar h-2.5 rounded-full" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default CocktailPassport;

// DONE