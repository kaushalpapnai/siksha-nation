// components/Header.tsx
import React from "react";
import Image from "next/image";
import logo from "../images/jeet-sarthi-logo-web.svg";
import headerImage from "../images/siksha-header.png";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-3">
        <div className="flex items-start justify-between">
          {/* Left: JEET SARTHI logo */}
          <div>
            <Image
              src={logo}
              alt="JEET SARTHI"
              className="h-[48px] w-auto sm:h-[54px] md:h-[80px]"
              priority
            />
          </div>

          {/* Right: Powered By + Shiksha Nation lockup */}
          <div className="flex flex-col items-end gap-0.5">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-slate-500 font-normal">
              Powered By
            </span>
            <Image
              src={headerImage}
              alt="Shiksha Nation"
              className="h-[30px] w-auto sm:h-[34px] md:h-[48px]"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
