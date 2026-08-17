"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-200/60 bg-[#F7F7F5]/90 backdrop-blur-md transition-all">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex justify-between items-center h-[64px] sm:h-[72px]">
        <div className="flex items-center gap-6 md:gap-12">
          <a
            className="text-lg font-bold tracking-tighter text-zinc-900 text-[18px] sm:text-[20px] font-h1"
            href="#"
          >
            Elevateaxis
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a
              className="text-sm font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition-colors duration-200 font-body-md"
              href="#growth-system"
            >
              Growth System
            </a>
            <a
              className="text-sm font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition-colors duration-200 font-body-md"
              href="#the-framework"
            >
              ELEVATE™ Framework
            </a>
            <a
              className="text-sm font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition-colors duration-200 font-body-md"
              href="#qualification"
            >
              Who We Scale
            </a>
            <a
              className="text-sm font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition-colors duration-200 font-body-md"
              href="#industries"
            >
              Industries
            </a>
            <a
              className="text-sm font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition-colors duration-200 font-body-md"
              href="#why-us"
            >
              Why Us
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            className="hidden lg:inline-block text-xs font-medium text-zinc-600 hover:text-primary transition-colors"
            href="mailto:swagatobhattacharjee07@gmail.com"
          >
            swagatobhattacharjee07@gmail.com
          </a>
          <a
            className="bg-primary text-on-primary px-4 py-2 rounded-full font-medium transition-all scale-98 active:opacity-80 text-[14px] font-body-md"
            href="https://cal.com/om-choksi-whpxfw/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Strategy Call
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            className="bg-primary text-on-primary px-3 py-1.5 rounded-full text-xs font-medium"
            href="https://cal.com/om-choksi-whpxfw/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Call
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F7F5] border-b border-zinc-200 px-6 py-6 flex flex-col gap-4 shadow-lg">
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-zinc-800 hover:text-primary"
            href="#growth-system"
          >
            Growth System
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-zinc-800 hover:text-primary"
            href="#the-framework"
          >
            ELEVATE™ Framework
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-zinc-800 hover:text-primary"
            href="#qualification"
          >
            Who We Scale
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-zinc-800 hover:text-primary"
            href="#industries"
          >
            Industries
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-zinc-800 hover:text-primary"
            href="#why-us"
          >
            Why Us
          </a>
          <hr className="border-zinc-200 my-1" />
          <a
            className="text-sm font-medium text-zinc-600 truncate"
            href="mailto:swagatobhattacharjee07@gmail.com"
          >
            ✉️ swagatobhattacharjee07@gmail.com
          </a>
          <a
            className="bg-primary text-on-primary text-center px-4 py-3 rounded-full font-medium text-sm mt-2"
            href="https://cal.com/om-choksi-whpxfw/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Strategy Call →
          </a>
        </div>
      )}
    </nav>
  );
}
