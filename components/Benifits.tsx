// components/Benefits.tsx
import React from "react";
import Image from "next/image";

// Import benefit icons - replace with your actual paths
import routineIcon from "../images/routine-icon.png";
import tipsIcon from "../images/tips-icon.png";
import interactiveIcon from "../images/interactive-icon.png";
import mentorshipIcon from "../images/mentorship-icon.png";

// Import student image
import studentImage from "../images/student-benefit.png";

export default function Benefits() {
  const benefits = [
    {
      icon: routineIcon,
      title: "Daily Routine Guidance",
      description: "Stay disciplined and consistent.",
    },
    {
      icon: tipsIcon,
      title: "Tips & Tricks from Toppers",
      description: "Learn what actually works in the exam.",
    },
    {
      icon: interactiveIcon,
      title: "Interactive Sessions",
      description: "Insights on exam patterns and preparation hacks.",
    },
    {
      icon: mentorshipIcon,
      title: "Dedicated One-on-One Mentorship",
      description: "Personalized support at every step.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Student Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <Image
                src={studentImage}
                alt="Student"
                width={500}
                height={600}
                className="w-full max-w-md lg:max-w-lg"
                priority
              />
            </div>
          </div>

          {/* Right - Benefits Content */}
          <div className="text-center lg:text-left">
            {/* Heading - centered on mobile, left-aligned on desktop */}
            <h2 className="font-extrabold text-3xl sm:text-4xl md:text-[2.75rem] leading-tight mb-10">
              Exclusive <span className="text-[#0268B6]">JEET </span>
              <span className="text-[#6CB746]">SARTHI</span>
              <br />
              <span className="text-[#0268B6]">Benefits</span>
            </h2>

            {/* Top Row - First 2 Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-6 text-left">
              {benefits.slice(0, 2).map((benefit, index) => (
                <div key={index} className="flex flex-col items-center sm:items-start">
                  <div className="mb-3">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      width={64}
                      height={64}
                      className="w-12 h-12 sm:w-16 sm:h-16"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 text-center sm:text-left">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed text-center sm:text-left">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Single Horizontal Divider */}
            <div className="h-px bg-slate-300 mb-6" />

            {/* Bottom Row - Last 2 Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-8 text-left">
              {benefits.slice(2, 4).map((benefit, index) => (
                <div key={index} className="flex flex-col items-center sm:items-start">
                  <div className="mb-3">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      width={64}
                      height={64}
                      className="w-12 h-12 sm:w-16 sm:h-16"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 text-center sm:text-left">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed text-center sm:text-left">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button - centered on mobile, left-aligned on desktop */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <button className="px-12 py-4 bg-[#0268B6] text-white text-lg font-semibold rounded-lg hover:bg-[#0256a0] active:bg-[#024587] transition-colors shadow-lg">
                Enroll For Mentorship
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
