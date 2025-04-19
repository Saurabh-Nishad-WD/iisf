import React from 'react'

const About = () => {
  return (
    <>
         <div className="min-h-screen bg-gray-900 text-white px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10 text-center text-blue-400">About Us</h1>

      <div className="max-w-3xl space-y-12">
        {/* Club's Activities */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">📌 Club's Activities</h2>
          <p className="text-gray-300">
            We organize coding contests, hackathons, development workshops, and peer learning sessions. Members get hands-on experience in real-world projects and have fun while learning together.
          </p>
        </section>

        {/* Club's Goal */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">🎯 Club's Goal</h2>
          <p className="text-gray-300">
            Our goal is to build a strong programming culture, foster creativity, and encourage students to become confident developers who can contribute to open source and tech communities.
          </p>
        </section>

        {/* Why It Exists */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">💡 Why It Exists</h2>
          <p className="text-gray-300">
            The club was founded to bridge the gap between theoretical knowledge and practical application. It exists to create a supportive environment where anyone passionate about tech can grow and thrive.
          </p>
        </section>
      </div>
    </div>
    </>
  )
}

export default About
