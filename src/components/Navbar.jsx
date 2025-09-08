import React, { useContext } from "react";
import {DarkModeContext} from "../context/DarkModeContext";


export default function Navbar() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <header
    className={`sticky top-0 z-50 px-12 py-4 border-2 rounded-lg backdrop-blur-sm flex justify-between items-center 
      ${darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900 border-gray-200"}`}
  >      <div className="font-bold text-xl">Dhrithi Gulannavar | Software Engineer </div>
      <nav className="flex items-center space-x-8 text-lg">
        <a href="#home" className="hover:text-blue-500">Home</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#skills" className="hover:text-blue-500">Skills</a>
        <a href="#experience" className="hover:text-blue-500">Experience</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
        
      </nav>
    </header>
  );
}
