import React from "react";

export default function About() {
  return (
    <section id="about" className="px-12 py-20">
      <h2 className="text-3xl font-semibold mb-8 text-center">About Me</h2>
      <div className="flex items-center justify-center">
        <div className="max-w-xl">
          <p>
            I’m a fullstack engineer who thrives at the intersection of UX and
            scalability. I enjoy working in cross-functional teams, translating
            product goals into performant, maintainable systems.
          </p>
        </div>
      </div>
    </section>
  );
}
