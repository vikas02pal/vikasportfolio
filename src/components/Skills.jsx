import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C++', 'JavaScript', 'C', 'Python', 'Java', 'SQL']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'Node.js', 'Express.js', 'Springboot', 'TailwindCSS', 'HTML/CSS']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git & GitHub', 'MySQL', 'MongoDB', 'Postman', 'Matplotlib', 'Streamlit']
    },
    {
      title: 'Soft Skills',
      skills: ['Problem-Solving', 'Team Work', 'Quick Thinker', 'Leadership', 'Communication']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 border-b-2 border-cyan-500 pb-2">My Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#2a2a2a] hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-[#2a2a2a] text-gray-300 rounded-full text-sm font-medium border border-[#3a3a3a] hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
