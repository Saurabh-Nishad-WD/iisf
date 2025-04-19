import React from "react";
import img1 from "../data/logo_PTSE.jpg";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      

      {/* Main Content */}
      <div className="flex flex-col items-center justify-between flex-grow px-6 py-10">
        {/* Logo and Slogan */}
        <div className="flex flex-col items-center">
          <img
            src={img1}
            alt="Club Logo"
            className="w-60 h-60 object-contain mb-4"
          />
          <p className="text-blue-400 text-lg italic text-center">
            "From Hello World to Hacker Mode."
          </p>
        </div>

        {/* Club Name and Description */}
        <div className="text-center max-w-2xl space-y-4">
          <h1 className="text-4xl font-extrabold">Programming Club</h1>
          <p className="text-gray-400">
            Welcome to the Programming Club — a vibrant community of creative minds and passionate learners.
          </p>
          <p className="text-gray-400">
            <span className="font-semibold text-white">🌟 Vision Statement:</span> To foster a vibrant
            community of passionate coders, innovators, and problem-solvers by
            providing opportunities to learn, collaborate, and create real-world
            impact through technology.
          </p>
          <p className="text-gray-300">
            Join us in our journey of innovation, collaboration, and fun!
          </p>
        </div>

        {/* Join Us Button */}
        <button className="mt-4 px-8 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-all duration-300">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default HomePage;
