import React from 'react'
import EventCard from '../components/Event_Card'
import img1 from "../data/ee1.jpg";
import img2 from "../data/ee2.jpg";
import img3 from "../data/ee3.jpg";

const Event = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Past Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        <EventCard 
          image={img1}
          title="Short Int"
          date="May 5, 2025"
          description="Join industry experts for a day full of knowledge sharing and networking. Open for all students."
        />

        <EventCard 
          image={img2}
          title="Long Int"
          date="May 6, 2025"
          description="Join industry experts for a day full of knowledge sharing and networking. Open for all students."
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-4 py-3">Upcoming Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        <EventCard 
          image={img3}
          title="Decode AI"
          date="May 5, 2025"
          description="Join industry experts for a day full of knowledge sharing and networking. Open for all students."
        />
      </div>
    </div>
  )
}

export default Event
