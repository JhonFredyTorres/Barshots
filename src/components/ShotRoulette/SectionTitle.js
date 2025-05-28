import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-4xl font-bebas text-red-500 text-center mb-8">
      <span className="text-shadow-red-neon">{children}</span>
    </h2>
  );
};

export default SectionTitle;