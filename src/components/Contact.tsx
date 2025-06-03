'use client';

const Contact = () => {
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   console.log('Form submitted:', formData);
  // };

  // const socialLinks = [
  //   { name: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/in/beatriz-guimaraes-cabral/', color: 'from-blue-500 to-blue-600' }
  // ];

  // const contactInfo = [
  //   { icon: '📧', label: 'Email', value: 'contact@beatrizguimaraes.com', href: 'mailto:contact@beatrizguimaraes.com' },
  //   { icon: '📱', label: 'Phone / WhatsApp', value: '+55 83 98745-2427', href: 'https://wa.me/5583987452427' },
  //   { icon: '📍', label: 'Location', value: 'Spain', href: '#' },
  //   { icon: '🕒', label: 'Timezone', value: 'CET (Central European Time)', href: '#' }
  // ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-rose-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-rose-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-lg opacity-30 animate-float delay-200 rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-200 rounded-full opacity-25 animate-float delay-400"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-rose-300 rounded-lg opacity-20 animate-float delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let&apos;s Work <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to bring your vision to life? I&apos;d love to hear about your project and discuss how we can create something amazing together.
          </p>
          
          {/* Availability Badge */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-green-200 text-green-700 px-6 py-3 rounded-full text-lg font-medium shadow-lg animate-fadeInUp delay-200">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            Available for new projects
          </div>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Primary Contact Methods */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left animate-fadeInLeft">
              Get in Touch
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Card */}
              <a
                href="mailto:contact@beatrizguimaraes.com"
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-rose-100 hover:border-rose-300 animate-fadeInUp"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">📧</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Me</h4>
                  <p className="text-rose-600 font-medium">contact@beatrizguimaraes.com</p>
                  <p className="text-sm text-gray-500 mt-2">Professional inquiries & collaborations</p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/5583987452427"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100 hover:border-green-300 animate-fadeInUp delay-100"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">📱</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h4>
                  <p className="text-green-600 font-medium">+55 83 98745-2427</p>
                  <p className="text-sm text-gray-500 mt-2">Quick questions & instant chat</p>
                </div>
              </a>

              {/* Location Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100 animate-fadeInUp delay-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📍</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-purple-600 font-medium">Spain</p>
                  <p className="text-sm text-gray-500 mt-2">CET (Central European Time)</p>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/beatriz-guimaraes-cabral/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-300 animate-fadeInUp delay-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">💼</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h4>
                  <p className="text-blue-600 font-medium">Professional Profile</p>
                  <p className="text-sm text-gray-500 mt-2">View portfolio & connect</p>
                </div>
              </a>
            </div>
          </div>

          {/* Response Info & CTA */}
          <div className="space-y-8 animate-fadeInRight">
            {/* Response Time Card */}
            <div className="bg-gradient-to-br from-white/90 to-rose-50/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-rose-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Quick Response</h4>
                <p className="text-gray-600 mb-4">
                  I typically respond within 24 hours. For urgent projects, WhatsApp is the fastest way to reach me.
                </p>
                <div className="bg-rose-100 rounded-lg p-3">
                  <p className="text-sm font-medium text-rose-700">
                    📅 Currently booking for Q2 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Project Info Card */}
            <div className="bg-gradient-to-br from-white/90 to-purple-50/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">What to Include</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-0.5">✨</span>
                  <span>Brief project description</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-0.5">📅</span>
                  <span>Timeline & deadline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-0.5">💰</span>
                  <span>Budget range</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-0.5">🎯</span>
                  <span>Goals & expectations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="animate-fadeInUp delay-500">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h3>
            <p className="text-lg text-gray-600">Everything you need to know about working together</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-rose-100 hover:shadow-xl transition-all duration-300">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">What&apos;s your typical project timeline?</h4>
              <p className="text-gray-600">Project timelines vary based on scope, but most projects take 4-12 weeks from discovery to final delivery.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Do you work with international clients?</h4>
              <p className="text-gray-600">Absolutely! I work with clients worldwide and am comfortable with different time zones and communication preferences.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">What&apos;s included in your design process?</h4>
              <p className="text-gray-600">Research, wireframing, visual design, prototyping, user testing, and design system creation - all tailored to your needs.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Do you offer ongoing support?</h4>
              <p className="text-gray-600">Yes! I provide post-launch support and can help with future iterations and improvements to your product.</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 animate-fadeInUp delay-700">
          <div className="bg-gradient-to-r from-rose-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-rose-100 mb-6 text-lg">
              Let&apos;s turn your ideas into beautiful, functional designs that users love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5583987452427"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-rose-600 px-8 py-4 rounded-xl font-semibold hover:bg-rose-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                💬 Start WhatsApp Chat
              </a>
              <a
                href="mailto:contact@beatrizguimaraes.com"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-rose-600 transition-all duration-300 transform hover:scale-105"
              >
                📧 Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 