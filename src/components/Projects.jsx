import React, { useState } from 'react';

const projectCategories = [
    {
        name: 'Full-Stack',
        projects: [
            {
                name: 'Nexquared',
                title: 'Job Portal Platform',
                date: 'Production Web Application | March 2025 - present',
                image: '/api/placeholder/400/250', // Placeholder for project image
                points: [
                    'Engineered full-stack job portal using Next.js, TypeScript, and Go',
                    'Achieved 95+ Lighthouse performance score with Tailwind CSS',
                    'Implemented Docker containerization and CI/CD pipeline',
                ],
                link: {
                    label: 'Live Demo',
                    url: 'https://app.nexquared.com/',
                    icon: '🌐',
                },
            },
            {
                name: 'Feast-IT',
                title: 'Food Delivery Platform',
                date: 'Full-Stack Web Application | January 2025 - April 2025',
                image: '/api/placeholder/400/250', // Placeholder for project image
                points: [
                    'Developed multi-role platform with React.js and Flask',
                    'Achieved 99.9% system uptime with optimized database queries',
                    'Reduced page load times by 45% through frontend optimization',
                ],
                link: {
                    label: 'GitHub',
                    url: 'https://github.com/Nishma25/FeastIt-app/blob/main/README.md',
                    icon: '🐙',
                },
            },
        ],
    },
    {
        name: 'ML&AI',
        projects: [
            {
                name: 'PDF-Summarizer',
                title: 'PDF Summarizer',
                date: 'LLM-Powered Application | March 2025 - April 2025',
                image: '/api/placeholder/400/250', // Placeholder for project image
                points: [
                    'Built a GenAI-powered document summarizer using Python, PyPDF2, and OpenAI & Google Generative AI APIs to reduce manual document review time by over 80%',
                    'Engineered batch-processing pipelines for context-aware summarization using Pandas and LLMs, improving parsing accuracy and scalability',
                    'Designed a modular architecture with secure API configuration via dotenv, enabling extensibility for future Q&A and multi-doc use cases',
                ],
            },
            {
                name: 'UberFare Estimator',
                title: 'Uber and Lyft Ride Price Prediction',
                date: 'Machine Learning Web Application | September 2024 - December 2024',
                image: '/api/placeholder/400/250', // Placeholder for project image
                points: [
                    'Built a web app to predict real-time Uber/Lyft fares using FastAPI, scikit-learn, and a Random Forest model',
                    'Enabled dynamic fare simulations through AJAX workflows, interactive UI inputs, and Pydantic-validated RESTful APIs for reliable real-time predictions',
                ],
            },
        ],
    },
    {
        name: 'System Design',
        projects: [
            {
                name: 'SDMS',
                title: 'Student Database Management System',
                date: 'Full-Stack Web Application | 2024',
                image: '/api/placeholder/400/250', // Placeholder for project image
                points: [
                    'Designed scalable system architecture with clear separation of concerns using MVC pattern',
                    'Implemented robust database schema with optimized queries and proper indexing',
                    'Created modular portal system for academic, financial, and administrative services',
                    'Utilized Figma for intuitive UI/UX design with responsive layouts',
                ],
                link: {
                    label: 'GitHub',
                    url: 'https://github.com/Nishma25/Student-Database-Management',
                    icon: '🐙',
                },
            },
        ],
    },
    {
        name: 'Games',
        projects: [
            {
                name: 'Quiz-Up',
                title: 'Quiz-Up - Interactive Quiz Platform',
                date: 'Frontend Web Application | 2024',
                image: '/api/placeholder/400/250', // Placeholder for project image
                points: [
                    'Built an interactive Harry Potter themed quiz using vanilla JavaScript',
                    'Implemented dynamic question loading and score tracking system',
                    'Created responsive UI with modern CSS animations and transitions',
                    'Developed user-friendly interface with immediate feedback on answers',
                ],
                link: {
                    label: 'Live Demo',
                    url: 'https://nishma25.github.io/Quiz-Up/',
                    icon: '🌐',
                },
            },
        ],
    },
    {
        name: 'Python',
        projects: [
            {
                name: 'SRMS',
                title: 'Scooter Rental Management System',
                date: 'Python OOP Project | 2024',
                image: '/api/placeholder/400/250', // Placeholder for project image
                points: [
                    'Implemented robust OOP design patterns including inheritance, encapsulation, and polymorphism',
                    'Developed comprehensive unit tests achieving 90%+ code coverage using pytest',
                    'Created modular class hierarchy for scooter management, user authentication, and rental operations',
                    'Built interactive CLI interface with input validation and error handling',
                    'Implemented data persistence using file I/O operations',
                ],
                link: {
                    label: 'GitHub',
                    url: 'https://github.com/Nishma25/Scooter-Rental-Management-System',
                    icon: '🐙',
                },
            },
        ],
    },
];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState(0);
    const [activeProject, setActiveProject] = useState(0);
    const category = projectCategories[activeCategory];
    const project = category.projects[activeProject];

    return (
        <section id="projects" className="card rounded-[20px] sm:p-4 mt-4 max-w-4xl mx-auto">
            <div className="mb-8">
                <h2 className="text-4xl sm:text-2xl font-extrabold text-gray-900 dark:text-white font-sans mt-2 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                    Projects
                </h2>
            </div>

            {/* Tabbed Navigation */}
            <div className="mb-8">
                <div className="flex flex-wrap gap-1 bg-gray-50 dark:bg-gray-800/50 p-1 rounded-lg border border-gray-200 dark:border-gray-700">
                    {projectCategories.map((cat, idx) => (
                        <button
                            key={cat.name}
                            onClick={() => {
                                setActiveCategory(idx);
                                setActiveProject(0);
                            }}
                            className={`px-4 py-2 rounded-md font-mono text-sm transition-all duration-200 whitespace-nowrap
                                ${activeCategory === idx 
                                    ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm border border-gray-200 dark:border-gray-600 font-semibold' 
                                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-white/50 dark:hover:bg-gray-700/50'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Project Content Card */}
            <div className="card rounded-[20px] p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50">
                {/* Project Selector (if multiple projects in category) */}
                {category.projects.length > 1 && (
                    <div className="flex flex-wrap gap-2 pb-6 mb-6 border-b border-gray-200 dark:border-gray-700">
                        {category.projects.map((p, idx) => (
                            <button
                                key={p.name}
                                onClick={() => setActiveProject(idx)}
                                className={`px-3 py-2 text-sm rounded-md font-mono transition-all duration-200
                                    ${activeProject === idx
                                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-600'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                                    }`}
                            >
                                {p.name}
                            </button>
                        ))}
                    </div>
                )}

                <div
                    key={`${project.name}-${activeProject}-${activeCategory}`}
                    className="animate-fade-in"
                >
                    {/* Project Header */}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {project.title} <span className="text-blue-600">@ {project.name}</span>
                        </h3>
                        <p className="text-gray-600 dark:text-blue-400 text-sm mb-4 font-mono">
                            {project.date}
                        </p>
                        
                        {/* Project Links */}
                        {project.link && (
                            <div className="flex flex-wrap gap-4 mb-6">
                                <a
                                    href={project.link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 font-semibold text-sm transition-all duration-200 border border-blue-200 dark:border-blue-700 hover:scale-105 hover:shadow-md"
                                >
                                    <span>{project.link.icon}</span>
                                    <span>{project.link.label}</span>
                                </a>
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Project Image */}
                        <div className="order-2 lg:order-1">
                            <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700">
                                <div className="aspect-video flex items-center justify-center p-8">
                                    {/* Placeholder for project image */}
                                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                                        <div className="text-center">
                                            <div className="text-4xl mb-2">📱</div>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Project Screenshot</p>
                                            <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">{project.name}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="order-1 lg:order-2">
                            <ul className="space-y-4">
                                {project.points.map((point, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-gray-700 dark:text-white text-sm leading-relaxed animate-slide-up"
                                        style={{
                                            animationDelay: `${i * 0.1 + 0.2}s`,
                                            animationFillMode: 'both'
                                        }}
                                    >
                                        <span className="text-blue-600 mt-1 font-bold">▸</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .animate-fade-in {
                    animation: fadeIn 0.6s ease-out;
                }
                
                .animate-slide-up {
                    animation: slideUp 0.6s ease-out;
                    opacity: 0;
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Smooth transitions for interactive elements */
                button {
                    transform: translateZ(0);
                }
                
                button:hover {
                    transform: translateY(-1px);
                }

                /* Enhanced hover effects for project links */
                a:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
                }

                /* Smooth scaling for project image */
                .group:hover .group-hover\\:scale-105 {
                    transform: scale(1.02);
                }
            `}</style>
        </section>
    );
}