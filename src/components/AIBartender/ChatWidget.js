import React, { useState, useEffect, useRef } from 'react';
import aiResponses from '../../mock/aiResponses';
import fullMenu from '../../mock/fullMenu'; // Import the full menu

const ChatWidget = ({ forceOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: aiResponses.greeting }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (forceOpen) {
      setIsOpen(true);
    }
  }, [forceOpen]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const simulateOpenAIResponse = async (userMessage) => {
    setIsLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    let aiResponseText = aiResponses.default;
    const lowerCaseMessage = userMessage.toLowerCase();

    // Check for specific menu items
    let foundItem = null;
    for (const category in fullMenu) {
      foundItem = fullMenu[category].find(item =>
        lowerCaseMessage.includes(item.name.toLowerCase())
      );
      if (foundItem) {
        aiResponseText = `¡Claro! El ${foundItem.name} cuesta $${foundItem.price.toLocaleString()}. Es parte de nuestra categoría "${category.replace(/([A-Z])/g, ' $1').trim()}". ¿Te gustaría saber algo más sobre él o sobre otros tragos?`;
        break;
      }
    }

    // Check for categories
    if (!foundItem) {
      if (lowerCaseMessage.includes('shots de la casa')) {
        const items = fullMenu.shotsDeLaCasa.map(item => item.name).join(', ');
        aiResponseText = `Los Shots de la Casa son nuestros clásicos, perfectos para empezar. Tenemos opciones como ${items}. Todos a $${fullMenu.shotsDeLaCasa[0].price.toLocaleString()}.`;
      } else if (lowerCaseMessage.includes('shots gold')) {
        const items = fullMenu.shotsGold.map(item => item.name).join(', ');
        aiResponseText = `Nuestros Shots Gold son un poco más elaborados y con sabores únicos. Incluyen ${items}. Cada uno a $${fullMenu.shotsGold[0].price.toLocaleString()}.`;
      } else if (lowerCaseMessage.includes('killshot')) {
        const item = fullMenu.killshot[0];
        aiResponseText = `El ${item.name} es nuestro shot más potente, ideal para los valientes. Cuesta $${item.price.toLocaleString()}.`;
      } else if (lowerCaseMessage.includes('especiales de la casa')) {
        const items = fullMenu.especialesDeLaCasa.map(item => `${item.name} ($${item.price.toLocaleString()})`).join(', ');
        aiResponseText = `Los Especiales de la Casa son tragos más grandes o combinaciones únicas. Tenemos ${items}.`;
      } else if (lowerCaseMessage.includes('promo de shots') || lowerCaseMessage.includes('bandejas')) {
        const items = fullMenu.promoDeShots.map(item => `${item.name} ($${item.price.toLocaleString()})`).join(', ');
        aiResponseText = `¡Tenemos bandejas para compartir! ${items}.`;
      } else if (lowerCaseMessage.includes('menu') || lowerCaseMessage.includes('carta')) {
        const categories = Object.keys(fullMenu).map(cat => cat.replace(/([A-Z])/g, ' $1').trim()).join(', ');
        aiResponseText = `Nuestro menú incluye ${categories}. ¿Sobre cuál categoría te gustaría saber más?`;
      } else if (lowerCaseMessage.includes('popular')) {
        aiResponseText = "Algunos de los más populares son el Shot Clásico, el Demonio y el Killshot. ¡Pero todos son deliciosos!";
      } else if (lowerCaseMessage.includes('recomienda') || lowerCaseMessage.includes('sugiere')) {
        aiResponseText = "Depende de lo que busques. ¿Algo dulce, fuerte, refrescante? Si no sabes, el Shot Especial es una buena opción para probar algo diferente.";
      } else if (lowerCaseMessage.includes('sin alcohol')) {
        aiResponseText = "Tenemos opciones sin alcohol deliciosas, como limonadas especiales y jugos naturales. ¡Pregunta a tu mesero por las opciones del día!";
      } else if (lowerCaseMessage.includes('hola') || lowerCaseMessage.includes('saludos')) {
          aiResponseText = "¡Hola! ¿En qué más puedo ayudarte hoy?";
      } else if (lowerCaseMessage.includes('gracias')) {
          aiResponseText = "De nada, ¡siempre a tu servicio!";
      }
    }


    setIsLoading(false);
    return aiResponseText;
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const userMessage = inputMessage.trim();
    const newUserMessage = { sender: 'user', text: userMessage };
    setMessages([...messages, newUserMessage]);
    setInputMessage('');

    const aiResponseText = await simulateOpenAIResponse(userMessage);
    setMessages(prevMessages => [...prevMessages, { sender: 'ai', text: aiResponseText }]);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
    // Optionally send message automatically: handleSendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg neon-red-glow"
        >
          🤖
        </button>
      )}

      {isOpen && (
        <div className="w-80 h-96 bg-black rounded-xl shadow-xl flex flex-col border border-red-500 glass-effect">
          <div className="bg-gradient-to-r from-black to-red-800 text-white p-4 rounded-t-xl flex justify-between items-center">
            <div>
              <h3 className="font-bold">Bartender AI - Shots Bar</h3>
              <p className="text-xs text-gray-300">Disponible 24/7 para ayudarte</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">
              ✕
            </button>
          </div>

          <div ref={chatBodyRef} className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-lg p-3 max-w-[80%] ${msg.sender === 'user' ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                 <div className="rounded-lg p-3 bg-gray-700 text-gray-200">
                   ...
                 </div>
               </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2 mb-3 overflow-x-auto pb-2">
              <button onClick={() => handleSuggestionClick('Shot más popular')} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full hover:bg-gray-700">Shot más popular</button>
              <button onClick={() => handleSuggestionClick('Recomiéndame algo')} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full hover:bg-gray-700">Recomiéndame algo</button>
              <button onClick={() => handleSuggestionClick('Sin alcohol')} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full hover:bg-gray-700">Sin alcohol</button>
            </div>
            <div className="flex">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
                placeholder="Pregúntame sobre shots, cócteles, etc..."
                className="flex-grow bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-lg"
                disabled={isLoading}
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;

// DONE