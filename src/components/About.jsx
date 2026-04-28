import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-16 md:py-24"
    >
      <div
        ref={ref}
        className={`max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full section-hidden ${
          visible ? "section-visible" : ""
        }`}
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-4">
          <div className="bg-gray-800/50 rounded-lg p-5 md:p-6 border border-gray-700">
            <h3 className="text-cyan-400 text-lg font-semibold mb-3">
              Background
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              I'm a Backend Developer with 2+ years of experience designing and
              maintaining scalable backend systems using Node.js, Express.js,
              MongoDB, and Redis. I specialize in REST API development,
              JWT-based authentication & authorization, performance
              optimization, and production monitoring.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-5 md:p-6 border border-gray-700">
            <h3 className="text-cyan-400 text-lg font-semibold mb-3">
              Current Focus
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              At Choira Pvt. Ltd., I've built and maintained 20+ production-grade
              RESTful APIs, improved response times by ~35–40% using Redis
              caching, and optimized MongoDB queries including geospatial nearby
              search. I enjoy owning features from planning to deployment, and
              I'm expanding into Docker, AWS, and AI-integrated workflows using
              the OpenAI API, Claude API, and MCP.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
