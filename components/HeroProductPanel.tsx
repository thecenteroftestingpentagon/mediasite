export default function HeroProductPanel() {
  return (
    <section id="growth-system" className="max-w-[1280px] mx-auto px-8 mb-[180px]">
      <div className="bg-panel-elevateaxis rounded-3xl p-8 flex flex-col relative overflow-hidden border border-elevateaxis min-h-[600px] justify-between">
        {/* Top Tabs */}
        <div className="flex justify-between items-center z-10">
          <div className="flex bg-surface-container-low p-1 rounded-full border border-elevateaxis shadow-sm">
            <button className="px-4 py-2 bg-surface text-primary rounded-full text-sm font-medium shadow-sm">
              Offer Engineering
            </button>
            <button className="px-4 py-2 text-secondary-elevateaxis rounded-full text-sm font-medium hover:text-primary transition-colors">
              Precision Paid Ads
            </button>
            <button className="px-4 py-2 text-secondary-elevateaxis rounded-full text-sm font-medium hover:text-primary transition-colors">
              Automated Qualification
            </button>
          </div>
          <div className="bg-surface-container-low px-4 py-2 rounded-full border border-elevateaxis flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-sm font-medium">ELEVATE™ Acquisition Engine</span>
          </div>
        </div>

        {/* Center Orbs */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100">
          <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-rose-500 to-orange-400 blur-3xl absolute -ml-40"></div>
          <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 blur-3xl absolute"></div>
          <div className="w-[250px] h-[250px] rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 blur-3xl absolute ml-40 mt-20"></div>
          <div className="w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-sky-400 to-blue-500 blur-3xl absolute ml-80 -mt-20"></div>
        </div>

        {/* Play Button Center */}
        <div className="z-10 self-center my-auto flex flex-col items-center gap-4 text-center">
          <a
            href="https://cal.com/om-choksi-whpxfw/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-20 bg-surface rounded-full flex items-center justify-center shadow-lg border border-elevateaxis transition-transform hover:scale-105 group"
          >
            <span className="material-symbols-outlined text-4xl text-primary pl-1 group-hover:text-emerald-600 transition-colors">
              trending_up
            </span>
          </a>
          <span className="text-xs font-bold uppercase tracking-widest text-primary/60">
            Ad → Lead → Qualified → Appointment → Revenue
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-center z-10 bg-surface/80 backdrop-blur-md p-4 rounded-2xl border border-elevateaxis">
          <div className="flex gap-6 overflow-x-auto no-scrollbar">
            <span className="text-sm font-medium text-primary">
              1. Paid Ads Strategy
            </span>
            <span className="text-sm font-medium text-secondary-elevateaxis">
              2. Conversion Funnels
            </span>
            <span className="text-sm font-medium text-secondary-elevateaxis">
              3. Automated Qualification
            </span>
            <span className="text-sm font-medium text-secondary-elevateaxis">
              4. CRM &amp; Follow-Up
            </span>
            <span className="text-sm font-medium text-secondary-elevateaxis">
              5. Revenue Attribution
            </span>
          </div>
          <a
            className="bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap"
            href="https://cal.com/om-choksi-whpxfw/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Claim Free Audit
          </a>
        </div>
      </div>
    </section>
  );
}
