import React from 'react';

const Card = ({ icon, heading, description }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <div className="p-4">
        <div className="text-xl">{icon}</div>
        <h3 className="mt-4 text-lg font-semibold">{heading}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
