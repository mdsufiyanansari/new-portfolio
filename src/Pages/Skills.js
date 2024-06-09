import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);

  // Simulate loading data
  useEffect(() => {
    setTimeout(() => {
      // Dummy skills data
      const dummySkillsData = [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 94 },
        { name: 'React.js', level: 70 }
      ];
      setSkillsData(dummySkillsData);
    }, 2000); // Simulate 2 seconds loading time
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-400 to-purple-100 text-white py-12">
      <div className="container mx-auto px-4 bg-gradient-to-tr from-purple-100 to-purple-400 rounded-tl-full rounded-br-full flex flex-col lg:flex-row items-center lg:items-start p-8">
        {/* Left Column - Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 animate-pulse flex justify-center">
          <img src="image/level.png" alt="Skills" className="max-w-full h-auto rounded-2xl" />
        </div>
        {/* Right Column - Skills */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <h2 className="text-4xl font-bold mb-8 text-center lg:text-left">Skills</h2>
          <div>
            {skillsData.map((skill, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-center lg:text-left">{skill.name} - {skill.level}%</h3>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div style={{ width: `${skill.level}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-white"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
