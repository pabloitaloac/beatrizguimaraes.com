'use client';

import { useState } from 'react';
import Link from 'next/link';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Mobile App', 'Web Design', 'Dashboard', 'E-commerce'];
  
  const projects = [
    {
      id: 1,
      title: "EazyClock Mobile App",
      category: "Mobile App",
      description: "Mobile-first time tracking app with one-tap functionality and smart project detection for enhanced productivity.",
      image: "⏰",
      tags: ["React Native", "UX Research", "Prototyping"],
      results: ["150% increase in user adoption", "80% faster task completion"],
      color: "from-rose-400 to-pink-500",
      hasCase: true
    },
    {
      id: 2,
      title: "FinTech Dashboard",
      category: "Dashboard",
      description: "Comprehensive financial dashboard for investment tracking and portfolio management.",
      image: "📊",
      tags: ["Web App", "Data Visualization", "User Testing"],
      results: ["60% reduction in task completion time", "95% user satisfaction"],
      color: "from-blue-400 to-cyan-500",
      hasCase: false
    },
    {
      id: 3,
      title: "Creative Agency Website",
      category: "Web Design",
      description: "Modern, animated website showcasing creative services with stunning visual storytelling.",
      image: "🎨",
      tags: ["Web Design", "Animation", "Brand Identity"],
      results: ["200% increase in client inquiries", "Award-winning design"],
      color: "from-purple-400 to-pink-500",
      hasCase: false
    },
    {
      id: 4,
      title: "FoodDelivery Platform",
      category: "Mobile App",
      description: "Food ordering app with seamless checkout flow and real-time order tracking.",
      image: "🍕",
      tags: ["Mobile Design", "User Journey", "A/B Testing"],
      results: ["35% faster checkout process", "50% increase in repeat orders"],
      color: "from-orange-400 to-red-500",
      hasCase: false
    },
    {
      id: 5,
      title: "Fashion E-commerce",
      category: "E-commerce",
      description: "Luxury fashion e-commerce platform with AR try-on and personalized recommendations.",
      image: "👗",
      tags: ["E-commerce", "AR Integration", "Personalization"],
      results: ["45% increase in sales", "30% reduction in returns"],
      color: "from-rose-400 to-pink-500",
      hasCase: false
    },
    {
      id: 6,
      title: "Healthcare Portal",
      category: "Web Design",
      description: "Patient portal for telemedicine with appointment booking and health record management.",
      image: "🏥",
      tags: ["Healthcare", "Accessibility", "Security"],
      results: ["80% user adoption rate", "Improved patient satisfaction"],
      color: "from-teal-400 to-cyan-500",
      hasCase: false
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A collection of my recent work showcasing innovative solutions and measurable results.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp delay-200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-rose-50 hover:text-rose-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp delay-${index * 100}`}
            >
              {/* Project Image/Icon */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                {/* Project Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  {project.category}
                </div>
                {/* Case Study Badge */}
                {project.hasCase && (
                  <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                    Case Study
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-rose-50 text-rose-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="space-y-2 mb-6">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                      {result}
                    </div>
                  ))}
                </div>

                {/* View Project Button */}
                {project.hasCase ? (
                  <Link
                    href="/projects/eazyclock"
                    className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white py-3 rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium block text-center"
                  >
                    View Case Study
                  </Link>
                ) : (
                  <button className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white py-3 rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium">
                    View Project Details
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-16 text-center animate-fadeInUp delay-700">
          <p className="text-gray-600 mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Complete Portfolio
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 