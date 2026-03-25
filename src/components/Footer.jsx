import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] py-8 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Vikas Pal. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/vikas02pal" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/vikas-pal-808abc" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-400 transition-colors">LinkedIn</a>
          <a href="mailto:vikas02pal@gmail.com" className="text-gray-500 hover:text-cyan-400 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
