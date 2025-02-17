// components/Projects.tsx
"use client";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const projects = [
  {
    title: "Poker Debt Facilitator",
    description: "Simple and practical app that facilitates account splitting after playing poker :)",
    tech: ["React", "TypeScript", "React Native"],
    github: "https://github.com/gustavokbugs/poker-debt-facilitator",
  },
//   {
//     title: "Task Management App",
//     description: "Real-time collaborative task management system",
//     tech: ["React", "Firebase", "Tailwind", "WebSockets"],
//     github: "https://github.com/yourusername/task-app",
//     deploy: "https://tasks.example.com"
//   },
];

const Projects = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-28">
        <Header />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-400 transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <CodeBracketIcon className="w-8 h-8 text-purple-400" />
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    </a>
                    {/* <a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a> */}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-900/50 text-xs text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-blob mix-blend-screen" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full animate-blob animation-delay-2000 mix-blend-screen" />
      </div>
    </section>
  );
};

export default Projects;