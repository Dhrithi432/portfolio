// import React from "react";
// import { FaGraduationCap, FaAward } from 'react-icons/fa';

// const education = [
//   {
//     degree: 'Master of Science in Computer Software Engineering',
//     school: 'San Jose State University, CA, USA',
//     gpa: '3.8/4.0',
//     year: 'August 2023 - May 2025',
//   },
//   {
//     degree: 'Bachelor of Science in Computer Science and Engineering',
//     school: 'Nitte Meenakshi Institute of Technology, Bengaluru, IN',
//     gpa: '3.5/4.0',
//     year: 'August 2018 - May 2022',
//   },
// ];

// const achievements = [
//   {
//     title: 'AWS Certified Developer',
//     desc: 'Associate Level (2024)',
//     icon: <FaAward className="text-blue-600 text-xl" />,
//   },
//   {
//     title: 'Dean\'s List',
//     desc: '2023-2024',
//     icon: <FaAward className="text-blue-600 text-xl" />,
//   },
// ];

// export default function Hero() {
//   return (
//     <div className=" card rounded-[20px] p-4 sm:p-8 max-w-4xl mx-auto">
//       <section id="home" className="flex justify-between border border-gray-700 rounded-lg p-8 mb-8">
//         <div className="hero-name max-w-xl">
//           <h1 className="text-5xl font-bold mb-6 relative w-[max-content]
//             before:absolute before:inset-0 before:animate-typewriter
//             before:bg-white
//             after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
//             after:bg-black bg-center">
//             Hi, I'm Dhrithi Gulannavar
//           </h1>
//           <p className="text-lg mb-8">
//             I am a Software Developer building scalable, user-focused web apps, specializing in React, Node.js, and cloud architecture to deliver
//             performant, maintainable software for fast-moving teams.
//           </p>
//           <div className="space-x-4">
//             <a
//               href="/documents/swe_resume_dhrithi.pdf"
//               download="Dhrithi_Resume.pdf"
//               className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
//             >
//               Download Resume
//             </a>
//             <a
//               href="#projects"
//               className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
//             >
//               View Projects
//             </a>
//           </div>
//         </div>
//         <div className="w-1/3">
//           <img
//             src="/portfolio/images/avatar_new.png"
//             alt="Profile"
//             className="rounded-full shadow-lg border-4 border-blue-600 w-48 h-48 object-cover"
//           />
//         </div>
//       </section>

//       {/* Education and Achievements Section */}
//       <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Education Timeline */}
//         <div className="flex flex-col gap-2">
//           <h3 className="text-gray-900 dark:text-white text-[20px] font-bold mb-2">Education</h3>
//           <div className="relative pl-10 border-l-2 border-blue-600">
//             {education.map((edu, idx) => (
//               <div
//                 key={edu.degree}
//                 className="mb-8 last:mb-0 relative"
//               >
//                 <span className="absolute -left-6 top-2 bg-white dark:bg-gray-800 border-2 border-blue-600 rounded-full p-0.5 flex items-center justify-center">
//                   <FaGraduationCap className="text-blue-600 text-base" />
//                 </span>
//                 <div className="ml-2">
//                   <div className="font-bold text-gray-900 dark:text-white text-[16px]">{edu.degree}</div>
//                   <div className="text-gray-600 dark:text-gray-300 text-[15px]">{edu.school}</div>
//                   <div className="text-blue-600 font-mono text-[14px]">GPA: {edu.gpa} &nbsp; | &nbsp; {edu.year}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Achievements as Cards */}
//         <div className="flex flex-col gap-4">
//           <h3 className="text-gray-900 dark:text-white text-[20px] font-bold mb-2">Key Achievements</h3>
//           <div className="grid grid-cols-1 gap-4">
//             {achievements.map((ach, idx) => (
//               <div
//                 key={ach.title}
//                 className="flex items-center gap-4 bg-white dark:bg-gray-800 border border-blue-600 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div>{ach.icon}</div>
//                 <div>
//                   <div className="font-bold text-gray-900 dark:text-white text-[16px]">{ach.title}</div>
//                   <div className="text-gray-600 dark:text-gray-300 text-[14px]">{ach.desc}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from "react";
import { FaGraduationCap, FaAward } from 'react-icons/fa';

const education = [
  {
    degree: 'Master of Science in Computer Software Engineering',
    school: 'San Jose State University, CA, USA',
    gpa: '3.8/4.0',
    year: 'August 2023 - May 2025',
  },
  {
    degree: 'Bachelor of Science in Computer Science and Engineering',
    school: 'Nitte Meenakshi Institute of Technology, Bengaluru, IN',
    gpa: '3.5/4.0',
    year: 'August 2018 - May 2022',
  },
];

const achievements = [
  {
    title: 'AWS Certified Developer',
    desc: 'Associate Level (2024)',
    icon: <FaAward className="text-blue-600 text-xl" />,
  },
  {
    title: 'Dean\'s List',
    desc: '2023-2024',
    icon: <FaAward className="text-blue-600 text-xl" />,
  },
];

export default function Hero() {
  return (
    <div className="card rounded-[20px] p-4 sm:p-8 max-w-4xl mx-auto">
      <section id="home" className="flex flex-col lg:flex-row lg:justify-between border border-gray-700 rounded-lg p-4 sm:p-8 mb-8 gap-6 lg:gap-8">
        <div className="hero-name max-w-xl lg:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 relative w-[max-content]
            before:absolute before:inset-0 before:animate-typewriter
            before:bg-white
            after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
            after:bg-black bg-center">
            Hi, I'm Dhrithi Gulannavar
          </h1>
          <p className="text-base sm:text-lg mb-6 sm:mb-8">
            I am a Software Developer building scalable, user-focused web apps, specializing in React, Node.js, and cloud architecture to deliver
            performant, maintainable software for fast-moving teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 sm:space-y-0">
            <a
              href="/documents/swe_resume_dhrithi.pdf"
              download="Dhrithi_Resume.pdf"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-center"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 text-center"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end lg:w-1/3 lg:order-2">
          <img
            src="/portfolio/images/avatar_new.png"
            alt="Profile"
            className="rounded-full shadow-lg border-4 border-blue-600 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover"
          />
        </div>
      </section>

      {/* Education and Achievements Section */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Timeline */}
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-900 dark:text-white text-[20px] font-bold mb-2">Education</h3>
          <div className="relative pl-10 border-l-2 border-blue-600">
            {education.map((edu, idx) => (
              <div
                key={edu.degree}
                className="mb-8 last:mb-0 relative"
              >
                <span className="absolute -left-6 top-2 bg-white dark:bg-gray-800 border-2 border-blue-600 rounded-full p-0.5 flex items-center justify-center">
                  <FaGraduationCap className="text-blue-600 text-base" />
                </span>
                <div className="ml-2">
                  <div className="font-bold text-gray-900 dark:text-white text-[16px]">{edu.degree}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-[15px]">{edu.school}</div>
                  <div className="text-blue-600 font-mono text-[14px]">GPA: {edu.gpa} &nbsp; | &nbsp; {edu.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements as Cards */}
        <div className="flex flex-col gap-4">
          <h3 className="text-gray-900 dark:text-white text-[20px] font-bold mb-2">Key Achievements</h3>
          <div className="grid grid-cols-1 gap-4">
            {achievements.map((ach, idx) => (
              <div
                key={ach.title}
                className="flex items-center gap-4 bg-white dark:bg-gray-800 border border-blue-600 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>{ach.icon}</div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white text-[16px]">{ach.title}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-[14px]">{ach.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}