import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="px-12 py-20 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-12 text-center">Experience</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold">Software Engineer — XYZ Corp (2022–Present)</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Optimized API queries, improving response time by 40%.</li>
            <li>Migrated monolithic codebase to microservices, reducing deployment times from 30min to 5min.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
