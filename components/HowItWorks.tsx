// components/HowItWorks.tsx
import React from "react";
import Image from "next/image";

// Import step icons - replace with your actual paths
import onboardingIcon from "../images/onboarding-icon.png";
import dailySupportIcon from "../images/daily-support-icon.png";
import resultIcon from "../images/result-icon.png";
import roadmapIcon from "../images/roadmap-icon.png";
import reviewIcon from "../images/review-icon.png";

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-center font-extrabold text-3xl sm:text-4xl md:text-[2.75rem] leading-tight mb-16">
          How <span className="text-[#0268B6]">JEET </span>
          <span className="text-[#6CB746]">SARTHI </span>
          <span className="text-[#0268B6]">Mentorship</span> Works?
        </h2>

        {/* Main container with relative positioning for the line */}
        <div className="relative">
          {/* Top Row - 3 steps */}
          <div className="relative mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center px-4">
                <div className="mb-4">
                  <Image
                    src={onboardingIcon}
                    alt="Onboarding"
                    width={100}
                    height={100}
                    className="w-20 h-20 sm:w-24 sm:h-24"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#6CB746] mb-2">
                  Onboarding
                </h3>
                <p className="text-slate-700 text-sm">
                  Understand your goals & challenges.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center px-4">
                <div className="mb-4">
                  <Image
                    src={dailySupportIcon}
                    alt="Daily Support"
                    width={100}
                    height={100}
                    className="w-20 h-20 sm:w-24 sm:h-24"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#6CB746] mb-2">
                  Daily Support
                </h3>
                <p className="text-slate-700 text-sm">
                  Junior mentor checks in regularly.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center px-4">
                <div className="mb-4">
                  <Image
                    src={resultIcon}
                    alt="Result"
                    width={100}
                    height={100}
                    className="w-20 h-20 sm:w-24 sm:h-24"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#6CB746] mb-2">
                  Result
                </h3>
                <p className="text-slate-700 text-sm">
                  Consistency + confidence = success.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Line with 5 Dots - hidden on mobile */}
          <div className="relative hidden md:block h-1 bg-[#6CB746] mx-8 mb-12">
            {/* 5 evenly spaced dots */}
            <div className="absolute -top-1.5 left-0 w-4 h-4 bg-[#0e7bb5] rounded-full border-2 border-white" />
            <div className="absolute -top-1.5 left-1/4 -ml-2 w-4 h-4 bg-[#0e7bb5] rounded-full border-2 border-white" />
            <div className="absolute -top-1.5 left-1/2 -ml-2 w-4 h-4 bg-[#0e7bb5] rounded-full border-2 border-white" />
            <div className="absolute -top-1.5 left-3/4 -ml-2 w-4 h-4 bg-[#0e7bb5] rounded-full border-2 border-white" />
            <div className="absolute -top-1.5 right-0 w-4 h-4 bg-[#0e7bb5] rounded-full border-2 border-white" />
          </div>

          {/* Bottom Row - 2 steps centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-3xl mx-auto">
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="mb-4">
                <Image
                  src={roadmapIcon}
                  alt="Personal Roadmap"
                  width={100}
                  height={100}
                  className="w-20 h-20 sm:w-24 sm:h-24"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#6CB746] mb-2">
                Personal Roadmap
              </h3>
              <p className="text-slate-700 text-sm">
                Senior mentor sets your plan.
              </p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="mb-4">
                <Image
                  src={reviewIcon}
                  alt="Review & Adjust"
                  width={100}
                  height={100}
                  className="w-20 h-20 sm:w-24 sm:h-24"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#6CB746] mb-2">
                Review & Adjust
              </h3>
              <p className="text-slate-700 text-sm">
                Senior mentor tracks performance weekly.
              </p>
            </div>
          </div>
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
