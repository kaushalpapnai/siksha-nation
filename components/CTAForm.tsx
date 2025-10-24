// components/CTAForm.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";

// Import background image - replace with your actual path
import bgImage from "../images/cta-background.png";

export default function CTAForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentClass: "Dropper",
    examType: "NEET",
    city: "",
    help: "Backlog Management",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#1b6ba8]/85" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-center text-white font-extrabold text-3xl sm:text-4xl md:text-[2.5rem] leading-tight mb-12">
          Start Your Success Journey With JEET SARTHI
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full h-14 rounded-md bg-white text-slate-900 placeholder-slate-500 px-4 text-base focus:outline-none focus:ring-2 focus:ring-[#6CB746]"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full h-14 rounded-md bg-white text-slate-900 placeholder-slate-500 px-4 text-base focus:outline-none focus:ring-2 focus:ring-[#6CB746]"
              />
            </div>
          </div>

          {/* Row 2: Phone + Student Class */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91"
                required
                className="w-full h-14 rounded-md bg-white text-slate-900 placeholder-slate-500 px-4 text-base focus:outline-none focus:ring-2 focus:ring-[#6CB746]"
              />
              <button type="button" className="mt-2 text-sm text-red-400 font-medium hover:underline">
                Send OTP
              </button>
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Student Class <span className="text-red-400">*</span>
              </label>
              <select
                name="studentClass"
                value={formData.studentClass}
                onChange={handleChange}
                className="w-full h-14 rounded-md bg-white text-slate-900 px-4 text-base appearance-none focus:outline-none focus:ring-2 focus:ring-[#6CB746]"
              >
                <option>Dropper</option>
                <option>Class 12</option>
                <option>Class 11</option>
                <option>Class 10</option>
              </select>
            </div>
          </div>

          {/* Row 3: Exam Type + City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Exam Type <span className="text-red-400">*</span>
              </label>
              <select
                name="examType"
                value={formData.examType}
                onChange={handleChange}
                className="w-full h-14 rounded-md bg-white text-slate-900 px-4 text-base appearance-none focus:outline-none focus:ring-2 focus:ring-[#6CB746]"
              >
                <option>NEET</option>
                <option>JEE</option>
              </select>
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full h-14 rounded-md bg-white text-slate-900 placeholder-slate-500 px-4 text-base focus:outline-none focus:ring-2 focus:ring-[#6CB746]"
              />
            </div>
          </div>

          {/* Row 4: How Can We Help */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">How Can We Help?</label>
            <select
              name="help"
              value={formData.help}
              onChange={handleChange}
              className="w-full h-14 rounded-md bg-white text-slate-900 px-4 text-base appearance-none focus:outline-none focus:ring-2 focus:ring-[#6CB746]"
            >
              <option>Backlog Management</option>
              <option>Doubt Solving</option>
              <option>Revision Planning</option>
              <option>Test Strategy</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full h-16 rounded-md bg-[#6CB746] text-white text-lg font-semibold hover:bg-[#5da639] active:bg-[#4f9030] transition-colors shadow-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
