import React from 'react'
import CandidateCard from '../components/Candidate_card'
import img1 from "../data/ppp1.jpg";
import img2 from "../data/ppp2.jpg";
import img3 from "../data/ppp3.jpg";
import img4 from "../data/ppp4.jpg";
import img5 from "../data/ppp5.jpg";
import img6 from "../data/ppp6.jpg";
import img7 from "../data/ppp7.jpg";
import img8 from "../data/ppp8.jpg";

const Team = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-8">
    {/* Example Candidate Cards */}
    <CandidateCard 
      image={img1}
      name="Gaurpad Shukla" 
      rollNo="" 
      description="A passionate computer science student with an interest in web development and AI."
    />

    
    <CandidateCard 
      image={img2}
      name="Anshika Shukla" 
      rollNo="789101" 
      description="An aspiring data scientist, always curious about new algorithms and machine learning models."
    />


    <CandidateCard 
      image={img3}
      name="Vansh Kunwar Ji" 
      rollNo="789101" 
      description="An aspiring data scientist, always curious about new algorithms and machine learning models."
    />


    <CandidateCard 
      image={img4}
      name="Gunjan Chauhan" 
      rollNo="789101" 
      description="An aspiring data scientist, always curious about new algorithms and machine learning models."
    />


    <CandidateCard 
      image={img5}
      name="Anurag Shrivastav" 
      rollNo="789101" 
      description="An aspiring data scientist, always curious about new algorithms and machine learning models."
    />


    <CandidateCard 
      image={img6}
      name="Abhishek Shukla" 
      rollNo="789101" 
      description="An aspiring data scientist, always curious about new algorithms and machine learning models."
    />


    <CandidateCard 
      image={img7}
      name="Piyush Kumar" 
      rollNo="789101" 
      description="An aspiring data scientist, always curious about new algorithms and machine learning models."
    />


    <CandidateCard 
      image={img8}
      name="Raj Chaudhary" 
      rollNo="789101" 
      description="An aspiring data scientist, always curious about new algorithms and machine learning models."
    />
    {/* Add more CandidateCards here */}
  </div>
  )
}

export default Team
