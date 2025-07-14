'use client';

import Image from 'next/image';
import CardOverviewSection from './CardOverviewSection';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust this value based on when you want the animation to trigger
      const scrollThreshold = 200;
      if (window.scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="bg-[#f5f5f5] py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
          A corporate card designed<br className="hidden sm:block" /> for modern finance.
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 text-md mb-2">
          Save money and time. All with one corporate card.
        </p>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-6">
          No more manual reconciliation. StrideIQ automatically matches receipts and transactions,
          so you can close your books faster.
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-10">
          <input
            type="email"
            placeholder="What's your work email?"
            className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition">
            Get started for free
          </button>
        </div>

        {/* Card Image - Hides top to bottom */}
        <div className={`
            flex justify-center relative scroll-smooth
            transition-all duration-1000 ease-in-out
            ${scrolled
              ? 'opacity-0 -translate-y-full h-0 overflow-hidden duration-1000'
              : 'opacity-100 translate-y-0 h-auto duration-1000'
            }
          `}>
          <Image
            src="/img/visa-card.png" // Replace with actual card image path
            alt="Corporate Card"
            width={350}
            height={200}
            className="rounded-xl shadow-md"
          />
        </div>

        {/* CardOverviewSection - Displays bottom to top */}
        <div className={`
            relative
            transition-all duration-1000 ease-in-out scroll-smooth
            ${scrolled
              ? 'opacity-100 translate-y-0 h-auto duration-1000'
              : 'opacity-0 translate-y-full h-0 overflow-hidden duration-1000'
            }
          `}>
          <CardOverviewSection />
        </div>

        {/* Subheading */}
        <p className="text-gray-900 font-bold text-md mb-2 mt-5">
          Don't compromise on growth or control.
        </p>
        <p className="text-gray-600 text-sm max-w-3xl mx-auto mb-6">
          Create custom virtual cards and set permissions for everything from ad marketplace spend to remote work stipends, for individual teams or your whole company.
        </p>
      </div>
    </section>
  );
}