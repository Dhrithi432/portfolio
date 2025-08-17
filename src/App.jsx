import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Card from './components/Card';

function App() {
    return (
        <div className="font-sans text-gray-900">
          <Navbar/>
           <Card className='my-6'> <Hero/></Card>   
           <Card className='my-6'><Skills /></Card>
           <Card className='my-6'><Projects /></Card>
           <Card className='my-6'><Experience /></Card>
           <Card className='my-6'><Contact /></Card>
        </div>
    );
}

export default App
