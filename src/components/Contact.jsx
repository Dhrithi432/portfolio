import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="px-12 py-20 border border-gray-700 rounded-lg">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <p className="mb-6">Let’s build something great together.</p>
      <div className="space-x-6">
        <a href="mailto:you@example.com" className="text-blue-600 hover:underline">
          Email
        </a>
        <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 hover:underline">
          LinkedIn
        </a>
        <a href="https://github.com/yourprofile" className="text-blue-600 hover:underline">
          GitHub
        </a>
      </div>
    </section>
  );
}
