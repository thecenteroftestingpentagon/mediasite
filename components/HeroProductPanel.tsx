"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroProductPanel() {
  const [activeTab, setActiveTab] = useState<
    "how-it-works" | "zero-tech" | "guaranteed-leads"
  >("how-it-works");

  return (
    <section id="growth-system" className="max-w-[1280px] mx-auto px-4 sm:px-8 mb-[100px] sm:mb-[180px]">
      <div className="bg-panel-elevateaxis rounded-3xl p-4 sm:p-8 flex flex-col relative overflow-hidden border border-elevateaxis min-h-[500px] sm:min-h-[600px] justify-between gap-6">
        {/* Top Interactive Tabs */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 z-10">
          <div className="flex flex-wrap justify-center bg-surface-container-low p-1 rounded-full border border-elevateaxis shadow-sm">
            <button
              onClick={() => setActiveTab("how-it-works")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === "how-it-works"
                  ? "bg-surface text-primary shadow-sm"
                  : "text-secondary-elevateaxis hover:text-primary"
              }`}
            >
              How We Work For You
            </button>
            <button
              onClick={() => setActiveTab("zero-tech")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === "zero-tech"
                  ? "bg-surface text-primary shadow-sm"
                  : "text-secondary-elevateaxis hover:text-primary"
              }`}
            >
              Zero Tech Knowledge Needed
            </button>
            <button
              onClick={() => setActiveTab("guaranteed-leads")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === "guaranteed-leads"
                  ? "bg-surface text-primary shadow-sm"
                  : "text-secondary-elevateaxis hover:text-primary"
              }`}
            >
              Guaranteed Qualified Leads
            </button>
          </div>
          <div className="bg-surface-container-low px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-elevateaxis flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium">Elevatexis Property Buyer Engine</span>
          </div>
        </div>

        {/* Center Orbs */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80">
          <div className="w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-gradient-to-tr from-rose-500 to-orange-400 blur-3xl absolute -ml-20 sm:-ml-40"></div>
          <div className="w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 blur-3xl absolute"></div>
          <div className="w-[180px] sm:w-[250px] h-[180px] sm:h-[250px] rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 blur-3xl absolute ml-20 sm:ml-40 mt-10 sm:mt-20"></div>
          <div className="w-[220px] sm:w-[350px] h-[220px] sm:h-[350px] rounded-full bg-gradient-to-tr from-sky-400 to-blue-500 blur-3xl absolute ml-40 sm:ml-80 -mt-10 sm:-mt-20"></div>
        </div>

        {/* Center Content Display */}
        {activeTab === "how-it-works" ? (
          /* Original Play / Trend Button Center Layout for 1st Tab & Default */
          <div className="z-10 self-center my-auto flex flex-col items-center gap-3 sm:gap-4 text-center py-8">
            <a
              href="https://cal.com/om-choksi-whpxfw/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 sm:w-20 sm:h-20 bg-surface rounded-full flex items-center justify-center shadow-lg border border-elevateaxis transition-transform hover:scale-105 group"
            >
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-primary pl-0.5 group-hover:text-emerald-600 transition-colors">
                trending_up
              </span>
            </a>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary/70 px-4">
              Targeted Ads &rarr; Screen Investors &rarr; Verified Viewings &rarr; Closed Deals
            </span>
          </div>
        ) : (
          /* Leads.png Photo Showcase for "Zero Tech" & "Guaranteed Leads" Tabs */
          <div className="z-10 self-center my-auto flex flex-col items-center gap-4 text-center py-4 sm:py-6 w-full max-w-3xl">
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/60 shadow-2xl bg-white/30 backdrop-blur-md transition-all duration-300 group">
              <Image
                src="/leads.png"
                alt="Zero Tech Setup - Guaranteed Qualified Dubai Real Estate Leads"
                width={1200}
                height={675}
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.01] transition-transform duration-500"
                priority
              />
            </div>

            {activeTab === "zero-tech" && (
              <div className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full border border-white shadow-md text-xs sm:text-sm font-semibold text-primary animate-fadeIn">
                ⚡ <strong>Zero Tech Setup Needed:</strong> We launch property ads, landing pages, &amp; screen buyers 100% done-for-you.
              </div>
            )}

            {activeTab === "guaranteed-leads" && (
              <div className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full border border-white shadow-md text-xs sm:text-sm font-semibold text-emerald-700 animate-fadeIn">
                🛡️ <strong>60% Buyer Qualification Guarantee:</strong> Every lead is screened for real AED budget &amp; purchase intent.
              </div>
            )}
          </div>
        )}

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 z-10 bg-surface/80 backdrop-blur-md p-4 rounded-2xl border border-elevateaxis">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar w-full sm:w-auto pb-2 sm:pb-0">
            <span className="text-xs sm:text-sm font-medium text-primary whitespace-nowrap">
              1. We Launch Targeted Ads
            </span>
            <span className="text-xs sm:text-sm font-medium text-secondary-elevateaxis whitespace-nowrap">
              2. We Screen Unqualified Leads
            </span>
            <span className="text-xs sm:text-sm font-medium text-secondary-elevateaxis whitespace-nowrap">
              3. We Send Investors to Your WhatsApp
            </span>
            <span className="text-xs sm:text-sm font-medium text-secondary-elevateaxis whitespace-nowrap">
              4. Your Team Closes Property Sales
            </span>
          </div>
          <a
            className="w-full sm:w-auto text-center bg-primary text-on-primary px-6 py-2.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap"
            href="https://cal.com/om-choksi-whpxfw/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
