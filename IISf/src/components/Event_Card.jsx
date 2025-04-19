import React from 'react';

const EventCard = ({ image, title, date, description }) => {
  return (
    <div className="max-w-md w-full bg-white text-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-500 mb-4">📅 {date}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
