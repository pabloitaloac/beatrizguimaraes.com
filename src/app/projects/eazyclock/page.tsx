'use client';

import Link from 'next/link';
import Image from 'next/image';

const EazyClockCaseStudy = () => {
  // const [activeTab, setActiveTab] = useState('overview');

  const projectStats = [
    { label: "Project Duration", value: "12 weeks", icon: "⏱️" },
    { label: "User Types", value: "2 personas", icon: "👥" },
    { label: "Booking Efficiency", value: "+99%", icon: "📈" },
    { label: "User Satisfaction", value: "4.8/5", icon: "⚡" }
  ];

  const challenges = [
    {
      title: "Phone Scheduling Difficulties",
      description: "Manual appointment booking via phone calls was time-consuming and error-prone",
      icon: "☎️"
    },
    {
      title: "No Automatic Reminders",
      description: "Missed appointments due to lack of automated notification systems",
      icon: "🔔"
    },
    {
      title: "Disorganized Agendas",
      description: "Professionals struggled with scattered scheduling across multiple platforms",
      icon: "📅"
    },
    {
      title: "WhatsApp Dependency",
      description: "Over-reliance on WhatsApp for calendar management led to confusion",
      icon: "📱"
    }
  ];

  // const solutions = [
  //   {
  //     title: "Quick & Flexible Booking",
  //     description: "Simplified booking process that allows clients to schedule appointments independently",
  //     icon: "📋",
  //     color: "from-rose-400 to-pink-500"
  //   },
  //   {
  //     title: "Automated Reminders",
  //     description: "Smart notification system that reduces no-shows and keeps everyone informed",
  //     icon: "🔔",
  //     color: "from-purple-400 to-rose-500"
  //   },
  //   {
  //     title: "Centralized Calendar",
  //     description: "Unified platform for managing all appointments, time blocks, and availability",
  //     icon: "📅",
  //     color: "from-pink-400 to-purple-500"
  //   },
  //   {
  //     title: "Professional Control",
  //     description: "Easy tools for service providers to manage schedules and confirm appointments",
  //     icon: "⚙️",
  //     color: "from-rose-500 to-purple-400"
  //   }
  // ];

  const designProcess = [
    { phase: "Discovery", duration: "2 weeks", description: "Competitor analysis, user interviews, and pain point identification", icon: "🔍" },
    { phase: "Personas", duration: "1 week", description: "Defined Lucas (client) and Ana (professional) user personas", icon: "👤" },
    { phase: "User Journey", duration: "2 weeks", description: "Mapped complete experience flows for both user types", icon: "🗺️" },
    { phase: "User Flows", duration: "2 weeks", description: "Detailed interaction flows for booking and management", icon: "🔄" },
    { phase: "Architecture", duration: "1 week", description: "Information architecture and site structure planning", icon: "🏗️" },
    { phase: "Wireframes", duration: "2 weeks", description: "Low-fidelity wireframes for all key screens", icon: "📝" },
    { phase: "Prototype", duration: "2 weeks", description: "Interactive prototype development and testing", icon: "🔧" }
  ];

  const personas = [
    {
      name: "Lucas",
      role: "Client",
      description: "Seeks quick and flexible appointments",
      goals: ["Book appointments easily", "Reschedule when needed", "Receive reminders"],
      frustrations: ["Complex booking systems", "Phone call requirements", "Missed appointments"],
      image: "👨‍💼"
    },
    {
      name: "Ana",
      role: "Service Provider",
      description: "Needs better time control and reduced manual work",
      goals: ["Manage daily appointments", "Block time slots", "Confirm sessions easily"],
      frustrations: ["Manual scheduling", "WhatsApp chaos", "Double bookings"],
      image: "👩‍💼"
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
                📅 Scheduling Platform
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                EazyClock
                <span className="block bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                  Scheduling Made Simple
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A scheduling platform designed for self-employed professionals and small business owners who need an organized, 
                intuitive, and modern way to manage appointments.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {['UX Research', 'UI Design', 'User Journey', 'Prototyping'].map((tag) => (
                  <span key={tag} className="bg-white/70 backdrop-blur-sm text-rose-600 px-4 py-2 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.figma.com/proto/s2Jyd6pOY6UX2hoQ4U2ieZ/Untitled?node-id=30-94&t=58Y88YKVwrCVRay5-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=30%3A94&show-proto-sidebar=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  View Client Flow
                </a>
                <a
                  href="https://www.figma.com/proto/s2Jyd6pOY6UX2hoQ4U2ieZ/Untitled?node-id=50-36&t=58Y88YKVwrCVRay5-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=50%3A9&show-proto-sidebar=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-rose-300 text-rose-700 px-8 py-4 rounded-lg hover:bg-rose-50 hover:border-rose-400 transition-all duration-300 text-center"
                >
                  View Provider Flow
                </a>
              </div>
            </div>

            {/* Right Column - Dashboard Image */}
            <div className="animate-fadeInRight">
              <div className="relative">
                <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
                  <Image
                    src="/images/dashboard.png"
                    alt="EazyClock Dashboard"
                    fill
                    className="object-contain"
                  />
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

      {/* Project Context */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Project <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Context</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                EazyClock is a scheduling platform created for self-employed professionals and small business owners 
                who need an organized, intuitive, and modern way to manage appointments.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The project started from a common issue: difficulties in scheduling via phone, lack of automatic reminders, 
                and disorganized agendas.
              </p>
              <div className="bg-gradient-to-r from-rose-50 to-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Key Problem Areas</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="text-rose-500 mr-2">•</span>
                    Manual phone scheduling creating confusion
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-rose-500 mr-2">•</span>
                    No automatic reminder system
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-rose-500 mr-2">•</span>
                    Scattered agenda management
                  </li>
                </ul>
              </div>
            </div>
            <div className="animate-fadeInRight">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg bg-white p-4">
                <Image
                  src="/images/Introduction.png"
                  alt="Project Introduction"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Discovery</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fadeInLeft">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Initial Assumptions</h3>
              <div className="space-y-4 mb-8">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-gray-700">Users want simplicity and independence when booking</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-gray-700">Manual scheduling creates confusion</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-gray-700">Professionals often rely on WhatsApp for managing their calendars</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                I analyzed competitors, conducted user interviews, and gathered insights to understand 
                the pain points and expectations.
              </p>
            </div>
            <div className="animate-fadeInRight">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg bg-white p-4">
                <Image
                  src="/images/Discovery.png"
                  alt="Discovery Process"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Challenges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div
                key={challenge.title}
                className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 animate-fadeInUp delay-${index * 150}`}
              >
                <div className="text-4xl mb-4">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              User <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Personas</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Two personas were defined to guide the design decisions: Lucas, a client who seeks quick and flexible appointments, 
              and Ana, a professional who needs better time control and reduced manual work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {personas.map((persona, index) => (
              <div
                key={persona.name}
                className={`bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl p-8 animate-fadeInUp delay-${index * 200}`}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{persona.image}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{persona.name}</h3>
                  <p className="text-rose-600 font-medium text-lg">{persona.role}</p>
                  <p className="text-gray-600 mt-2">{persona.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Goals</h4>
                    <ul className="space-y-2">
                      {persona.goals.map((goal, goalIndex) => (
                        <li key={goalIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Frustrations</h4>
                    <ul className="space-y-2">
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

          <div className="text-center animate-fadeInUp delay-400">
            <div className="relative w-full max-w-4xl mx-auto h-[500px] rounded-2xl overflow-hidden shadow-lg bg-white p-4">
              <Image
                src="/images/Personas.png"
                alt="User Personas"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* User Journey */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              User <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I mapped the full journey of both users, from discovering the platform to completing the appointment. 
              This allowed me to identify moments of frustration, opportunities, and emotional triggers in the experience.
            </p>
          </div>

          <div className="space-y-12">
            <div className="animate-fadeInUp">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Lucas&apos;s Journey (Client)</h3>
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg bg-white p-4">
                <Image
                  src="/images/Journey - Lucas.png"
                  alt="Lucas User Journey"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="animate-fadeInUp delay-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ana&apos;s Journey (Service Provider)</h3>
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg bg-white p-4">
                <Image
                  src="/images/Journey - Ana.png"
                  alt="Ana User Journey"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Flows */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              User <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Flows</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed flows were designed for each persona: Lucas can book, reschedule, or cancel easily. 
              Ana can manage daily appointments, block time, and confirm sessions with one click.
            </p>
          </div>

          <div className="space-y-12">
            <div className="animate-fadeInUp">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">End User Flow</h3>
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg bg-white p-4">
                <Image
                  src="/images/User Flow - end user.png"
                  alt="End User Flow"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="animate-fadeInUp delay-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Provider Flow</h3>
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg bg-white p-4">
                <Image
                  src="/images/User Flow - Service Provider.png"
                  alt="Service Provider Flow"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Architecture */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Information <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Architecture</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I created a site map that organizes the platform&apos;s structure in a simple, scalable way. 
              It separates features by role and highlights navigation paths.
            </p>
          </div>

          <div className="animate-fadeInUp">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg bg-white p-4">
              <Image
                src="/images/Information Architecture.png"
                alt="Information Architecture"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wireframes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Low-Fidelity <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Wireframes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wireframes were created to define layout and functionality before applying visual design. 
              Each screen prioritizes clarity, usability, and accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "01 Home Page (Client User).png", title: "Client Home Page" },
              { name: "02 Booking Page Client User.png", title: "Booking Page" },
              { name: "03 My Bookings (Client User Dashboard).png", title: "Client Dashboard" },
              { name: "04 Service Provider - Daily Agenda (Dashboard).png", title: "Provider Dashboard" },
              { name: "05 Service Provider - Appointment Details.png", title: "Appointment Details" },
              { name: "06 Service Provider - Block Time Slot.png", title: "Block Time Slot" },
              { name: "07 Daily Agenda (Service Provider).png", title: "Daily Agenda" },
              { name: "08 Appointment Details (Service Provider).png", title: "Appointment Management" },
              { name: "09 Block Time Slot (Service Provider).png", title: "Time Management" }
            ].map((wireframe, index) => (
              <div
                key={wireframe.name}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden animate-fadeInUp delay-${index * 100}`}
              >
                <div className="relative w-full h-80 bg-gray-50 p-4">
                  <Image
                    src={`/images/${wireframe.name}`}
                    alt={wireframe.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{wireframe.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Design <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A user-centered approach ensuring every design decision was backed by research and validated through testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProcess.map((phase, index) => (
              <div
                key={phase.phase}
                className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp delay-${index * 100}`}
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Prototype */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Interactive <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Prototype</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              An interactive prototype was built in Figma to simulate real user interactions. 
              It connects all flows for both users, allowing early usability testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl p-8 text-center animate-fadeInUp">
              <div className="text-4xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Client Flow</h3>
              <p className="text-gray-600 mb-6">Experience the booking journey from Lucas&apos;s perspective</p>
              <a
                href="https://www.figma.com/proto/s2Jyd6pOY6UX2hoQ4U2ieZ/Untitled?node-id=30-94&t=58Y88YKVwrCVRay5-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=30%3A94&show-proto-sidebar=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                Try Client Prototype
              </a>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl p-8 text-center animate-fadeInUp delay-200">
              <div className="text-4xl mb-4">👩‍💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Provider Flow</h3>
              <p className="text-gray-600 mb-6">Experience the management tools from Ana&apos;s perspective</p>
              <a
                href="https://www.figma.com/proto/s2Jyd6pOY6UX2hoQ4U2ieZ/Untitled?node-id=50-36&t=58Y88YKVwrCVRay5-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=50%3A9&show-proto-sidebar=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                Try Provider Prototype
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final Overview */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Final <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Overview</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                EazyClock was an opportunity to apply a full UX process, resulting in a user-centered solution 
                that simplifies daily routines for both clients and professionals.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: "Research", icon: "🔍" },
                  { label: "Empathy", icon: "❤️" },
                  { label: "Structure", icon: "🏗️" },
                  { label: "Interaction", icon: "🔄" },
                  { label: "Validation", icon: "✅" }
                ].map((step, index) => (
                  <div
                    key={step.label}
                    className={`bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center animate-fadeInUp delay-${index * 100}`}
                  >
                    <div className="text-2xl mb-2">{step.icon}</div>
                    <div className="text-sm font-medium text-gray-700">{step.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fadeInRight">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Streamlined booking process reducing friction by 99%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Eliminated phone-based scheduling confusion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Automated reminder system reducing no-shows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">Unified platform replacing WhatsApp chaos</span>
                  </li>
                </ul>
              </div>
            </div>
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
              Let&apos;s create something amazing together. I&apos;d love to hear about your ideas and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Let&apos;s Work Together
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