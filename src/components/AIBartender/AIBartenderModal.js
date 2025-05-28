import React, { useState, useEffect, useRef } from 'react';
import aiResponses from '../../mock/aiResponses';
import menuItems from '../../mock/menuItems';

const AIBartenderModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: aiResponses.greeting }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBodyRef = useRef(null);

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

    // Simple logic to simulate AI response based on keywords and menu
    const lowerCaseMessage = userMessage.toLowerCase();

    const matchedMenuItem = menuItems.find(item =>
      lowerCaseMessage.includes(item.name.toLowerCase())
    );

    if (matchedMenuItem) {
      const aiMenuItemResponse = aiResponses.menuItems.find(item => item.name === matchedMenuItem.name);
      if (aiMenuItemResponse) {
        aiResponseText = aiMenuItemResponse.response;
      }
    } else if (lowerCaseMessage.includes('popular shots')) {
      aiResponseText = aiResponses.popularShots;
    } else if (lowerCaseMessage.includes('recomienda') || lowerCaseMessage.includes('sugiere')) {
      aiResponseText = aiResponses.recommendation;
    } else if (lowerCaseMessage.includes('sin alcohol')) {
      aiResponseText = aiResponses.noAlcohol;
    } else if (lowerCaseMessage.includes('hola') || lowerCaseMessage.includes('saludos')) {
        aiResponseText = "¡Hola! ¿En qué más puedo ayudarte hoy?";
    } else if (lowerCaseMessage.includes('gracias')) {
        aiResponseText = "De nada, ¡siempre a tu servicio!";
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div 
        className="w-full max-w-md h-[80vh] bg-black rounded-xl shadow-xl flex flex-col border border-red-500 glass-effect"
        style={{
          backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc05qpKinelPJ2lHWg1yuOpCAfMUdoxrSLcIq6Z')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="bg-gradient-to-r from-black to-red-800 text-white p-4 rounded-t-xl flex justify-between items-center">
          <div>
            <h3 className="font-bold">Bartender AI - Shots Bar</h3>
            <p className="text-xs text-gray-300">Disponible 24/7 para ayudarte</p>
          </div>
          <button onClick={onClose} className="text-white hover:text-gray-300">
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
    </div>
  );
};

export default AIBartenderModal;

// DONE