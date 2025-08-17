import React from "react";

export default function Hero() {
  return (
    <section id="home" className="flex justify-between items-center px-12 py-20">
      <div className="hero-name max-w-xl">
        <h1 className="text-5xl font-bold mb-6">
          Hi, I'm Dhrithi 👋
        </h1>
        <p className="text-lg mb-8">
        I am a Software Engineer building scalable, user-focused web apps, specializing in React, Node.js, and cloud architecture to deliver
        performant, maintainable software for fast-moving teams.
        </p>
        <div className="space-x-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="w-1/3">
        <img
          src="/placeholder-hero.png"
          alt="Profile"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
