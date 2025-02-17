"use client";
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <GlobeAltIcon className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold text-white">
              dev.gustavo<span className="text-blue-400">_bugs</span>
              <span className="text-purple-400 ml-1">&lt;/&gt;</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 flex-1 justify-end">
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;