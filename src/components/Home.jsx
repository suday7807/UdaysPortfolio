import React, { useEffect, useState } from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const TEXTS = ["Full-Stack Developer", "Backend Developer", "React Developer"];
const TYPE_SPEED = 100;
const DELETE_SPEED = 60;
const PAUSE_MS = 1500;

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TEXTS[textIndex];

    const delay =
      !isDeleting && displayText === current
        ? PAUSE_MS
        : isDeleting
        ? DELETE_SPEED
        : TYPE_SPEED;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === current) {
        setIsDeleting(true);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % TEXTS.length);
      } else if (isDeleting) {
        setDisplayText(current.substring(0, displayText.length - 1));
      } else {
        setDisplayText(current.substring(0, displayText.length + 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-6 md:gap-16 pt-20 md:pt-0">
        <div className="flex flex-col justify-center md:flex-1 animate-fadeInUp">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white">
            Hi, I'm Uday
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400 mt-2 mb-3 h-8 sm:h-10 flex items-center">
            {displayText}
            <span className="typewriter-cursor ml-0.5">&nbsp;</span>
          </p>
          <p className="text-gray-500 py-3 text-sm sm:text-base">
            Backend Developer with 2+ years of experience building scalable
            systems using Node.js, Express.js, NestJS, MongoDB, and Redis.
            Strong expertise in REST APIs, JWT auth, and performance
            optimization. Currently expanding into Docker, AWS, and
            AI-integrated workflows using OpenAI API, Claude API, and MCP.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              offset={-80}
              className="group text-white w-fit px-5 py-2.5 sm:px-6 sm:py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-sm sm:text-base"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-2/5 sm:w-1/3 md:w-2/5 flex-shrink-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
