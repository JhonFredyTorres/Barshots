import React, { useState, useRef, useEffect } from 'react';
import shotTypes from '../../mock/shotTypes';
import SectionTitle from './SectionTitle';
import PlayerList from './PlayerList';
import SpinButton from './SpinButton';
import ResultsPanel from './ResultsPanel';

const ShotRoulette = () => {
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  const [spinning, setSpinning] = useState(false);
  const wheelRef = useRef(null);

  const spinWheel = () => {
    if (players.length === 0 || spinning) return;
    
    setSpinning(true);
    const randomDegree = Math.floor(Math.random() * 360) + 3600;
    wheelRef.current.style.transition = `transform 5s cubic-bezier(0.17, 0.67, 0.21, 0.99)`;
    wheelRef.current.style.transform = `rotate(${randomDegree}deg)`;
    
    setTimeout(() => {
      setSpinning(false);
      const winnerIndex = Math.floor(players.length * Math.random());
      const shotIndex = Math.floor(shotTypes.length * Math.random());
      
      const currentResult = `${players[winnerIndex]} debe tomar un shot de ${shotTypes[shotIndex].name}`;
      setResult(currentResult);
      setHistory([currentResult, ...history]);
      setCurrentPlayer(players[winnerIndex]);
    }, 5000);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <SectionTitle>RULETA DE SHOTS</SectionTitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Ruleta */}
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div 
              ref={wheelRef}
              className="w-full h-full rounded-full border-4 border-red-500 relative overflow-hidden"
              style={{
                background: `conic-gradient(${shotTypes.map((shot, i) => 
                  `${shot.color} ${i * (360/shotTypes.length)}deg ${(i+1) * (360/shotTypes.length)}deg`
                ).join(', ')})`
              }}
            >
              {shotTypes.map((shot, i) => (
                <div key={i} className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transform: `rotate(${i * (360/shotTypes.length) + (360/shotTypes.length/2)}deg)`,
                    textTransform: 'rotate(90deg)'
                  }}>
                  <span className="absolute left-1/2 top-4 transform -translate-x-1/2 text-white font-bold"
                    style={{
                      transform: `rotate(${-i * (360/shotTypes.length) - (360/shotTypes.length/2)}deg)`
                    }}>
                    {shot.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-red-600"></div>
          </div>
          
          <SpinButton onClick={spinWheel} disabled={spinning || players.length === 0} />
        </div>
        
        {/* Panel de Jugadores y Resultados */}
        <div>
          <PlayerList 
            players={players} 
            onAddPlayer={(player) => setPlayers([...players, player])} 
          />
          {players.length > 0 && (
            <ResultsPanel result={result} history={history} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShotRoulette;