import React from 'react';

const ResourcesCard = ({ image, title, link }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-600 hover:text-blue-800 font-medium"
        >
          Visit Course →
        </a>
      </div>
    </div>
  );
};

export default ResourcesCard;
