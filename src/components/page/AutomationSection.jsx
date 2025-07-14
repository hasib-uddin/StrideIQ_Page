'use client';

import { ArrowTrendingUpIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState, useEffect, useRef } from 'react';
import { LuShield } from "react-icons/lu";
import { RiFlashlightLine } from "react-icons/ri";
export default function AutomationSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null); // Ref to observe the section

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // If the section is intersecting (visible in viewport)
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            {
                threshold: 0.2, // Trigger when 10% of the section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Cleanup: disconnect observer when component unmounts
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []); // Empty dependency array means this effect runs once on mount

    // Animation classes for rise bottom to top
    const riseAnimateClasses = `
    transition-all duration-1000 ease-out
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
  `;

    // Animation classes for slide left to right
    const slideLeftAnimateClasses = `
    transition-all duration-1000 ease-out
    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}
  `;

    // Animation classes for slide right to left
    const slideRightAnimateClasses = `
    transition-all duration-1000 ease-out
    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}
  `;

    return (
        <section ref={sectionRef} className="bg-gradient-to-br from-[#181c2b] via-[#11142C] to-[#1D203A] text-white py-20 px-8  ">
            <div className="max-w-7xl mx-auto text-center">
                {/* Badge - No animation, or add one if desired */}
                <div className="mb-4">
                    <span className="inline-block bg-[#1B1E36] text-sm text-white px-4 py-1 rounded-full border border-[#383C56]">
                        ⭐ Trusted by 2,000+ Finance Teams
                    </span>
                </div>

                {/* Heading - Animated Rise */}
                <h2 className={`
           text-[40px] md:text-[70px]  font-bold mb-4 leading-tight
            ${riseAnimateClasses}
            delay-100
          `}>
                    Automation, <span className="text-orange-400">Control</span> and{" "}
                    <br /><span className="text-purple-400">Savings</span>
                </h2>

                {/* Subheading & Features - Animated Rise */}
                <p className={`
            text-orange-200 text-lg font-medium mb-3
            ${riseAnimateClasses}
            delay-200 // Delay for subheading
          `}>
                    The Corporate card you've been looking for
                </p>
                <div className={`
            flex justify-center items-center gap-4 text-sm text-gray-300 mb-10
            ${riseAnimateClasses}
            delay-300 // Delay for features
          `}>
                    <span className="flex items-center gap-1">⚡ 2-minute setup</span>
                    <span className="flex items-center gap-1">🔒 Bank-grade security</span>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Left Column - Animated Slide Left to Right */}
                    <div className="space-y-6">
                       
                        <div className={`
  bg-[#1B1E36] rounded-xl px-4 py-6 text-left border border-[#2E314D] hover:border-orange-500
  ${slideLeftAnimateClasses} delay-600
`}>
                            <div className="flex items-start gap-4">
                                {/* Icon box */}
                                <div className="bg-orange-500 p-3 rounded-xl flex items-center justify-center">
                                    <LuShield className="text-white text-xl" />
                                </div>

                                {/* Text Content */}
                                <div>
                                    <h4 className="text-white font-semibold text-sm mb-1">
                                        Bank-Level Security
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Military-grade encryption protects every transaction
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={`
                bg-[#1B1E36] rounded-xl p-4 text-left border border-[#2E314D] hover:border-orange-500
                ${slideLeftAnimateClasses}
                delay-800 // Delay for second left card
              `}>
                            <div className="flex items-start gap-4">
                                {/* Icon box */}
                                <div className="bg-orange-500 p-3 rounded-xl flex items-center justify-center">
                                    <RiFlashlightLine className="text-white text-xl" />
                                </div>

                                {/* Text Content */}
                                <div>
                                    <h4 className="text-white font-semibold text-sm mb-1">
                                        Instant Approvals
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Real-time spend decisions with smart controls
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center Card Image - Animated Rise */}
                    <div className={`
              flex justify-center
              ${riseAnimateClasses}
              delay-500 // Delay for image
            `}>
                        <Image
                            src="/img/visa-card.png" // Update with your path
                            alt="Corporate Card"
                            width={260}
                            height={160}
                            className="rounded-xl shadow-xl"
                        />
                    </div>

                    {/* Right Column - Animated Slide Right to Left */}
                    <div className="space-y-6">
                        <div className={`
                bg-[#1B1E36] rounded-xl p-4 text-left border border-[#2E314D] hover:border-orange-500
                ${slideRightAnimateClasses}
                delay-600 // Delay for first right card
              `}>
                           <div className="flex items-start gap-4">
                                {/* Icon box */}
                                <div className="bg-orange-500 p-3 rounded-xl flex items-center justify-center">
                                    <ArrowTrendingUpIcon className="text-white h-5 w-5 " />
                                </div>

                                {/* Text Content */}
                                <div>
                                    <h4 className="text-white font-semibold text-sm mb-1">
                                        Smart Analytics
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        AI-powered insights for better spending decisions
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`
                bg-[#1B1E36] rounded-xl p-4 text-left border border-[#2E314D] hover:border-orange-500
                ${slideRightAnimateClasses}
                delay-800 // Delay for second right card
              `}>
                           <div className="flex items-start gap-4 ">
                                {/* Icon box */}
                                <div className="bg-orange-500 p-3 rounded-xl flex items-center justify-center">
                                    <CurrencyDollarIcon className="text-white h-5 w-5" />
                                </div>

                                {/* Text Content */}
                                <div>
                                    <h4 className="text-white font-semibold text-sm mb-1">
                                        0.5% Cashback
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Unlimited rewards on every business purchase
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}