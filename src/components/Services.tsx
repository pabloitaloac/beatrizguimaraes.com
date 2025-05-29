const Services = () => {
  const services = [
    {
      icon: "🔍",
      title: "User Research",
      description: "In-depth user interviews, surveys, and analytics to understand your audience and their needs.",
      features: ["User Interviews", "Surveys & Analytics", "Persona Development", "Journey Mapping"],
      color: "from-rose-400 to-pink-500"
    },
    {
      icon: "🎨",
      title: "UI Design",
      description: "Beautiful, modern interfaces that engage users and reflect your brand identity perfectly.",
      features: ["Visual Design", "Brand Integration", "Responsive Design", "Design Systems"],
      color: "from-purple-400 to-rose-500"
    },
    {
      icon: "💡",
      title: "UX Strategy",
      description: "Strategic planning to create user experiences that drive engagement and business growth.",
      features: ["Information Architecture", "User Flow Design", "Wireframing", "Strategy Planning"],
      color: "from-pink-400 to-purple-500"
    },
    {
      icon: "⚡",
      title: "Prototyping",
      description: "Interactive prototypes that bring your ideas to life and validate design decisions early.",
      features: ["Interactive Prototypes", "Micro-interactions", "Usability Testing", "Iteration Design"],
      color: "from-rose-500 to-purple-400"
    },
    {
      icon: "🔧",
      title: "Design Systems",
      description: "Comprehensive design systems that ensure consistency and scalability across products.",
      features: ["Component Libraries", "Style Guides", "Documentation", "Team Training"],
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: "📊",
      title: "UX Audit",
      description: "Comprehensive analysis of your current product to identify improvement opportunities.",
      features: ["Heuristic Evaluation", "Accessibility Review", "Performance Analysis", "Recommendations"],
      color: "from-pink-500 to-rose-400"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive UI/UX solutions to transform your digital products and create exceptional user experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp delay-${index * 100}`}
            >
              {/* Service Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                {/* Floating decoration */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${service.color} rounded-full opacity-30 animate-pulse-slow`}></div>
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={feature}
                    className={`flex items-center text-sm text-gray-600 animate-fadeInLeft delay-${(index * 100) + (featureIndex * 50)}`}
                  >
                    <div className="w-2 h-2 bg-rose-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fadeInUp delay-700">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Digital Experience?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's collaborate to create something amazing. I'm here to help you turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Project
              </a>
              <a
                href="#projects"
                className="border-2 border-rose-300 text-rose-700 px-8 py-3 rounded-lg hover:bg-rose-50 hover:border-rose-400 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-rose-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 rounded-lg opacity-30 animate-float delay-300 rotate-45"></div>
      </div>
    </section>
  );
};

export default Services; 