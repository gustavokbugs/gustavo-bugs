"use client"

import { TypeAnimation } from 'react-type-animation';
import {  CodeBracketIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-up">
            Hi, I&rsquo;m <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Gustavo</span>
          </h1>
          
          <div className="text-xl md:text-3xl font-mono">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'Problem Solver',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="bg-gray-800 px-4 py-2 rounded-lg inline-block"
            />
          </div>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Crafting digital experiences with modern technologies and 
            pixel-perfect implementations.
          </p>

          <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
            View Projects
          </button>
        </div>

        <div className="relative w-full h-96 hidden md:flex items-center justify-center">
          <div className="absolute w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-blob animation-delay-2000 opacity-70"></div>
          <div className="absolute w-72 h-72 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full animate-blob opacity-70"></div>
          <div className="absolute w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-blob animation-delay-4000 opacity-70"></div>
          
          <div className="absolute z-10 flex items-center justify-center w-64 h-64 bg-gray-800 rounded-full backdrop-blur-xl">
            <CodeBracketIcon className="w-32 h-32 text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;