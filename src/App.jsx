import { useContext, useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { DarkModeContext } from "./context/DarkModeContext";
import Lightswitch from "./Lightswitch";

function App() {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>

            <Navbar />
            <Hero />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
                        <Lightswitch />
        </div>
    );
}

export default App
