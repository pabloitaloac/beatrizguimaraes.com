'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: '🏠' },
    { href: '#about', label: 'About', icon: '👋' },
    { href: '#services', label: 'Services', icon: '🛠️' },
    { href: '#projects', label: 'Projects', icon: '💼' },
    { href: '#testimonials', label: 'Reviews', icon: '⭐' },
    { href: '#contact', label: 'Contact', icon: '📧' }
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-2xl shadow-lg border-b border-rose-100/50' 
          : 'bg-transparent'
      }`}>
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-2 left-10 w-2 h-2 bg-rose-400 rounded-full opacity-40 animate-float"></div>
          <div className="absolute top-4 right-20 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50 animate-float delay-300"></div>
          <div className="absolute top-6 left-1/3 w-1 h-1 bg-pink-400 rounded-full opacity-60 animate-float delay-500"></div>
          <div className="absolute top-3 right-1/3 w-2.5 h-2.5 bg-rose-300 rounded-full opacity-30 animate-float delay-700"></div>
        </div>

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              href="#home" 
              onClick={() => handleNavClick('#home')}
              className="group flex items-center space-x-3 animate-fadeInLeft"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 via-purple-500 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <span className="text-white text-xl font-bold relative z-10">B</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* Floating ring animation */}
                <div className="absolute inset-0 border-2 border-rose-400/30 rounded-2xl group-hover:scale-125 group-hover:opacity-0 transition-all duration-500"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent group-hover:from-rose-500 group-hover:to-purple-500 transition-all duration-300">
                  Beatriz Guimarães
                </h1>
                <p className="text-sm text-gray-600 group-hover:text-rose-500 transition-colors duration-300">
                  UI/UX Designer
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`group relative px-4 py-2 rounded-xl font-medium transition-all duration-300 animate-fadeInUp delay-${index * 100} ${
                    activeSection === item.href.slice(1)
                      ? 'text-rose-600 bg-rose-50/80 backdrop-blur-sm'
                      : 'text-gray-700 hover:text-rose-600 hover:bg-rose-50/50'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-sm group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </span>
                  
                  {/* Active indicator */}
                  {activeSection === item.href.slice(1) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full animate-scale-up"></div>
                  )}
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </Link>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* CTA Button */}
              <Link
                href="#contact"
                onClick={() => handleNavClick('#contact')}
                className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-rose-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-rose-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fadeInRight group"
              >
                <span>Let's Talk</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative w-12 h-12 bg-gradient-to-br from-rose-100 to-purple-100 rounded-xl flex items-center justify-center hover:from-rose-200 hover:to-purple-200 transition-all duration-300 group"
              >
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <span className={`absolute h-0.5 w-6 bg-gradient-to-r from-rose-600 to-purple-600 transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45' : '-translate-y-2'
                  }`}></span>
                  <span className={`absolute h-0.5 w-6 bg-gradient-to-r from-rose-600 to-purple-600 transform transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`absolute h-0.5 w-6 bg-gradient-to-r from-rose-600 to-purple-600 transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45' : 'translate-y-2'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Technology Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(244,63,94,0.1) 1px, transparent 1px),
              linear-gradient(180deg, rgba(168,85,247,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 w-80 max-w-[90vw] h-full bg-white/90 backdrop-blur-2xl border-l border-rose-100 transform transition-all duration-500 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-purple-50/50"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200/20 to-rose-200/20 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 p-8 pt-24">
            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`group flex items-center space-x-4 p-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 animate-fadeInRight delay-${index * 100} ${
                    activeSection === item.href.slice(1)
                      ? 'bg-gradient-to-r from-rose-100 to-purple-100 text-rose-600 shadow-lg'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-rose-50 hover:to-purple-50 hover:text-rose-600'
                  }`}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:from-rose-200 group-hover:to-purple-200 transition-all duration-300">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <span className="text-lg">{item.label}</span>
                  <svg className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform duration-300 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-8 pt-8 border-t border-rose-100">
              <Link
                href="#contact"
                onClick={() => handleNavClick('#contact')}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-rose-500 to-purple-600 text-white p-4 rounded-2xl hover:from-rose-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-fadeInRight delay-700 group"
              >
                <span className="text-lg font-medium">Let's Work Together</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex justify-center space-x-4">
              {[
                { icon: '💼', href: '#', label: 'LinkedIn' },
                { icon: '🎨', href: '#', label: 'Behance' },
                { icon: '🏀', href: '#', label: 'Dribbble' }
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-12 h-12 bg-gradient-to-br from-rose-100 to-purple-100 rounded-xl flex items-center justify-center hover:from-rose-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-110 animate-fadeInUp delay-${800 + index * 100}`}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Floating particles in mobile menu */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-8 w-2 h-2 bg-rose-300 rounded-full opacity-30 animate-float"></div>
            <div className="absolute top-40 right-12 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-40 animate-float delay-300"></div>
            <div className="absolute bottom-32 left-12 w-1 h-1 bg-pink-300 rounded-full opacity-50 animate-float delay-500"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header; 