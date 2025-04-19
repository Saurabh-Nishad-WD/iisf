import React from 'react'
import EventCard from '../components/Event_Card'
import img1 from "../data/ee1.jpg";
import img2 from "../data/ee2.jpg";
import img3 from "../data/ee3.jpg";

const Event = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white mb-4">Past Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        <EventCard 
          image={img1}
          title="Short Int"
          date="May 5, 2024"
          description="The Programming and Tech Skills Club, KNIT Sultanpur, is buzzing with excitement as we unveil the return of the much-loved SHORT_INT contest this October! Prepare yourself for an exhilarating 2-hour coding journey, packed with challenges that will test your creativity and programming prowess like never before.
"
        />

        <EventCard 
          image={img2}
          title="Long Int"
          date="Feb 11, 2025"
          description="Programming and Tech Skills Club, KNIT Sultanpur presents
<LONG_INT>

The Ultimate Test of Endurance, Skill, and Strategy

This is not just another coding contest—this is <LONG_INT>, where resilience meets brilliance, and only the relentless emerge victorious. 

For 120 hours, you'll dive into a battlefield of logic, algorithms, and problem-solving, tackling challenging Competitive Programming & DSA questions that demand speed, accuracy, and optimization. Every second counts, every line of code matters, and every point on the leaderboard pushes you closer to victory. 

"
        />
      </div>

      <h1 className="text-3xl font-bold text-white mb-4 py-3">Upcoming Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        <EventCard 
          image={img3}
          title="Decode AI"
          date="Apr 19, 2025"
          description="
Decode_AI challenges you to harness the power of AI and optimized prompts across three dynamic rounds. From testing your AI/ML knowledge to deriving insights from real-world data and building AI-assisted websites, this competition will push your skills to the next level! 
"
        />
      </div>
    </div>
  )
}

export default Event
