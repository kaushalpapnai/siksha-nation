// components/WhyChoose.tsx
import React from "react";
import Image from "next/image";

// Import all PNG icons
import oneOnOneIcon from "../images/one-on-one.png";
import mockTestIcon from "../images/mock-test.png";
import doubtSupportIcon from "../images/doubt-support.png";
import progressIcon from "../images/progress.png";
import timeMasteryIcon from "../images/time-mastery.png";
import stressFreeIcon from "../images/stress-free.png";
import dualSupportIcon from "../images/dual-support.png";
import shortcutsIcon from "../images/shortcuts.png";
import notesIcon from "../images/notes.png";

export default function WhyChoose() {
  const features = [
    {
      title: "One-on-One Guidance:",
      description: "Personalized strategies by top-ranking mentors.",
      icon: oneOnOneIcon,
    },
    {
      title: "Mock Tests & Feedback",
      description: "Real exam simulation + analysis = higher scores.",
      icon: mockTestIcon,
    },
    {
      title: "Constant Doubt Support",
      description: "Get answers instantly from your junior mentor",
      icon: doubtSupportIcon,
    },
    {
      title: "Progress Tracking",
      description: "Regular reviews with your senior mentor keep you aligned.",
      icon: progressIcon,
    },
    {
      title: "Time Mastery",
      description: "Practice managing every second in the exam hall.",
      icon: timeMasteryIcon,
    },
    {
      title: "Stress-Free Prep",
      description: "Build confidence and mental resilience for exam day.",
      icon: stressFreeIcon,
    },
    {
      title: "Dual Support System",
      description: "Senior mentor sets your roadmap, junior mentor ensures you follow it daily.",
      icon: dualSupportIcon,
    },
    {
      title: "Proven Shortcuts & Techniques",
      description: "Learn to solve smarter, faster, and with accuracy.",
      icon: shortcutsIcon,
    },
    {
      title: "Notes & Resources",
      description: "Expert-curated, precise, and effective study material.",
      icon: notesIcon,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-center font-extrabold leading-tight mb-16">
          <div className="text-[2.5rem] sm:text-[3rem] text-[#0268B6]">
            Why Choose
          </div>
          <div className="text-[2.5rem] sm:text-[3rem] mt-1">
            <span className="text-[#0268B6]">JEET </span>
            <span className="text-[#6CB746]">SARTHI </span>
            <span className="text-[#0268B6]">Mentorship?</span>
          </div>
        </h2>

        {/* Features grid with responsive borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const isLastItem = index === features.length - 1;
            const isInLastRow = index >= 6;
            const isNotLastInRow = (index + 1) % 3 !== 0;

            return (
              <div
                key={index}
                className={`relative p-6 lg:p-8 
                  ${!isInLastRow ? 'lg:border-b-2 lg:border-slate-300' : ''} 
                  ${isNotLastInRow ? 'lg:border-r-2 lg:border-slate-300' : ''}
                `}
              >
                {/* Mobile/Tablet bottom border only */}
                {!isLastItem && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-300 lg:hidden" />
                )}
                
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={80}
                      height={80}
                      className="w-16 h-16 sm:w-20 sm:h-20"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <button className="px-12 py-4 bg-[#0268B6] text-white text-lg font-semibold rounded-lg hover:bg-[#0256a0] active:bg-[#024587] transition-colors shadow-lg">
            Enroll For Mentorship
          </button>
        </div>
      </div>
    </section>
  );
}
