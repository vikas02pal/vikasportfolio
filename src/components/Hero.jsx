import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-cyan-400 font-medium tracking-wide">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            Vikas Pal
          </h1>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-400">
            B.Tech CSE Student & Tech Enthusiast
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto md:mx-0">
            I'm a passionate software developer with expertise in C++, Java, Python, JavaScript, and frameworks like React, Node.js, and Spring Boot. 
            I build intelligent applications, full-stack web platforms, and robust backend systems.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a href="/Vikas_Pal_CV.pdf" download="Vikas_Pal_CV.pdf" className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download CV
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-[#2a2a2a] text-white font-medium hover:bg-[#1a1a1a] transition-colors">
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center py-8 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 blur-3xl rounded-full"></div>
          <img 
            src="/profile_photo.png" 
            alt="Vikas Pal" 
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#2a2a2a] shadow-2xl relative z-10 hover:border-cyan-400 transition-colors duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
