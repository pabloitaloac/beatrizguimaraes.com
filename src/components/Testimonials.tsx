'use client';

import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechStartup Inc.",
      image: "👩‍💼",
      rating: 5,
      text: "Beatriz transformed our user experience completely. Her attention to detail and user-centered approach resulted in a 40% increase in user engagement. Absolutely phenomenal work!",
      project: "Mobile App Redesign"
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "CEO",
      company: "FinanceFlow",
      image: "👨‍💻",
      rating: 5,
      text: "Working with Beatriz was a game-changer for our platform. She understood our complex requirements and delivered a dashboard that our users actually love using.",
      project: "Dashboard Design"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Marketing Director",
      company: "Creative Agency",
      image: "👩‍🎨",
      rating: 5,
      text: "Beatriz didn't just design our website, she elevated our entire brand presence. The design is not only beautiful but incredibly functional. Our conversion rates doubled!",
      project: "Website Redesign"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Founder",
      company: "EcoCommerce",
      image: "👨‍💼",
      rating: 5,
      text: "The e-commerce platform Beatriz designed for us is intuitive and elegant. She took the time to understand our customers and created an experience that drives sales.",
      project: "E-commerce Platform"
    },
    {
      id: 5,
      name: "Anna Kowalski",
      role: "Head of Design",
      company: "Digital Solutions",
      image: "👩‍🔬",
      rating: 5,
      text: "Beatriz's design system work was exceptional. She created components that are not only beautiful but also scalable. Our development team loves working with her designs.",
      project: "Design System"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const stats = [
    { number: "20+", label: "Happy Clients", icon: "😊" },
    { number: "4.9", label: "Average Rating", icon: "⭐" },
    { number: "95%", label: "Success Rate", icon: "🎯" },
    { number: "100%", label: "On-Time Delivery", icon: "⏰" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here's what my clients say about working together and the results we've achieved.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fadeInUp delay-200">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl p-6 animate-fadeInUp delay-${300 + index * 100}`}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-rose-600 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16 animate-fadeInUp delay-400">
          <div className="relative bg-gradient-to-br from-rose-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-lg overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200 rounded-full opacity-30 transform -translate-x-12 translate-y-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-6">
                  {testimonials[currentTestimonial].image}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-rose-600 font-medium">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
                <span className="ml-2 text-gray-600 text-sm">
                  Project: {testimonials[currentTestimonial].project}
                </span>
              </div>
              
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              {/* Navigation dots */}
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-rose-500' 
                        : 'bg-gray-300 hover:bg-rose-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp delay-${index * 100}`}
            >
              {/* Client Info */}
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-rose-600 text-sm font-medium">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                "{testimonial.text}"
              </p>
              
              {/* Project badge */}
              <div className="inline-block bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs font-medium">
                {testimonial.project}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fadeInUp delay-700">
          <div className="bg-gradient-to-r from-rose-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's work together to create exceptional user experiences that drive real business results.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Project
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 