import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 border-b-2 border-purple-500 pb-2">About & Education</span>
        </h2>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#2a2a2a] hover:border-purple-500/50 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2">Lovely Professional University</h3>
            <p className="text-cyan-400 font-medium mb-4">Bachelor of Technology - Computer Science and Engineering</p>
            <div className="flex justify-between items-center text-gray-400 text-sm">
              <span>Punjab, India</span>
              <span>August 2023 - Pursuing</span>
            </div>
            <p className="text-gray-300 mt-4">CGPA: 6.68</p>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#2a2a2a] hover:border-purple-500/50 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2">Bal Bharti School</h3>
            <p className="text-cyan-400 font-medium mb-4">Intermediate (12th)</p>
            <div className="flex justify-between items-center text-gray-400 text-sm">
              <span>Prayagraj, Uttar Pradesh</span>
              <span>April 2020 - March 2022</span>
            </div>
            <p className="text-gray-300 mt-4">Percentage: 68.2%</p>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#2a2a2a] hover:border-purple-500/50 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2">Jamuna Christian Junior High School</h3>
            <p className="text-cyan-400 font-medium mb-4">Matriculation (10th)</p>
            <div className="flex justify-between items-center text-gray-400 text-sm">
              <span>Prayagraj, Uttar Pradesh</span>
              <span>April 2018 - March 2020</span>
            </div>
            <p className="text-gray-300 mt-4">Percentage: 80%</p>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] p-8 rounded-2xl border border-[#3a3a3a] hover:border-cyan-500/50 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">What I Do</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                As a Full Stack Developer, I love building clean, user-friendly, and fast applications. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p>
                I work on both the front-end (using React and Tailwind CSS) to create responsive layouts, and the back-end (using Java, Node.js, and Databases) to make sure data is handled securely and efficiently.
              </p>
              <p>
                I believe in continuous learning. I am always looking for new technologies to improve my coding skills and deliver better products for the users.
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default About;
