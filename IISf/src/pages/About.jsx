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

            The Programming Club regularly organizes coding competitions, hackathons, workshops, and tech talks to enhance technical skills and foster innovation. Members also collaborate on real-world projects, contribute to open-source, and explore emerging technologies like AI, blockchain, and web development. Whether you're a beginner or a pro, there's always something exciting to be a part of!


          </p>
        </section>

        {/* Club's Goal */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">🎯 Club's Goal</h2>
          <p className="text-gray-300">
            Our goal is to build a strong programming culture, foster creativity, and encourage students to become confident developers who can contribute to open source and tech communities.

            The primary goal of the Programming Club is to cultivate a community of passionate coders and tech enthusiasts. We aim to empower students by providing opportunities to learn, build, and grow through hands-on experience, peer learning, and real-world applications. Our mission is to inspire innovation, develop problem-solving skills, and prepare members for future tech-driven careers.
          </p>
        </section>

        {/* Why It Exists */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">💡 Why It Exists</h2>
          <p className="text-gray-300">
            The club was founded to bridge the gap between theoretical knowledge and practical application. It exists to create a supportive environment where anyone passionate about tech can grow and thrive.

            The Programming Club exists to bridge the gap between academic learning and practical application. It was founded to create a supportive environment where students can explore their interest in coding, collaborate on innovative projects, and stay updated with the latest in technology. It's a space to inspire creativity, build confidence, and turn ideas into impactful solutions.
          </p>
        </section>
      </div>
    </div>
    </>
  )
}

export default About
