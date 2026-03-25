import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Together</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Interested in full-stack development opportunities, collaborations, or just want to say hello? 
          Feel free to reach out to me via email or connect on LinkedIn!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a href="mailto:vikas02pal@gmail.com" className="flex items-center justify-center gap-3 p-6 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] hover:border-cyan-500 hover:bg-[#222] transition-all group">
            <span className="text-3xl group-hover:scale-110 transition-transform">✉️</span>
            <div>
              <p className="text-sm text-gray-400 text-left">Email</p>
              <p className="text-white font-medium">vikas02pal@gmail.com</p>
            </div>
          </a>
          
          <a href="tel:8081944988" className="flex items-center justify-center gap-3 p-6 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] hover:border-purple-500 hover:bg-[#222] transition-all group">
            <span className="text-3xl group-hover:scale-110 transition-transform">📱</span>
            <div>
              <p className="text-sm text-gray-400 text-left">Mobile</p>
              <p className="text-white font-medium">8081944988</p>
            </div>
          </a>
          
          <a href="https://github.com/vikas02pal" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-6 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] hover:border-cyan-500 hover:bg-[#222] transition-all group">
            <span className="text-3xl group-hover:scale-110 transition-transform">🐙</span>
            <div>
              <p className="text-sm text-gray-400 text-left">GitHub</p>
              <p className="text-white font-medium">vikas02pal</p>
            </div>
          </a>
          
          <a href="https://www.linkedin.com/in/vikas-pal-808abc" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-6 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] hover:border-purple-500 hover:bg-[#222] transition-all group">
            <span className="text-3xl group-hover:scale-110 transition-transform">💼</span>
            <div>
              <p className="text-sm text-gray-400 text-left">LinkedIn</p>
              <p className="text-white font-medium">vikas-pal-808abc</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
