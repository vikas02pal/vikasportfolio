import React from 'react';

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 border-b-2 border-purple-500 pb-2">Certifications & Extra-Curricular</span>
        </h2>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] p-8 rounded-2xl border border-[#3a3a3a] hover:border-cyan-500/50 transition-colors duration-300">
            <h3 className="text-xl font-bold text-white mb-6">Certificates & Training</h3>
            <ul className="space-y-4">
              <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-[#3a3a3a] pb-4 last:border-0 last:pb-0">
                <span className="text-gray-300 font-medium">Fundamental of Data Structure: Learn, Apply and Build Project – LPU</span>
                <span className="text-cyan-400 text-sm mt-1 sm:mt-0 whitespace-nowrap">July 2025</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-[#3a3a3a] pb-4 last:border-0 last:pb-0">
                <span className="text-gray-300 font-medium">Learn C Programming – Beginner to Master – Udemy</span>
                <span className="text-cyan-400 text-sm mt-1 sm:mt-0 whitespace-nowrap">February 2024</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-[#3a3a3a] pb-4 last:border-0 last:pb-0">
                <span className="text-gray-300 font-medium">Responsive Web Design - Freecodecamp</span>
                <span className="text-cyan-400 text-sm mt-1 sm:mt-0 whitespace-nowrap">November 2023</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span className="text-gray-300 font-medium">Introduction to Hardware and software - Coursera</span>
                <span className="text-cyan-400 text-sm mt-1 sm:mt-0 whitespace-nowrap">November 2023</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] p-8 rounded-2xl border border-[#3a3a3a] hover:border-purple-500/50 transition-colors duration-300">
             <h3 className="text-xl font-bold text-white mb-4">Extra-Curricular Activities</h3>
             <ul className="space-y-4">
               <li>
                 <p className="text-gray-300">
                   <strong className="text-white">Women's Development & Empowerment (June 2024):</strong> Community Development Project on the promotion of women's development and empowerment by an NGO.
                 </p>
               </li>
               <li>
                 <p className="text-gray-300">
                   <strong className="text-white">Build-a-Thon Hackathon:</strong> Engaged in competitive coding, enhancing skills in teamwork and real-world problem-solving.
                 </p>
               </li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
