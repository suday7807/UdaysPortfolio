import React, { useEffect, useRef, useState } from "react";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github     from "../assets/github.png";
import tailwind   from "../assets/tailwind.png";
import node       from "../assets/node.png";
import express    from "../assets/Express.svg";
import nest       from "../assets/Nest.png";
import typescript from "../assets/TypeScript.png";
import aws        from "../assets/AWS.png";
import postgres   from "../assets/PostgresSQL.png";
import claude     from "../assets/claude-color.png";
import mongodb    from "../assets/MongoDB.png";

const Experience = () => {
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

  const techs = [
    { id: 1,  src: javascript, title: "JavaScript",  style: "shadow-yellow-500" },
    { id: 2,  src: node,       title: "Node.js",     style: "shadow-green-500"  },
    { id: 3,  src: express,    title: "Express.js",  style: "shadow-gray-500"   },
    { id: 4,  src: nest,       title: "Nest.js",     style: "shadow-red-500"    },
    { id: 5,  src: typescript, title: "TypeScript",  style: "shadow-blue-500"   },
    { id: 6,  src: claude,     title: "Claude Code", style: "shadow-orange-400" },
    { id: 7,  src: reactImage, title: "React",       style: "shadow-blue-500"   },
    { id: 8,  src: tailwind,   title: "Tailwind",    style: "shadow-sky-500"    },
    { id: 9,  src: mongodb,    title: "MongoDB",     style: "shadow-green-500"  },
    { id: 10, src: github,     title: "GitHub",      style: "shadow-gray-400"   },
    { id: 11, src: aws,        title: "AWS",         style: "shadow-orange-500" },
    { id: 12, src: postgres,   title: "PostgreSQL",  style: "shadow-blue-400"   },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full py-16 md:py-24"
    >
      <div
        ref={ref}
        className={`max-w-screen-lg mx-auto px-4 flex flex-col justify-center w-full text-white section-hidden ${
          visible ? "section-visible" : ""
        }`}
      >
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 text-center py-4">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-3 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-12 sm:w-16 md:w-20 mx-auto" />
              <p className="mt-3 text-xs sm:text-sm md:text-base">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
