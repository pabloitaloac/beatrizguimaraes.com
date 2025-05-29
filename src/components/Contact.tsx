'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: '#', color: 'from-blue-500 to-blue-600' },
    { name: 'Behance', icon: '🎨', href: '#', color: 'from-purple-500 to-blue-500' },
    { name: 'Dribbble', icon: '🏀', href: '#', color: 'from-pink-500 to-red-500' },
    { name: 'Instagram', icon: '📸', href: '#', color: 'from-purple-500 to-pink-500' }
  ];

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'hello@beatrizguimaraes.com', href: 'mailto:hello@beatrizguimaraes.com' },
    { icon: '📱', label: 'Phone', value: '+55 (11) 99999-9999', href: 'tel:+5511999999999' },
    { icon: '📍', label: 'Location', value: 'São Paulo, Brazil', href: '#' },
    { icon: '🕒', label: 'Timezone', value: 'GMT-3 (BRT)', href: '#' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Work <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to bring your vision to life? I'd love to hear about your project and discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fadeInLeft">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select Project Type</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="web-design">Web Design</option>
                      <option value="dashboard">Dashboard</option>
                      <option value="e-commerce">E-commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="5k-10k">$5k - $10k</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k+">$50k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, goals, and timeline..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white py-4 rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fadeInRight">
            {/* Availability Status */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-8">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <h3 className="text-lg font-bold text-gray-900">Available for New Projects</h3>
              </div>
              <p className="text-gray-600 mb-4">
                I'm currently accepting new projects for Q2 2024. Let's discuss your ideas and create something extraordinary together.
              </p>
              <div className="text-sm text-gray-500">
                Response time: Usually within 24 hours
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className={`flex items-center p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors duration-300 animate-fadeInUp delay-${index * 100}`}
                  >
                    <span className="text-2xl mr-4">{info.icon}</span>
                    <div>
                      <div className="text-sm text-gray-500">{info.label}</div>
                      <div className="font-medium text-gray-900">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Follow My Work</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`flex items-center p-4 bg-gradient-to-r ${social.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInUp delay-${index * 100}`}
                  >
                    <span className="text-2xl mr-3">{social.icon}</span>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 animate-fadeInUp delay-500">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-3">What's your typical project timeline?</h4>
              <p className="text-gray-600">Project timelines vary based on scope, but most projects take 4-12 weeks from discovery to final delivery.</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-3">Do you work with international clients?</h4>
              <p className="text-gray-600">Absolutely! I work with clients worldwide and am comfortable with different time zones and communication preferences.</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-3">What's included in your design process?</h4>
              <p className="text-gray-600">Research, wireframing, visual design, prototyping, user testing, and design system creation - all tailored to your needs.</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-3">Do you offer ongoing support?</h4>
              <p className="text-gray-600">Yes! I provide post-launch support and can help with future iterations and improvements to your product.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 