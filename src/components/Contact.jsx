import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaUserCheck, FaCalendarAlt, FaIdBadge, FaFileAlt } from 'react-icons/fa';

const contactInfo = [
  {
    label: 'Email',
    value: 'dhrithi.vg@gmail.com',
    href: 'mailto:dhrithi.vg@gmail.com',
    icon: <FaEnvelope className="text-blue-500 text-lg" />,
  },
  {
    label: 'Location',
    value: 'San Jose, CA, USA',
    icon: <FaMapMarkerAlt className="text-blue-500 text-lg" />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/dhrithi',
    href: 'https://linkedin.com/in/dhrithi',
    icon: <FaLinkedin className="text-blue-500 text-lg" />,
  },
  {
    label: 'GitHub',
    value: 'github.com/Dhrithi432',
    href: 'https://github.com/Dhrithi432',
    icon: <FaGithub className="text-blue-500 text-lg" />,
  },
  // {
  //   label: 'Resume',
  //   value: 'View Resume',
  //   href: '#', // Replace with your resume link
  //   icon: <FaFileAlt className="text-blue-500 text-lg" />,
  // },
];

const availability = [
  {
    label: 'Status',
    value: 'Open to Opportunities',
    icon: <FaUserCheck className="text-blue-500 text-lg" />,
  },
  {
    label: 'Available',
    value: 'Immediately',
    icon: <FaCalendarAlt className="text-blue-500 text-lg" />,
  },
  {
    label: 'Work Authorization',
    value: 'Authorized to Work (F1 OPT - STEM Eligible)',
    icon: <FaIdBadge className="text-blue-500 text-lg" />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="card rounded-[20px] sm:p-4 mt-4 max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-4xl sm:text-2xl font-extrabold text-gray-900 dark:text-white font-sans mt-2 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Contact
        </h2>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        
        <div className="p-8">
          {/* <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
              Let's build something great together. I'm always open to discussing new opportunities, 
              interesting projects, or just having a chat about technology and innovation.
            </p>
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-blue-500 font-bold text-lg">▸</span>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-200">
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-900 dark:text-white text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-gray-900 dark:text-white text-sm">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-blue-500 font-bold text-lg">▸</span>
                Availability
              </h3>
              
              <div className="space-y-4">
                {availability.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                        {item.label}
                      </div>
                      <div className="text-gray-700 dark:text-white text-sm">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-500 font-bold text-lg">▸</span>
                  <h4 className="text-blue-700 dark:text-blue-300 font-semibold">Ready to Connect</h4>
                </div>
                <p className="text-blue-600 dark:text-blue-400 text-sm">
                  Feel free to reach out via email or connect with me on LinkedIn. 
                  I typically respond within 24 hours.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}