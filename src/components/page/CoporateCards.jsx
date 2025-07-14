'use client';

import { LuShield, LuBrain } from "react-icons/lu";
import { IoChatboxOutline } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";
import { useState, useEffect, useRef } from 'react';

export default function CoporateCards() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        // Adjust threshold if needed, but 0.1 is usually good for detecting entry
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateClasses = `
    transition-all duration-1000 ease-out
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
  `;

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0F1F] text-white py-16 px-4 pt-navbar-offset" /* ADD THIS: pt-navbar-offset or a specific pt-* class */
      // You might need a custom Tailwind class like 'pt-navbar-offset' if 'pt-24' isn't enough
      // For example, if your navbar is 80px tall, you could use 'pt-20' (80px) or 'pt-24' (96px)
      // If you add 'pt-20', the py-16 will be overridden for the top padding
    >
      <div className="w-[90%] max-[640px]:w-[100%] sm:w-[80%] md:w-[90%] mx-auto text-center">
        {/* Title - Animated */}
        <h2 className={`
            text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-2
            ${animateClasses}
          `}>
          Everything you need to manage{" "}<br/>
          <span className="text-orange-500">corporate spending</span>
        </h2>
        <p className={`
            text-gray-400 max-w-2xl mx-auto text-sm md:text-base mb-10
            ${animateClasses}
            delay-150
          `}>
          From intelligent controls to instant insights, our platform transforms how businesses handle expenses. Experience the future of corporate finance management.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Card 1 - Animated */}
          <div className={`
              bg-[#13172A] rounded-xl border border-gray-600 hover:border-orange-500 p-6 text-left hover:shadow-lg transition
              ${animateClasses}
              delay-300
            `}>
            <div className="flex justify-between items-start mb-4">
              <div className="text-xl bg-[#253045] p-4 rounded-xl"><LuShield/></div>
              <span className="text-sm bg-orange-500 text-white px-4 py-2 rounded-full">
                Prevent overspending
              </span>
            </div>
            <h3 className="font-semibold text-2xl text-white mb-1">Smart Spending Controls</h3>
            <p className="text-md text-gray-300 mb-2">
              Save more by preventing out-of-policy spending
            </p>
            <p className="text-sm text-gray-500">
              Set granular controls on corporate cards for specific merchants, categories or transactions. Never worry about unauthorized expenses again.
            </p>
          </div>

          {/* Card 2 - Animated */}
          <div className={`
              bg-[#13172A] rounded-xl border border-gray-600 hover:border-orange-500 p-6 text-left hover:shadow-lg transition
              ${animateClasses}
              delay-500
            `}>
            <div className="flex justify-between items-start mb-4">
              <div className="text-xl bg-[#253045] p-4 rounded-xl"><IoChatboxOutline /></div>
              <span className="text-sm bg-orange-500 text-white px-4 py-2 rounded-full">
                Prevent overspending
              </span>
            </div>
            <h3 className="font-semibold text-2xl text-white mb-1">Smart Spending Controls</h3>
            <p className="text-md text-gray-300 mb-2">
              Save more by preventing out-of-policy spending
            </p>
            <p className="text-sm text-gray-500">
              Set granular controls on corporate cards for specific merchants, categories or transactions. Never worry about unauthorized expenses again.
            </p>
          </div>

          {/* Card 3 - Animated (with more delay) */}
          <div className={`
              bg-[#13172A] rounded-xl border border-gray-600 hover:border-orange-500 p-6 text-left hover:shadow-lg transition
              ${animateClasses}
              delay-700
            `}>
            <div className="flex justify-between items-start mb-4">
              <div className="text-xl bg-[#253045] p-4 rounded-xl"><LuBrain /></div>
              <span className="text-sm bg-orange-500 text-white px-4 py-2 rounded-full">
                Prevent overspending
              </span>
            </div>
            <h3 className="font-semibold text-2xl text-white mb-1">Smart Spending Controls</h3>
            <p className="text-md text-gray-300 mb-2">
              Save more by preventing out-of-policy spending
            </p>
            <p className="text-sm text-gray-500">
              Set granular controls on corporate cards for specific merchants, categories or transactions. Never worry about unauthorized expenses again.
            </p>
          </div>

          {/* Card 4 - Animated (with most delay) */}
          <div className={`
              bg-[#13172A] rounded-xl border border-gray-600 hover:border-orange-500 p-6 text-left hover:shadow-lg transition
              ${animateClasses}
              delay-900
            `}>
            <div className="flex justify-between items-start mb-4">
              <div className="text-xl bg-[#253045] p-4 rounded-xl"><BsCashCoin /></div>
              <span className="text-sm bg-orange-500 text-white px-4 py-2 rounded-full">
                Prevent overspending
              </span>
            </div>
            <h3 className="font-semibold text-2xl text-white mb-1">Smart Spending Controls</h3>
            <p className="text-md text-gray-300 mb-2">
              Save more by preventing out-of-policy spending
            </p>
            <p className="text-sm text-gray-500">
              Set granular controls on corporate cards for specific merchants, categories or transactions. Never worry about unauthorized expenses again.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <div className="bg-[#1C2136] px-4 py-2 rounded-full inline-flex items-center gap-3">
            <span className="text-sm text-gray-400">
              Ready to transform your expense management?
            </span>
            <button className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm hover:bg-orange-600 transition">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}