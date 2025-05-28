import React from 'react';

const AchievementBadge = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="badge-circle mb-2 text-3xl">
        {icon}
      </div>
      <h4 className="font-bold text-white">{title}</h4>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
  );
};

export default AchievementBadge;