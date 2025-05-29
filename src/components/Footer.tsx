'use client';

import { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: '#', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600'
    },
    { 
      name: 'Behance', 
      href: '#', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M13.387 2.5h4.137v1.231h-4.137V2.5zM4.5 7.187c.632 0 1.142.21 1.53.63.386.42.58.98.58 1.68 0 .7-.194 1.26-.58 1.68-.388.42-.898.63-1.53.63H2.85V7.187H4.5zm0 5.69c.95 0 1.693-.255 2.227-.765.534-.51.8-1.214.8-2.113 0-.898-.266-1.603-.8-2.113-.534-.51-1.276-.765-2.227-.765H.85v7.756H4.5zm7.864-5.69c.7 0 1.253.21 1.66.63.408.42.612.98.612 1.68 0 .7-.204 1.26-.612 1.68-.407.42-.96.63-1.66.63h-1.65V7.187h1.65zm.764 5.69c.95 0 1.693-.255 2.227-.765.534-.51.8-1.214.8-2.113 0-.898-.266-1.603-.8-2.113-.534-.51-1.276-.765-2.227-.765h-3.65v7.756h3.65z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-purple-500 to-blue-500'
    },
    { 
      name: 'Dribbble', 
      href: '#', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.798 3.798a6.024 6.024 0 014.404 0 26.064 26.064 0 00-.842 2.569 26.262 26.262 0 00-2.72 0 26.064 26.064 0 00-.842-2.569zM3.2 10a6.8 6.8 0 01.502-2.542 24.066 24.066 0 013.133.567 24.066 24.066 0 00-.135 1.975c0 .69.045 1.36.135 1.975a24.066 24.066 0 01-3.133.567A6.8 6.8 0 013.2 10zm7.798 6.202a26.064 26.064 0 00.842-2.569 26.262 26.262 0 002.72 0 26.064 26.064 0 00.842 2.569 6.024 6.024 0 01-4.404 0zm5.002-3.66a24.066 24.066 0 01-3.133-.567c.09-.615.135-1.285.135-1.975s-.045-1.36-.135-1.975A24.066 24.066 0 0116.8 7.458 6.8 6.8 0 0116.8 10a6.8 6.8 0 01-.8 2.542z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-pink-500 to-red-500'
    },
    { 
      name: 'Instagram', 
      href: '#', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.017 0H7.983C3.582 0 0 3.582 0 7.983v4.034C0 16.418 3.582 20 7.983 20h4.034C16.418 20 20 16.418 20 12.017V7.983C20 3.582 16.418 0 12.017 0zm3.13 12.017c0 1.724-1.406 3.13-3.13 3.13H7.983c-1.724 0-3.13-1.406-3.13-3.13V7.983c0-1.724 1.406-3.13 3.13-3.13h4.034c1.724 0 3.13 1.406 3.13 3.13v4.034z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M10 5.351A4.649 4.649 0 105.351 10 4.649 4.649 0 0010 5.351zm0 7.682A3.033 3.033 0 1010 6.967a3.033 3.033 0 000 6.066z" clipRule="evenodd" />
          <circle cx="14.649" cy="5.351" r="1.084" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const skillsAndTechnologies = [
    'UI/UX Design', 'Figma', 'Adobe XD', 'Sketch', 'Prototyping', 
    'User Research', 'Wireframing', 'Design Systems', 'Usability Testing'
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-rose-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-rose-400 rounded-full opacity-40 animate-float"></div>
        <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50 animate-float delay-300"></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-pink-400 rounded-full opacity-60 animate-float delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-2.5 h-2.5 bg-rose-300 rounded-full opacity-30 animate-float delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-40 animate-float delay-1000"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-rose-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Technology Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(244,63,94,0.1) 1px, transparent 1px),
            linear-gradient(180deg, rgba(168,85,247,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 animate-fadeInUp">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 via-purple-500 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">B</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                  Beatriz Guimarães
                </h3>
                <p className="text-gray-300 text-sm">UI/UX Designer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Passionate about creating digital experiences that blend beautiful design with exceptional functionality. 
              Let's build something amazing together.
            </p>
            
            {/* Availability Status */}
            <div className="flex items-center bg-green-900/30 backdrop-blur-sm border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Available for new projects
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp delay-200">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="text-rose-400 mr-2">🔗</span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-gray-300 hover:text-rose-400 transition-all duration-300 flex items-center group animate-fadeInLeft delay-${300 + index * 50}`}
                  >
                    <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills & Technologies */}
          <div className="animate-fadeInUp delay-400">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="text-purple-400 mr-2">🛠️</span>
              Skills & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillsAndTechnologies.map((skill, index) => (
                <span
                  key={skill}
                  className={`px-3 py-1 bg-white/10 backdrop-blur-sm text-gray-300 text-xs rounded-full border border-white/20 hover:bg-rose-500/20 hover:border-rose-400/50 hover:text-rose-300 transition-all duration-300 animate-fadeInUp delay-${500 + index * 50}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="animate-fadeInUp delay-600">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="text-pink-400 mr-2">📧</span>
              Stay Updated
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Get design insights and project updates delivered to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  isSubmitted
                    ? 'bg-green-600 text-white'
                    : 'bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white'
                } shadow-lg`}
              >
                {isSubmitted ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="border-t border-white/10 pt-8 mb-8 animate-fadeInUp delay-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold text-white mb-4 text-center md:text-left">
                Let's Connect
              </h4>
              <div className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`group w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl animate-fadeInUp delay-${900 + index * 100}`}
                    aria-label={social.name}
                  >
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <div className="space-y-2">
                <a
                  href="mailto:hello@beatrizguimaraes.com"
                  className="block text-gray-300 hover:text-rose-400 transition-colors duration-300 flex items-center justify-center md:justify-end"
                >
                  <span className="text-rose-400 mr-2">📧</span>
                  hello@beatrizguimaraes.com
                </a>
                <div className="text-gray-300 flex items-center justify-center md:justify-end">
                  <span className="text-purple-400 mr-2">📍</span>
                  São Paulo, Brazil
                </div>
                <div className="text-gray-300 flex items-center justify-center md:justify-end">
                  <span className="text-pink-400 mr-2">🕒</span>
                  GMT-3 (BRT)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 animate-fadeInUp delay-1000">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Beatriz Guimarães. Crafted with 💜 and lots of coffee.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                Terms of Service
              </a>
              <div className="text-gray-400">
                Made with Next.js & Tailwind CSS
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-20 animate-bounce-gentle"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer; 