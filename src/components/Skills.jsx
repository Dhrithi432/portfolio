import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="px-12 py-20 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-12 text-center">Skills</h2>
      <div className="grid grid-cols-3 gap-12 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-4">Frontend</h3>
          <p>React, Next.js, TypeScript, TailwindCSS</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Backend</h3>
          <p>Node.js, Express, PostgreSQL, Prisma</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">DevOps</h3>
          <p>Docker, AWS Lambda, CI/CD, GitHub Actions</p>
        </div>
      </div>
    </section>
  );
}
