'use client'
import { TypeAnimation } from 'react-type-animation';
import { CpuChipIcon, PaintBrushIcon, CommandLineIcon, CloudIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: PaintBrushIcon, tech: ['React', 'TypeScript', 'Next.js', 'Tailwind'] },
    { name: 'Backend', icon: CpuChipIcon, tech: ['Node.js', 'Go', 'Java', 'PostgreSQL'] },
    { name: 'DevOps', icon: CloudIcon, tech: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
    { name: 'Other', icon: CommandLineIcon, tech: ['Git', 'Linux', 'REST APIs', 'Testing'] },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-[200px] "> 
      <Header />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-white relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="text-lg md:text-xl space-y-6">
              <TypeAnimation
                sequence={[
                  `I'm a full-stack developer with 2+ years of experience building digital products. My passion lies in creating efficient, scalable solutions that deliver exceptional user experiences.`,
                  1000,
                ]}
                wrapper="p"
                cursor
                className="text-gray-300 leading-relaxed"
              />
              
              <p className="text-gray-300 leading-relaxed">
                I specialize in modern web development with expertise across the entire stack. When I'm not coding, you'll find me contributing to open-source projects, experimenting with new technologies, or mentoring junior developers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Projects', value: '10+' },
                { label: 'Experience', value: '2+ years' },
                { label: 'Humor', value: 'Lvl. 100' },
                { label: 'Coffee', value: '∞' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-blue-400 transition-colors">
                  <div className="text-blue-400 text-xl font-bold">{item.value}</div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 relative z-10">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="group p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-purple-400 transition-all duration-300"
              >
                <skill.icon className="w-8 h-8 text-purple-400 mb-4 group-hover:text-blue-400 transition-colors" />
                <h3 className="text-xl font-semibold text-white mb-3">{skill.name}</h3>
                <ul className="space-y-2">
                  {skill.tech.map((tech) => (
                    <li 
                      key={tech}
                      className="text-gray-300 text-sm before:content-['▹'] before:text-blue-400 before:mr-2"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-blob mix-blend-screen"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full animate-blob animation-delay-2000 mix-blend-screen"></div>
      </div>
    </main>
  );
};

export default About;