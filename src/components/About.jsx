import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm a Backend Developer with 2+ years of experience designing and
          maintaining scalable backend systems using Node.js, Express.js,
          MongoDB, and Redis. I specialize in REST API development, JWT-based
          authentication & authorization, performance optimization, and
          production monitoring.
        </p>
        <br />
        <p className="text-xl mt-5">
          At Choira Pvt. Ltd., I've built and maintained 20+ production-grade
          RESTful APIs, improved response times by ~35–40% using Redis caching,
          and optimized MongoDB queries including geospatial nearby search. I
          enjoy owning features independently from planning to deployment, and
          I'm currently expanding my skills in Docker, AWS, and AI-integrated
          backend workflows using the OpenAI API, Claude API, and MCP.
        </p>
      </div>
    </div>
  );
};

export default About;
