import React from 'react';
import img1 from "../data/qq1.webp";
import img2 from "../data/qq2.webp";
import img3 from "../data/qq3.webp";
import img4 from "../data/qq4.webp";
import img5 from "../data/qq5.webp";
import img6 from "../data/qq6.webp";
import ResourcesCard from '../components/Resoarses_Card';

const Resources = () => {
  return (
    <div className="min-h-screen py-10 px-6 bg-gray-900">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Recommended Resources</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        <ResourcesCard 
          image={img1}
          title="DSA To Devlopment"
          link="https://www.geeksforgeeks.org/courses/dsa-to-development-coding-guide/"
        />

        
        <ResourcesCard 
          image={img2}
          title="Backend Devlopment"
          link="https://www.geeksforgeeks.org/courses/Java-backend-live/"
        />


        <ResourcesCard 
          image={img3}
          title="Tech Interview"
          link="https://www.geeksforgeeks.org/courses/interviewe-101-data-structures-algorithm-system-design/"
        />


        <ResourcesCard 
          image={img4}
          title="Tech Interview"
          link="https://www.geeksforgeeks.org/courses/interviewe-101-data-structures-algorithm-system-design/"
        />


        <ResourcesCard 
          image={img5}
          title="Tech Interview"
          link="https://www.geeksforgeeks.org/courses/interviewe-101-data-structures-algorithm-system-design/"
        />


        <ResourcesCard 
          image={img6}
          title="Tech Interview"
          link="https://www.geeksforgeeks.org/courses/interviewe-101-data-structures-algorithm-system-design/"
        />
        {/* Add more resources as needed */}
      </div>
    </div>
  );
};

export default Resources;
