'use client';

import { useState } from 'react';
import Link from 'next/link';

const EazyClockCaseStudy = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const projectStats = [
    { label: "Project Duration", value: "12 weeks", icon: "⏱️" },
    { label: "Team Size", value: "4 members", icon: "👥" },
    { label: "User Increase", value: "+150%", icon: "📈" },
    { label: "Task Efficiency", value: "+80%", icon: "⚡" }
  ];

  const challenges = [
    {
      title: "Complex Time Tracking",
      description: "Existing solutions were too complicated for simple time management needs",
      icon: "🕐"
    },
    {
      title: "Poor Mobile Experience",
      description: "Most time tracking apps weren't optimized for mobile-first users",
      icon: "📱"
    },
    {
      title: "Lack of Visual Feedback",
      description: "Users couldn't easily visualize their time patterns and productivity",
      icon: "👁️"
    },
    {
      title: "Integration Issues",
      description: "Difficulty syncing with existing productivity tools and calendars",
      icon: "🔗"
    }
  ];

  const solutions = [
    {
      title: "One-Tap Time Tracking",
      description: "Simplified interface with intuitive start/stop controls and smart project detection",
      icon: "👆",
      color: "from-rose-400 to-pink-500"
    },
    {
      title: "Mobile-First Design",
      description: "Responsive design optimized for thumb navigation and mobile workflows",
      icon: "📲",
      color: "from-purple-400 to-rose-500"
    },
    {
      title: "Visual Analytics",
      description: "Beautiful charts and insights showing productivity patterns and time distribution",
      icon: "📊",
      color: "from-pink-400 to-purple-500"
    },
    {
      title: "Smart Integrations",
      description: "Seamless connection with popular tools like Slack, Trello, and Google Calendar",
      icon: "🔄",
      color: "from-rose-500 to-purple-400"
    }
  ];

  const designProcess = [
    { phase: "Research", duration: "2 weeks", description: "User interviews, competitive analysis, market research", icon: "🔍" },
    { phase: "Define", duration: "1 week", description: "Problem definition, user personas, journey mapping", icon: "🎯" },
    { phase: "Ideate", duration: "2 weeks", description: "Brainstorming, sketching, concept development", icon: "💡" },
    { phase: "Prototype", duration: "3 weeks", description: "Wireframing, interactive prototypes, user testing", icon: "⚡" },
    { phase: "Design", duration: "3 weeks", description: "Visual design, design system, asset creation", icon: "🎨" },
    { phase: "Validate", duration: "1 week", description: "Usability testing, feedback implementation", icon: "✅" }
  ];

  const userPersonas = [
    {
      name: "Sarah Chen",
      role: "Freelance Designer",
      age: "28",
      goals: ["Track billable hours accurately", "Manage multiple projects", "Generate client reports"],
      frustrations: ["Forgetting to start timers", "Complex reporting tools", "Switching between apps"],
      image: "👩‍💻"
    },
    {
      name: "Mike Rodriguez",
      role: "Startup Founder",
      age: "35",
      goals: ["Monitor team productivity", "Optimize work processes", "Track project profitability"],
      frustrations: ["Lack of team visibility", "Manual time entry", "Inaccurate data"],
      image: "👨‍💼"
    },
    {
      name: "Emily Watson",
      role: "Remote Developer",
      age: "31",
      goals: ["Maintain work-life balance", "Track focus time", "Improve productivity"],
      frustrations: ["Distractions", "Time blindness", "Inconsistent schedules"],
      image: "👩‍💻"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center text-rose-600 hover:text-rose-700 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </Link>
            <div className="text-gray-900 font-semibold">EazyClock Case Study</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-rose-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="animate-fadeInLeft">
              <div className="inline-block bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                📱 Mobile App Design
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                EazyClock
                <span className="block bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                  Time Tracking Reimagined
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A mobile-first time tracking app that makes monitoring productivity as simple as a single tap. 
                Designed for freelancers, remote workers, and small teams who value simplicity without sacrificing functionality.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {['UX Research', 'UI Design', 'Prototyping', 'User Testing'].map((tag) => (
                  <span key={tag} className="bg-white/70 backdrop-blur-sm text-rose-600 px-4 py-2 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View Live Prototype
                </button>
                <button className="border-2 border-rose-300 text-rose-700 px-8 py-4 rounded-lg hover:bg-rose-50 hover:border-rose-400 transition-all duration-300">
                  Download App
                </button>
              </div>
            </div>

            {/* Right Column - App Mockup */}
            <div className="animate-fadeInRight">
              <div className="relative">
                {/* Phone Mockup */}
                <div className="w-80 h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl mx-auto shadow-2xl p-2">
                  <div className="w-full h-full bg-gradient-to-br from-rose-100 to-purple-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* App Interface Mockup */}
                    <div className="text-center">
                      <div className="text-6xl mb-4">⏰</div>
                      <div className="text-2xl font-bold text-gray-800 mb-2">00:42:15</div>
                      <div className="text-gray-600 mb-4">Working on Portfolio</div>
                      <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full mx-auto animate-pulse-slow flex items-center justify-center">
                        <div className="text-white text-xl">⏸️</div>
                      </div>
                    </div>
                    
                    {/* Floating UI Elements */}
                    <div className="absolute top-4 left-4 bg-white/70 backdrop-blur-sm rounded-lg p-2">
                      <div className="text-xs text-gray-600">Today: 6h 23m</div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/70 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                      <div className="text-rose-500">📊</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-rose-300 rounded-full opacity-30 animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-300 rounded-lg opacity-40 animate-float delay-300"></div>
              </div>
            </div>
          </div>

          {/* Project Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fadeInUp delay-500">
            {projectStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center animate-fadeInUp delay-${600 + index * 100}`}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-rose-600 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Problem</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Time tracking shouldn't be a chore. Yet most existing solutions are overcomplicated, 
              disrupting workflow instead of enhancing productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {challenges.map((challenge, index) => (
              <div
                key={challenge.title}
                className={`bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl p-8 animate-fadeInUp delay-${index * 150}`}
              >
                <div className="text-4xl mb-4">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>

          {/* User Quote */}
          <div className="bg-gradient-to-r from-rose-50 to-purple-50 rounded-3xl p-8 md:p-12 text-center animate-fadeInUp delay-500">
            <div className="text-6xl mb-6">💭</div>
            <blockquote className="text-2xl text-gray-700 font-medium mb-6 leading-relaxed">
              "I spend more time trying to remember to track my time than actually working. 
              There has to be a better way."
            </blockquote>
            <cite className="text-rose-600 font-semibold">- Survey Respondent #23</cite>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Solution</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              EazyClock simplifies time tracking with intelligent automation, beautiful design, 
              and insights that actually help improve productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp delay-${index * 150}`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{solution.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Design <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A user-centered approach ensuring every design decision was backed by research and validated through testing.
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designProcess.map((phase, index) => (
                <div
                  key={phase.phase}
                  className={`relative animate-fadeInUp delay-${index * 100}`}
                >
                  {/* Timeline Connection */}
                  {index < designProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-rose-200 z-0"></div>
                  )}
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{phase.phase}</h3>
                        <p className="text-rose-600 text-sm">{phase.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                    <div className="text-2xl mt-4">{phase.icon}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              User <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Research</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding our users through interviews, surveys, and behavioral analysis to inform design decisions.
            </p>
          </div>

          {/* Research Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 animate-fadeInUp">
              <div className="text-4xl text-rose-600 font-bold mb-2">42</div>
              <div className="text-gray-600">User Interviews</div>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 animate-fadeInUp delay-200">
              <div className="text-4xl text-purple-600 font-bold mb-2">156</div>
              <div className="text-gray-600">Survey Responses</div>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 animate-fadeInUp delay-400">
              <div className="text-4xl text-rose-600 font-bold mb-2">8</div>
              <div className="text-gray-600">Competitive Analysis</div>
            </div>
          </div>

          {/* User Personas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userPersonas.map((persona, index) => (
              <div
                key={persona.name}
                className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg animate-fadeInUp delay-${index * 200}`}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{persona.image}</div>
                  <h3 className="text-xl font-bold text-gray-900">{persona.name}</h3>
                  <p className="text-rose-600 font-medium">{persona.role}</p>
                  <p className="text-gray-500">Age: {persona.age}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Goals</h4>
                    <ul className="space-y-1">
                      {persona.goals.map((goal, goalIndex) => (
                        <li key={goalIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Frustrations</h4>
                    <ul className="space-y-1">
                      {persona.frustrations.map((frustration, frustrationIndex) => (
                        <li key={frustrationIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          {frustration}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Results & <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Measurable improvements in user engagement, task completion, and overall satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { metric: "User Adoption", value: "+150%", description: "Increase in daily active users", icon: "👥" },
              { metric: "Task Efficiency", value: "+80%", description: "Faster time tracking setup", icon: "⚡" },
              { metric: "User Satisfaction", value: "4.8/5", description: "App store rating", icon: "⭐" },
              { metric: "Retention Rate", value: "92%", description: "7-day user retention", icon: "🔄" }
            ].map((result, index) => (
              <div
                key={result.metric}
                className={`text-center bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl p-6 animate-fadeInUp delay-${index * 150}`}
              >
                <div className="text-3xl mb-2">{result.icon}</div>
                <div className="text-3xl font-bold text-rose-600 mb-1">{result.value}</div>
                <div className="font-medium text-gray-900 mb-1">{result.metric}</div>
                <div className="text-sm text-gray-600">{result.description}</div>
              </div>
            ))}
          </div>

          {/* User Feedback */}
          <div className="bg-gradient-to-r from-rose-50 to-purple-50 rounded-3xl p-8 md:p-12 animate-fadeInUp delay-500">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Users Say</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <blockquote className="bg-white/70 backdrop-blur-sm rounded-xl p-6">
                <p className="text-gray-700 mb-4">"Finally, a time tracker that doesn't get in my way. The one-tap start is genius!"</p>
                <cite className="text-rose-600 font-semibold">- Alex K., Freelancer</cite>
              </blockquote>
              
              <blockquote className="bg-white/70 backdrop-blur-sm rounded-xl p-6">
                <p className="text-gray-700 mb-4">"The analytics helped me identify my most productive hours. Game changer for my workflow."</p>
                <cite className="text-rose-600 font-semibold">- Maria S., Remote Developer</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Learnings</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Simplicity Wins",
                description: "Users preferred fewer features done excellently over many features done poorly. The one-tap tracking became our signature feature.",
                icon: "🎯"
              },
              {
                title: "Mobile-First Matters",
                description: "89% of users accessed the app primarily on mobile. Desktop was secondary, not the other way around.",
                icon: "📱"
              },
              {
                title: "Context is King",
                description: "Smart project detection based on calendar events and location reduced manual input by 70%.",
                icon: "🧠"
              },
              {
                title: "Visual Feedback Drives Engagement",
                description: "Users who saw daily/weekly analytics were 3x more likely to maintain consistent tracking habits.",
                icon: "📊"
              }
            ].map((learning, index) => (
              <div
                key={learning.title}
                className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-fadeInUp delay-${index * 200}`}
              >
                <div className="text-4xl mb-4">{learning.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{learning.title}</h3>
                <p className="text-gray-600 leading-relaxed">{learning.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to discuss your next project?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. I'd love to hear about your ideas and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Let's Work Together
              </Link>
              <Link
                href="/#projects"
                className="border-2 border-rose-300 text-rose-700 px-8 py-4 rounded-lg hover:bg-rose-50 hover:border-rose-400 transition-all duration-300"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EazyClockCaseStudy; 