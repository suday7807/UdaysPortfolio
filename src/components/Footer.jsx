import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-500 text-center py-6 text-sm">
      <p>&copy; {new Date().getFullYear()} Uday Singh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
