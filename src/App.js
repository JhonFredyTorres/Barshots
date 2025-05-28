import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import ExperiencesSection from './components/ExperiencesSection';
import EventsSection from './components/EventsSection';
import InstagramGallery from './components/InstagramGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatWidget from './components/AIBartender/ChatWidget';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAIBartenderForcedOpen, setIsAIBartenderForcedOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const handleOpenAIBartender = () => {
    setIsAIBartenderForcedOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection />
            <MenuSection />
            <ExperiencesSection onNavigate={navigateTo} onOpenAIBartender={handleOpenAIBartender} />
            <EventsSection />
            <InstagramGallery />
            <ContactSection />
          </>
        );
      // Add cases for other pages here (Menu, Events, Experiences, Contact)
      default:
        return (
          <>
            <HeroSection />
            <MenuSection />
            <ExperiencesSection onNavigate={navigateTo} onOpenAIBartender={handleOpenAIBartender} />
            <EventsSection />
            <InstagramGallery />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <ChatWidget forceOpen={isAIBartenderForcedOpen} /> {/* Pass the forceOpen prop */}
    </div>
  );
};

export default App;

// DONE