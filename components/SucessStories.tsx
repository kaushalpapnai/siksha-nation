// components/SuccessStories.tsx
"use client";
import React, { useState, useEffect } from "react";

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      name: "Namrata Jha",
      quote:
        "JEET SARTHI mentors helped me solve problems faster and manage my time better. My junior mentor kept me on track with regular tasks, while my senior mentor showed me exam strategies that really worked. Their constant guidance made me feel confident and stress-free about my preparation.",
    },
    {
      name: "Mayank Goyal",
      quote:
        "Before joining JEET SARTHI, I was overwhelmed with too many books and no clear direction. My mentors simplified everything with proven study strategies and daily follow-ups. This constant push made me more disciplined, confident, and ready for the exam.",
    },
    {
      name: "Ruchir Bansal",
      quote:
        "I'm so grateful to my JEET SARTHI mentors. They treated my success as their own. My senior mentor gave me the right strategy, while my junior mentor checked on me daily. It felt like having a support system that truly cared about my preparation.",
    },
    {
      name: "Priya Sharma",
      quote:
        "The dual mentorship system is incredible. My senior mentor created a personalized roadmap aligned with my strengths, while my junior mentor ensured I stuck to it daily. The accountability and expert guidance transformed my preparation level completely.",
    },
    {
      name: "Arjun Mehta",
      quote:
        "JEET SARTHI gave me exactly what I needed - clarity and consistency. My mentors taught me how to think during the exam. The mock tests with detailed feedback and regular strategy sessions boosted my confidence tremendously for the real exam.",
    },
    {
      name: "Anjali Verma",
      quote:
        "What sets JEET SARTHI apart is the personal touch. My mentors knew my challenges and celebrated my wins. The interactive sessions on exam patterns and preparation hacks were game-changers. I've never felt more ready and prepared for NEET.",
    },
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const cardsPerSlide = isMobile ? 1 : 3;
    const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isMobile]);

  // Calculate visible testimonials based on screen size
  const cardsPerSlide = isMobile ? 1 : 3;
  const startIndex = activeIndex * cardsPerSlide;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + cardsPerSlide);
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-center font-extrabold text-3xl sm:text-4xl md:text-[2.75rem] leading-tight mb-16">
          <span className="text-[#0268B6]">Success </span>
          <span className="text-[#6CB746]">Stories</span>
        </h2>

        {/* Testimonials Grid with Slide Animation */}
        <div className="overflow-hidden">
          <div className="transition-all duration-500 ease-in-out">
            <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-3'} gap-6 mb-12`}>
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={startIndex + index}
                  className="relative bg-[#e8f5f0] rounded-2xl p-8  flex flex-col animate-slideIn"
                >
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <svg
                      className={`w-12 h-12 ${
                        index === 0
                          ? "text-[#0268B6]"
                          : index === 1
                          ? "text-[#6CB746]"
                          : "text-[#0268B6]"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                  </div>

                  {/* Quote Text */}
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 flex-1">
                    {testimonial.quote}
                  </p>
                </div>
              ))}
            </div>

            {/* Names Row */}
            <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-3'} gap-6 mb-8`}>
              {visibleTestimonials.map((testimonial, index) => (
                <div key={startIndex + index} className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {testimonial.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-[#6CB746] scale-125" : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
