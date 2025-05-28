import React from 'react';

const ProfileSection = () => {
  return (
    <div className="glass-effect p-6 rounded-xl mb-8 flex items-center">
      <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl font-bold mr-6">
        JP
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white">JUAN PÉREZ</h2>
        <p className="text-gray-300 mb-2">Nivel: Experimentado</p>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div className="progress-bar h-2.5 rounded-full" style={{ width: '65%' }}></div>
        </div>
        <p className="text-sm text-gray-400 mt-1">Cócteles desbloqueados: 12 de 24</p>
      </div>
    </div>
  );
};

export default ProfileSection;