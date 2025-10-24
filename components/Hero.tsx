// components/Hero.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [exam, setExam] = useState<"NEET" | "JEE">("NEET");

  return (
    <section className="relative">
      {/* Background image + blue overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2000&auto=format&fit=crop"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0268B6]/75" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left hero content - matching real website exactly */}
          <div className="text-white pt-12">
            <h1 className="text-[2rem] sm:text-5xl lg:text-[3rem] font-extrabold leading-[1.2] tracking-tight">
              Secure Your Dream
              Rank in NEET & JEE with
              JEET SARTHI
            </h1>
            
            <p className="mt-8 text-lg sm:text-xl text-white/95 font-bold">
              Powered by Shiksha Nation
            </p>
            
            <div className="mt-7 h-[2px] w-full bg-white/60" />
            
            <p className="mt-7 text-base sm:text-lg leading-[1.7] text-white/95 font-bold max-w-[560px]">
              Personalized One‑on‑One Mentorship from IITians<br />
              & Doctors Who've Already Cracked It
            </p>
          </div>

          {/* Right form card */}
          <div className="lg:mt-0">
            <div>
              <h2 className="text-white text-center text-[1.8rem] md:text-[2rem] font-extrabold leading-tight">
                Book your FREE First Session
              </h2>

              <form className="mt-6 space-y-4">
                {/* Name + Email */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      className="h-12 w-full bg-white text-slate-900 placeholder-slate-500 px-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-white"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      className="h-12 w-full bg-white text-slate-900 placeholder-slate-500 px-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-white"
                      placeholder="Email"
                    />
                  </div>
                </div>

                {/* Phone + Student Class */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      className="h-12 w-full bg-white text-slate-900 placeholder-slate-500 px-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-white"
                      placeholder="+91"
                    />
                    <button type="button" className="mt-2 text-sm text-red-400 font-medium hover:underline">
                      Send OTP
                    </button>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Student Class <span className="text-red-400">*</span>
                    </label>
                    <select className="h-12 w-full bg-white text-slate-900 px-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-white">
                      <option>Dropper</option>
                      <option>Class 12</option>
                      <option>Class 11</option>
                      <option>Class 10</option>
                    </select>
                  </div>
                </div>

                {/* Exam Type + City */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Exam Type <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={exam}
                        onChange={(e) => setExam(e.target.value as "NEET" | "JEE")}
                        className="h-12 w-full bg-white text-slate-900 px-4 text-[15px] appearance-none focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        <option>NEET</option>
                        <option>JEE</option>
                      </select>
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-700">▾</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">City</label>
                    <input
                      className="h-12 w-full bg-white text-slate-900 placeholder-slate-500 px-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-white"
                      placeholder="City"
                    />
                  </div>
                </div>

                {/* How Can We Help */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">How Can We Help?</label>
                  <div className="relative">
                    <select className="h-12 w-full bg-white text-slate-900 px-4 text-[15px] appearance-none focus:outline-none focus:ring-2 focus:ring-white">
                      <option>Backlog Management</option>
                      <option>Doubt Solving</option>
                      <option>Revision Planning</option>
                      <option>Test Strategy</option>
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-700">▾</span>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-3">
                  <button className="w-full h-[52px] bg-[#6CB746] text-white text-base font-semibold hover:bg-[#5da639] active:bg-[#4f9030] transition-colors shadow-lg">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
