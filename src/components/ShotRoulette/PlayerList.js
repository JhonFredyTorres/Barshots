import React, { useState } from 'react';

const PlayerList = ({ players, onAddPlayer }) => {
  const [newPlayer, setNewPlayer] = useState('');

  const handleAddPlayer = () => {
    if (newPlayer.trim() && !players.includes(newPlayer.trim())) {
      onAddPlayer(newPlayer.trim());
      setNewPlayer('');
    }
  };

  return (
    <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-red-500">
      <h3 className="text-xl font-bold text-white mb-4">JUGADORES</h3>
      <div className="flex mb-4">
        <input
          type="text"
          value={newPlayer}
          onChange={(e) => setNewPlayer(e.target.value)}
          placeholder="Nombre del jugador"
          className="flex-grow px-4 py-2 bg-gray-800 text-white rounded-l focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          onClick={handleAddPlayer}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r"
        >
          +
        </button>
      </div>
      <div className="space-y-2 max-h-40 overflow-y-auto">
        {players.map((player, index) => (
          <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded">
            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
              {player.charAt(0)}
            </div>
            <span className="text-white">{player}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerList;