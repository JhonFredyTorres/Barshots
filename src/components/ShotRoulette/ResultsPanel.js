import React from 'react';

const ResultsPanel = ({ result, history }) => {
  return (
    <div className="bg-black bg-opacity-70 p-6 rounded-xl border-2 border-red-500 mt-6">
      <div className="mb-6 p-4 bg-gray-900 rounded-lg">
        <h4 className="text-sm text-gray-400 mb-1">¡RESULTADO!</h4>
        <p className="text-2xl font-bold text-red-500">
          {result || "Gira la ruleta para comenzar"}
        </p>
      </div>
      
      <div>
        <h4 className="text-sm text-gray-400 mb-2">HISTORIAL DE LA SESIÓN</h4>
        <div className="space-y-2">
          {history.slice(0, 5).map((item, index) => (
            <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-800 rounded">
              <span className="text-gray-300">Ronda {history.length - index}</span>
              <span className="text-white font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPanel;