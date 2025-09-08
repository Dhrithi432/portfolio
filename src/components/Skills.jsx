import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiPython, SiJavascript, SiTypescript, SiGo, SiMysql, SiMongodb, SiRedis,
  SiTensorflow, SiScikitlearn, SiDocker, SiKubernetes, 
  SiReact, SiAngular, SiNodedotjs, SiGit, SiJenkins, SiApachekafka, 
  SiPostman, SiGraphql, SiJest, SiSelenium,
  SiHtml5, SiCss3, SiPostgresql, SiRabbitmq
} from "react-icons/si";
import { Code2, Monitor, Cloud, Database, Settings, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    name: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      // { name: "Java", icon: SiJava, level: "Expert" },
      { name: "Python", icon: SiPython, level: "Expert" },
      { name: "JavaScript", icon: SiJavascript, level: "Expert" },
      { name: "TypeScript", icon: SiTypescript, level: "Advanced" },
      { name: "Go", icon: SiGo, level: "Intermediate" },
      { name: "HTML5", icon: SiHtml5, level: "Expert" },
      { name: "CSS3", icon: SiCss3, level: "Expert" }
    ]
  },
  {
    name: "Frontend",
    icon: <Monitor className="w-5 h-5" />,
    skills: [
      { name: "React.js", icon: SiReact, level: "Expert" },
      { name: "Angular", icon: SiAngular, level: "Advanced" },
      { name: "Node.js", icon: SiNodedotjs, level: "Expert" }
    ]
  },
  {
    name: "Backend",
    icon: <Settings className="w-5 h-5" />,
    skills: [
      { name: "Spring Boot", icon: Wrench, level: "Expert" }, // fallback
      { name: "FastAPI", icon: Wrench, level: "Advanced" },   // fallback
      { name: "GraphQL", icon: SiGraphql, level: "Advanced" }
    ]
  },
  {
    name: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      // { name: "AWS", icon:, level: "Advanced" },
      { name: "Docker", icon: SiDocker, level: "Expert" },
      { name: "Kubernetes", icon: SiKubernetes, level: "Intermediate" },
      { name: "Jenkins", icon: SiJenkins, level: "Advanced" }
    ]
  },
  {
    name: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "MySQL", icon: SiMysql, level: "Expert" },
      { name: "MongoDB", icon: SiMongodb, level: "Expert" },
      { name: "Redis", icon: SiRedis, level: "Advanced" },
      { name: "PostgreSQL", icon: SiPostgresql, level: "Advanced" },
      { name: "ElasticSearch", icon: Wrench, level: "Intermediate" } // fallback
    ]
  },
  {
    name: "Tools & Testing",
    icon: <Settings className="w-5 h-5" />,
    skills: [
      { name: "Git", icon: SiGit, level: "Expert" },
      { name: "Jest", icon: SiJest, level: "Advanced" },
      { name: "Selenium", icon: SiSelenium, level: "Advanced" },
      { name: "Postman", icon: SiPostman, level: "Expert" },
      { name: "Kafka", icon: SiApachekafka, level: "Advanced" },
      { name: "RabbitMQ", icon: SiRabbitmq, level: "Advanced" }
    ]
  },
  {
    name: "AI & ML",
    icon: <Brain className="w-5 h-5" />,
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, level: "Advanced" },
      { name: "Scikit-learn", icon: SiScikitlearn, level: "Advanced" }
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const currentCategory = skillCategories[activeTab];

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert": return "text-green-600 bg-green-100 dark:bg-green-900/30";
      case "Advanced": return "text-blue-600 bg-blue-100 dark:bg-blue-900/30";
      case "Intermediate": return "text-orange-600 bg-orange-100 dark:bg-orange-900/30";
      default: return "text-gray-600 bg-gray-100 dark:bg-gray-900/30";
    }
  };

  return (
    // <section
    //   id="skills"
    //   className="mt-12 card rounded-[20px] p-4 sm:p-8 border border-gray-700 max-w-6xl mx-auto"
    // >
    //   <div className="mb-8 text-center">
    //     <p className="text-blue-600 text-lg font-semibold">03. What I Know</p>
    //     <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">Technical Skills</h2>
    //     <p className="text-gray-600 dark:text-gray-300 mt-2">
    //       Click on categories to explore my technical expertise
    //     </p>
    //   </div>

    <section
      id="skills"
      className="card rounded-[20px] sm:p-4 mt-4 max-w-4xl mx-auto"
    >
      <div className="mb-8 ">
        <h2 className="text-4xl sm:text-2xl font-extrabold text-gray-900 dark:text-white font-sans mt-2 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Technical Skills
        </h2>
      </div>

      <div className="flex gap-0" >
        {/* Sidebar Tabs */}
        <div className="w-64 bg-gray-50 dark:bg-gray-800 rounded-l-lg border-r border-gray-200 dark:border-gray-700">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
              Categories
            </h3>
            <nav className="space-y-1">
              {skillCategories.map((category, idx) => (
                <button
                  key={category.name}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left px-4 py-3 rounded-md font-medium text-[14px] transition-all duration-200 flex items-center gap-3
                    ${activeTab === idx 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-blue-600'
                    }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Skills Content */}
        <div className="flex-1 bg-white dark:bg-gray-900 rounded-r-lg p-6">
          <motion.div
            key={`skills-${activeTab}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                {currentCategory.icon}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {currentCategory.name}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {currentCategory.skills.length} technologies in this category
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentCategory.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow duration-200"
                >
                  {skill.icon 
                    ? <skill.icon className="text-3xl text-gray-700 dark:text-gray-300" />
                    : <Wrench className="text-3xl text-gray-700 dark:text-gray-300" />}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional skills note for AI/ML */}
            {currentCategory.name === "AI & ML" && (
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Additional AI/ML Experience:</strong> HuggingFace, LangChain, RAG Systems, FAISS, LLMs, LORA, qLORA
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
