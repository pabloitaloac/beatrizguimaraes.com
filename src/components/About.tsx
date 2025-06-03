const About = () => {
  const skills = [
    { name: "User Research", level: 95, icon: "🔍" },
    { name: "UI Design", level: 90, icon: "🎨" },
    { name: "UX Design", level: 92, icon: "💡" },
    { name: "Prototyping", level: 88, icon: "⚡" },
    { name: "Design Systems", level: 85, icon: "🔧" },
    { name: "Usability Testing", level: 90, icon: "📊" }
  ];

  const experience = [
    {
      year: "2023-Present",
      role: "UI/UX Designer",
      company: "Freelance",
      description: "Providing UI/UX design services for web and mobile applications, focusing on user-centered design and business growth."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Passionate about creating meaningful digital experiences that solve real problems and delight users.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story & Image */}
          <div className="animate-fadeInLeft">
            <div className="relative">
              {/* Profile Image Placeholder */}
              <div className="w-80 h-80 mx-auto lg:mx-0 bg-gradient-to-br from-rose-200 to-purple-200 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-8xl">👩‍💻</div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-rose-300 rounded-full opacity-30 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-300 rounded-lg opacity-40 animate-float delay-300"></div>
            </div>

            {/* Personal Story */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
              <p className="text-gray-600 mb-4">
                Currently pursuing Software Engineering (2021-2026) while specializing in UI/UX design. 
                Over 1+ year, I&apos;ve been developing my expertise through comprehensive education and 
                hands-on project experience.
              </p>
              <p className="text-gray-600">
                I believe great design is invisible – it just works. My approach combines 
                data-driven insights with creative intuition to create products that users love.
              </p>
              
              {/* Education */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Education</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Software Engineering (2021-2026) - Currently studying</li>
                  <li>• Advanced Graphic Design at Alura (2024)</li>
                  <li>• UI/UX Advanced at Alura (2023-2024)</li>
                  <li>• Curso Superior de Tecnologia UX Designer at Coursera (2024-2025)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Experience */}
          <div className="animate-fadeInRight">
            {/* Skills */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className={`animate-fadeInUp delay-${index * 100}`}>
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="ml-auto text-rose-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-rose-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={exp.role} className={`relative pl-8 animate-fadeInUp delay-${index * 150}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-4 h-4 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full"></div>
                    {/* Timeline line */}
                    {index !== experience.length - 1 && (
                      <div className="absolute left-2 top-6 w-0.5 h-16 bg-rose-200"></div>
                    )}
                    
                    <div className="bg-rose-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                      <div className="text-sm text-rose-600 font-medium">{exp.year}</div>
                      <h4 className="text-lg font-semibold text-gray-900">{exp.role}</h4>
                      <div className="text-purple-600 font-medium mb-2">{exp.company}</div>
                      <p className="text-gray-600 text-sm">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-20 animate-fadeInUp delay-500">
          <div className="bg-gradient-to-r from-rose-50 to-purple-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-rose-600 mb-2">1</div>
                <div className="text-gray-600">Project Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
                <div className="text-gray-600">Happy Client</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600 mb-2">1+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 