export default function HeroProductPanel() {
  return (
    <section id="growth-system" className="max-w-[1280px] mx-auto px-4 sm:px-8 mb-[100px] sm:mb-[180px]">
      <div className="bg-panel-elevateaxis rounded-3xl p-4 sm:p-8 flex flex-col relative overflow-hidden border border-elevateaxis min-h-[500px] sm:min-h-[600px] justify-between gap-6">
        {/* Top Tabs */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 z-10">
          <div className="flex flex-wrap justify-center bg-surface-container-low p-1 rounded-full border border-elevateaxis shadow-sm">
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-surface text-primary rounded-full text-xs sm:text-sm font-medium shadow-sm">
              How We Work For You
            </button>
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-secondary-elevateaxis rounded-full text-xs sm:text-sm font-medium hover:text-primary transition-colors">
              Zero Tech Knowledge Needed
            </button>
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-secondary-elevateaxis rounded-full text-xs sm:text-sm font-medium hover:text-primary transition-colors">
              Guaranteed Qualified Leads
            </button>
          </div>
          <div className="bg-surface-container-low px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-elevateaxis flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs sm:text-sm font-medium">Elevateaxis Customer Engine</span>
          </div>
        </div>

        {/* Center Orbs */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100">
          <div className="w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-gradient-to-tr from-rose-500 to-orange-400 blur-3xl absolute -ml-20 sm:-ml-40"></div>
          <div className="w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 blur-3xl absolute"></div>
          <div className="w-[180px] sm:w-[250px] h-[180px] sm:h-[250px] rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 blur-3xl absolute ml-20 sm:ml-40 mt-10 sm:mt-20"></div>
          <div className="w-[220px] sm:w-[350px] h-[220px] sm:h-[350px] rounded-full bg-gradient-to-tr from-sky-400 to-blue-500 blur-3xl absolute ml-40 sm:ml-80 -mt-10 sm:-mt-20"></div>
        </div>

        {/* Play Button Center */}
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
            Create Ads → Filter Fake Leads → Send Real Buyers → You Make Sales
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 z-10 bg-surface/80 backdrop-blur-md p-4 rounded-2xl border border-elevateaxis">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar w-full sm:w-auto pb-2 sm:pb-0">
            <span className="text-xs sm:text-sm font-medium text-primary whitespace-nowrap">
              1. We Create Your Ads
            </span>
            <span className="text-xs sm:text-sm font-medium text-secondary-elevateaxis whitespace-nowrap">
              2. We Filter Out Junk Leads
            </span>
            <span className="text-xs sm:text-sm font-medium text-secondary-elevateaxis whitespace-nowrap">
              3. We Send Buyers to Your WhatsApp
            </span>
            <span className="text-xs sm:text-sm font-medium text-secondary-elevateaxis whitespace-nowrap">
              4. You Close The Sales
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
