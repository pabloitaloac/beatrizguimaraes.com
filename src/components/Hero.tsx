'use client';

import { useEffect, useState } from 'react';

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = ['UI/UX Designer', 'Product Designer', 'User Researcher', 'Design System Expert'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  const tools = [
    { name: 'Figma', icon: '🎨' },
    { name: 'Adobe XD', icon: '💎' },
    { name: 'Sketch', icon: '✏️' },
    { name: 'Protopie', icon: '🔧' },
    { name: 'Framer', icon: '⚡' },
    { name: 'After Effects', icon: '🎬' }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '20+', label: 'Happy Clients' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50 overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-rose-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-lg opacity-30 animate-float delay-200 rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-200 rounded-full opacity-25 animate-float delay-400"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-rose-300 rounded-lg opacity-20 animate-float delay-300"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-rose-300 to-purple-300 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl opacity-15 animate-pulse-slow delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
          
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left">
            {/* Greeting */}
            <div className="animate-fadeInLeft">
              <p className="text-rose-600 font-medium mb-4">👋 Hello, I'm</p>
            </div>

            {/* Main Title */}
            <div className="animate-fadeInLeft delay-100">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Beatriz
                <span className="block bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                  Guimarães
                </span>
              </h1>
            </div>

            {/* Animated Role */}
            <div className="animate-fadeInLeft delay-200 mb-6">
              <div className="relative h-16 overflow-hidden">
                {skills.map((skill, index) => (
                  <p
                    key={skill}
                    className={`absolute inset-0 text-xl lg:text-2xl font-semibold text-rose-600 transition-all duration-500 ${
                      index === currentSkill
                        ? 'opacity-100 transform translate-y-0'
                        : 'opacity-0 transform translate-y-8'
                    }`}
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="animate-fadeInLeft delay-300">
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                I craft digital experiences that blend aesthetics with functionality. 
                Specializing in user-centered design, I transform complex problems into 
                <span className="text-rose-600 font-semibold"> intuitive, beautiful solutions</span> that users love.
              </p>
            </div>

            {/* Stats */}
            <div className="animate-fadeInLeft delay-400 mb-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm animate-fadeInUp delay-${400 + index * 100}`}
                  >
                    <div className="text-2xl font-bold text-rose-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fadeInLeft delay-500">
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#projects"
                  className="group bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center">
                    View My Portfolio
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
                
                <a
                  href="#contact"
                  className="border-2 border-rose-300 text-rose-700 px-8 py-4 rounded-lg hover:bg-rose-50 hover:border-rose-400 transition-all duration-300 flex items-center justify-center"
                >
                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Let's Talk
                </a>
              </div>
            </div>

            {/* Available Status */}
            <div className="animate-fadeInLeft delay-700">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Available for new projects
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Tools/Skills Showcase */}
            <div className="animate-fadeInRight delay-300">
              <div className="relative bg-white/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">Tools & Expertise</h3>
                
                {/* Animated Tool Icons */}
                <div className="grid grid-cols-3 gap-6">
                  {tools.map((tool, index) => (
                    <div
                      key={tool.name}
                      className={`text-center group hover:scale-110 transition-transform duration-300 animate-fadeInUp delay-${400 + index * 100}`}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-purple-100 rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:from-rose-200 group-hover:to-purple-200 transition-all duration-300">
                        <span className="text-2xl">{tool.icon}</span>
                      </div>
                      <p className="text-sm text-gray-600 font-medium">{tool.name}</p>
                    </div>
                  ))}
                </div>

                {/* Design Process */}
                <div className="mt-8 pt-6 border-t border-rose-200">
                  <h4 className="text-sm font-semibold text-gray-700 mb-4 text-center">Design Process</h4>
                  <div className="flex justify-between items-center">
                    {['Research', 'Design', 'Prototype', 'Test'].map((step, index) => (
                      <div key={step} className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-rose-400 to-purple-500 text-white text-xs flex items-center justify-center mb-1 animate-pulse-slow delay-${index * 200}`}>
                          {index + 1}
                        </div>
                        <span className="text-xs text-gray-600">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-rose-400 to-purple-500 rounded-full opacity-20 animate-spin-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg opacity-30 animate-float delay-300"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fadeInUp delay-700">
          <div className="flex flex-col items-center">
            <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-rose-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-rose-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 