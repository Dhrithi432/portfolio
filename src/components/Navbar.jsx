import React from "react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-12 py-6 border-b border-gray-200">
      <div className="font-bold text-xl">Dhrithi Gulannavar | Software Engineer </div>
      <nav className="space-x-8 text-lg">
        <a href="#home" className="hover:text-blue-500">Home</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#skills" className="hover:text-blue-500">Skills</a>
        <a href="#experience" className="hover:text-blue-500">Experience</a>
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </nav>
    </header>
  );
}
