
import React, { useState } from 'react';

const companies = [
  {
    name: 'San Jose State University',
    roles: [
      {
        title: 'Teaching Assistant',
        date: 'Jan 2025 – May 2025',
        points: [
          'Led distributed systems and scalability labs on AWS EC2, Lambda, Docker, mentoring 40+ students on maintainable code practices, availability concepts, and modern CI/CD deployment.',
          'Guided applications and backend systems development using REST APIs, GraphQL, AWS VPC configurations, promoting Git workflows and contemporary development tools with focus on performance optimization.',
        ],
      },
    ],
  },
  {
    name: 'Katonic AI',
    roles: [
      {
        title: 'Software Engineer Intern',
        date: 'May 2024 – August 2024',
        points: [
          'Built large-scale distributed RAG chatbot using microservices architecture with HuggingFace, FAISS, LangChain, handling 200+ concurrent users with sub-300ms response times and Docker containerization.',
          'Finetuned model using LORA and qLORA developed API infrastructure using Node.js implementing REST APIs processing 1,000+ daily requests across distributed backend systems.',
          'Integrated AWS Lambda and AWS CloudWatch, optimizing ML pipeline throughput by 25% with comprehensive testing using Jest and Python frameworks.',
        ],
      },
    ],
  },
  {
    name: 'Dell EMC',
    roles: [
      {
        title: 'Software Engineer - I',
        date: 'September 2022 – July 2023',
        points: [
          'Engineered enterprise-scale distributed notification system using Java Spring Boot microservices architecture, processing 10,000+ alerts daily with Lambda triggers, message queues, and Redis caching.',
          'Built production OAuth2 APIs using Spring Security, integrating MySQL and MongoDB with 100% test coverage using Jest and Mocha frameworks.',
          'Developed mobile app compatible Angular components, consuming REST APIs with Cypress integration tests, deployed via Docker containers and Jenkins CI/CD pipelines following Agile/SCRUM development process.',
        ],
      },
    ],
  },
  {
    name: 'Adamas Tech',
    roles: [
      {
        title: 'Software Engineer Intern',
        date: 'November 2021 – August 2022',
        points: [
          'Developed performant Node.js backend systems and Express REST APIs handling bulk operations with SQL databases (MySQL), processing 3,000+ records with well-tested code and optimized database transactions.',
          'Automated DevOps workflows using bash scripting, implementing Git-based CI/CD pipelines eliminating manual processes and improving scalability by 50%.',
          'Built responsive and reusable interfaces using React and deployed the stack service oriented architecture on AWS EC2 along with NGINX configuration.',
        ],
      },
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const company = companies[activeTab];

  return (
    <section id="experience" className="card rounded-[20px] sm:p-4 mt-4 max-w-4xl mx-auto">
      <div className="mb-8">
        {/* <p className="text-blue-600 text-lg font-semibold">02. Where I've Worked</p> */}
        <h2 className="text-4xl sm:text-2xl font-extrabold text-gray-900 dark:text-white font-sans mt-2 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Experience
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        
        {/* Sidebar */}
        <div className="lg:w-80 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Companies</h3>
            <nav className="space-y-2">
              {companies.map((c, idx) => (
                <button
                  key={c.name}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium text-sm
                    ${activeTab === idx 
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-l-4 border-blue-500 shadow-sm' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 border-l-4 border-transparent'
                    }`}
                >
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-xs opacity-75 mt-1">
                    {c.roles[0].date}
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div
            key={`${company.name}-${activeTab}`}
            className="animate-fade-in"
          >
            {company.roles.map((role, idx) => (
              <div key={role.title} className="mb-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {role.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-blue-600 font-semibold">@ {company.name}</span>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="text-gray-600 dark:text-gray-400 font-mono text-sm">
                      {role.date}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {role.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300 leading-relaxed"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        animationFillMode: 'both'
                      }}
                    >
                      <span className="text-blue-500 mt-1 font-bold text-lg">▸</span>
                      <p className="flex-1">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}