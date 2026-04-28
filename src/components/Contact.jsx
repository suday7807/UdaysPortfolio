import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
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
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white py-16 md:py-24"
    >
      <div
        ref={ref}
        className={`flex flex-col px-4 justify-center max-w-screen-lg mx-auto section-hidden ${
          visible ? "section-visible" : ""
        }`}
      >
        <div className="pb-6 md:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-4 md:py-6 text-sm sm:text-base">
            Submit the form below to get in touch with me.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/4f2b92fa-13e3-4a67-9b3d-6131dbc518af"
            className="flex flex-col w-full sm:w-3/4 md:w-1/2"
            method="post"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2.5 bg-transparent border-2 border-gray-600 rounded-md text-white
                         placeholder-gray-500 focus:outline-none focus:border-cyan-500
                         focus:ring-1 focus:ring-cyan-500 transition-colors duration-200 text-sm sm:text-base"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-3 md:my-4 p-2.5 bg-transparent border-2 border-gray-600 rounded-md text-white
                         placeholder-gray-500 focus:outline-none focus:border-cyan-500
                         focus:ring-1 focus:ring-cyan-500 transition-colors duration-200 text-sm sm:text-base"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="7"
              className="p-2.5 bg-transparent border-2 border-gray-600 rounded-md text-white
                         placeholder-gray-500 focus:outline-none focus:border-cyan-500
                         focus:ring-1 focus:ring-cyan-500 transition-colors duration-200 text-sm sm:text-base"
            ></textarea>
            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3
                         my-6 md:my-8 mx-auto flex items-center rounded-md hover:scale-110
                         hover:shadow-lg hover:shadow-cyan-500/30 duration-300 text-sm sm:text-base"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
