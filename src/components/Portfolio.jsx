import React, { useEffect, useRef, useState } from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactWeather  from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const portfolios = [
    {
      id: 1,
      src: reactParallax,
      title: "Choira Music Platform",
      description:
        "Studio booking & AI music generation platform. Built 20+ REST APIs using Node.js and Express.js, integrated AI music generation with webhook callbacks, JWT auth, Redis caching, and MongoDB aggregations.",
      demo: "#",
      code: "#",
    },
    {
      id: 2,
      src: reactWeather,
      title: "MERN E-Commerce Platform",
      description:
        "Full-stack e-commerce app with product catalog, cart, and orders. Built with Redux Toolkit, REST APIs, Razorpay payment gateway, and MongoDB schemas for users, products, and orders.",
      demo: "#",
      code: "#",
    },
    {
      id: 3,
      src: arrayDestruct,
      title: "Array Destructuring",
      description: "A visual guide to JavaScript array destructuring patterns and use-cases.",
      demo: "#",
      code: "#",
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-16 md:py-24"
    >
      <div
        ref={ref}
        className={`max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full section-hidden ${
          visible ? "section-visible" : ""
        }`}
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolios.map(({ id, src, title, description, demo, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg flex flex-col bg-gray-900 overflow-hidden"
            >
              <img
                src={src}
                alt={title}
                className="w-full object-cover duration-200 hover:scale-105"
              />
              <div className="flex flex-col flex-1 p-4">
                <h3 className="text-white font-semibold text-base sm:text-lg mb-1">{title}</h3>
                <p className="text-gray-400 text-sm flex-1">{description}</p>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <a
                    href={demo}
                    className="flex-1 text-center px-3 py-2 rounded-md border border-cyan-500 text-cyan-400
                               hover:bg-cyan-500 hover:text-white duration-200 text-sm font-medium"
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    className="flex-1 text-center px-3 py-2 rounded-md border border-gray-500 text-gray-300
                               hover:bg-gray-500 hover:text-white duration-200 text-sm font-medium"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
