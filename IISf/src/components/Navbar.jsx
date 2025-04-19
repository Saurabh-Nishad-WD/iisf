import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="w-full bg-gray-800 py-2 shadow-md text-center">
        <ul className="flex justify-center space-x-8 text-lg font-medium">
          <li className="hover:text-blue-400 cursor-pointer"><Link to="/">Home</Link></li>
          <li className="hover:text-blue-400 cursor-pointer"><Link to="/about">About</Link></li>
          <li className="hover:text-blue-400 cursor-pointer"><Link to="/team">Team</Link></li>
          <li className="hover:text-blue-400 cursor-pointer"><Link to="/event">Event</Link></li>
          <li className="hover:text-blue-400 cursor-pointer"><Link to="/contact">Contact</Link></li>
          <li className="hover:text-blue-400 cursor-pointer"><Link to="/resoarce">Resources</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
