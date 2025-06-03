'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const floatingElements = [
    { size: 'w-4 h-4', color: 'bg-rose-300', position: 'top-20 left-20', delay: 'delay-0' },
    { size: 'w-6 h-6', color: 'bg-purple-300', position: 'top-40 right-32', delay: 'delay-300' },
    { size: 'w-3 h-3', color: 'bg-pink-300', position: 'bottom-32 left-40', delay: 'delay-500' },
    { size: 'w-5 h-5', color: 'bg-rose-400', position: 'bottom-20 right-20', delay: 'delay-700' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50 overflow-hidden relative flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.size} ${element.color} rounded-full opacity-30 animate-float ${element.delay} ${element.position}`}
          ></div>
        ))}
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-rose-300 to-purple-300 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl opacity-15 animate-pulse-slow delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* 404 Number with Glass Effect */}
          <div className="relative mb-8">
            <div className="glass rounded-3xl p-8 mb-8 shadow-2xl">
              <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent leading-none">
                404
              </h1>
              
              {/* Floating particles around 404 */}
              <div className="absolute top-4 left-8 w-2 h-2 bg-rose-400 rounded-full opacity-60 animate-float"></div>
              <div className="absolute top-12 right-12 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-70 animate-float delay-200"></div>
              <div className="absolute bottom-8 left-16 w-1 h-1 bg-pink-400 rounded-full opacity-80 animate-float delay-400"></div>
              <div className="absolute bottom-4 right-8 w-2.5 h-2.5 bg-rose-300 rounded-full opacity-50 animate-float delay-600"></div>
            </div>
          </div>

          {/* Error Message */}
          <div className="animate-fadeInUp delay-200 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The page you&apos;re looking for seems to have wandered off into the digital void. 
              <span className="text-rose-600 font-semibold"> Don&apos;t worry</span>, let&apos;s get you back on track!
            </p>
          </div>

          {/* Suggested Actions */}
          <div className="animate-fadeInUp delay-400 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
              <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-purple-100 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Go Home</h3>
                <p className="text-sm text-gray-600">Return to the homepage</p>
              </div>

              <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-purple-100 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">View Portfolio</h3>
                <p className="text-sm text-gray-600">Check out my projects</p>
              </div>

              <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-purple-100 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Contact Me</h3>
                <p className="text-sm text-gray-600">Get in touch directly</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="animate-fadeInUp delay-600">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="group bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-rose-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center">
                  <svg className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </span>
              </Link>
              
              <Link
                href="/#contact"
                className="border-2 border-rose-300 text-rose-700 px-8 py-4 rounded-xl hover:bg-rose-50 hover:border-rose-400 transition-all duration-300 flex items-center justify-center"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Help
              </Link>
            </div>
          </div>

          {/* Fun Message */}
          <div className="animate-fadeInUp delay-800 mt-8">
            <div className="glass rounded-xl p-6 max-w-md mx-auto">
              <p className="text-sm text-gray-600 flex items-center justify-center">
                <span className="mr-2">💡</span>
                <span>
                  <strong className="text-rose-600">Fun fact:</strong> 404 errors are named after room 404 
                  at CERN where the web was born!
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rotating Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-to-r from-rose-400 to-purple-500 rounded-full opacity-10 animate-spin-slow"></div>
      <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg opacity-20 animate-float delay-300"></div>
    </div>
  );
} 