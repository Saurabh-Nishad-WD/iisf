import React from 'react';

const CandidateCard = ({ image, name, rollNo, description }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white text-gray-800">
      {/* Candidate Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      
      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        {/* <p className="text-sm text-gray-500">Roll No: {rollNo}</p> */}
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CandidateCard;
