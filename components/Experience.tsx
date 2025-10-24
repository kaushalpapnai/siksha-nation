// components/Experience.tsx
import React from "react";
import Image from "next/image";

// Import icon images - replace with your actual paths
import experienceIcon from "../images/experience-icon.png";
import aspirantsIcon from "../images/aspirants-icon.png";
import supportIcon from "../images/support-icon.png";
import plansIcon from "../images/plans-icon.png";

export default function Experience() {
  const features = [
    {
      icon: experienceIcon,
      title: "100+ Years of Combined Mentorship Expertise",
    },
    {
      icon: aspirantsIcon,
      title: "Thousands of Aspirants Guided by Rankers",
    },
    {
      icon: supportIcon,
      title: "One-on-One Daily Support to Keep You Disciplined",
    },
    {
      icon: plansIcon,
      title: "Tailored Plans That Save Time & Maximize Practice",
    },
  ];

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-r from-[#0e7bb5] via-[#2d9d8f] to-[#4fb978] overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-center text-white text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold mb-12 md:mb-16">
          Our Experience = Your Results
        </h2>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-[4rem] p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Icon */}
              <div className="mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={500}
                  height={120}
                  className="w-24 h-24 sm:w-28 sm:h-28"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <button className="px-12 py-4 bg-white text-[#4fb978] text-lg font-semibold rounded-lg hover:bg-slate-50 active:bg-slate-100 transition-colors shadow-lg">
            Enroll For Mentorship
          </button>
        </div>
      </div>
    </section>
  );
}
