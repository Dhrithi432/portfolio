import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="px-12 py-20">
      <h2 className="text-3xl font-semibold mb-12 text-center">
        Featured Projects
      </h2>

      <div className="flex items-center mb-16">
        <img
          src="/placeholder-project.png"
          alt="Project 1"
          className="w-1/2 rounded-xl shadow-lg"
        />
        <div className="ml-12">
          <h3 className="text-2xl font-semibold mb-4">
            Inventory Management Platform
          </h3>
          <p className="mb-2"><strong>Problem:</strong> Manual spreadsheets caused delays and errors.</p>
          <p className="mb-2"><strong>Solution:</strong> Implemented live inventory tracking with WebSockets.</p>
          <p className="mb-4"><strong>Impact:</strong> Reduced update time from 24h to under 1 minute.</p>
          <div className="space-x-4">
            <a href="#" className="text-blue-600 hover:underline">Live Demo</a>
            <a href="#" className="text-blue-600 hover:underline">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
