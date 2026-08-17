export default function DashboardWidget() {
  return (
    <div className="relative w-full max-w-[440px] bg-white/25 backdrop-blur-3xl border border-white/40 rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 shadow-[0_48px_96px_-24px_rgba(0,0,0,0.25),inset_0_0_0_1px_rgba(255,255,255,0.4)] flex flex-col gap-6 sm:gap-8">
      {/* Header: Status & Identifier */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary/50 mb-0.5 sm:mb-1">
            ELEVATE™ Lead System
          </span>
          <span className="text-xs sm:text-sm font-semibold text-primary tracking-tight">
            Live Verified Buyers Tracker
          </span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2.5 bg-emerald-500/15 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-emerald-500/25">
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[9px] sm:text-[10px] font-bold text-emerald-700 uppercase tracking-widest">
            Guarantee Active
          </span>
        </div>
      </div>

      {/* Enhanced Spectral / Funnel Visualization */}
      <div className="flex items-end justify-between h-16 sm:h-24 gap-1">
        <div className="w-1.5 bg-gradient-to-t from-blue-500/40 to-blue-500 rounded-full h-[25%]"></div>
        <div className="w-1.5 bg-gradient-to-t from-blue-500/40 to-blue-500 rounded-full h-[40%]"></div>
        <div className="w-1.5 bg-gradient-to-t from-blue-500/40 to-blue-500 rounded-full h-[65%]"></div>
        <div className="w-1.5 bg-gradient-to-t from-blue-500/40 to-blue-500 rounded-full h-[55%]"></div>
        <div className="w-1.5 bg-gradient-to-t from-purple-500/40 to-purple-600 rounded-full h-[85%]"></div>
        <div className="w-1.5 bg-gradient-to-t from-purple-500/40 to-purple-600 rounded-full h-[95%]"></div>
        <div className="w-1.5 bg-gradient-to-t from-purple-500/40 to-purple-600 rounded-full h-[70%]"></div>
        <div className="w-1.5 bg-gradient-to-t from-blue-500/40 to-blue-500 rounded-full h-[45%]"></div>
        <div className="w-1.5 bg-gradient-to-t from-blue-500/40 to-blue-500 rounded-full h-[60%]"></div>
        <div className="w-1.5 bg-gradient-to-t from-blue-500/40 to-blue-500 rounded-full h-[30%]"></div>
        <div className="w-1.5 bg-gradient-to-t from-blue-500/40 to-blue-500 rounded-full h-[50%]"></div>
        <div className="w-1.5 bg-gradient-to-t from-blue-500/40 to-blue-500 rounded-full h-[20%]"></div>
        <div className="w-1.5 bg-gradient-to-t from-blue-500/40 to-blue-500 rounded-full h-[35%]"></div>
        <div className="w-1.5 bg-gradient-to-t from-blue-500/40 to-blue-500 rounded-full h-[15%]"></div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-6 py-1 sm:py-2">
        <div className="flex flex-col gap-0.5 sm:gap-1">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-secondary-elevateaxis font-semibold">
            Fast Response
          </span>
          <div className="flex items-baseline gap-0.5 sm:gap-1">
            <span className="text-base sm:text-xl font-bold text-primary">&lt;60</span>
            <span className="text-[10px] sm:text-xs text-secondary-elevateaxis font-medium">
              sec
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-0.5 sm:gap-1">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-secondary-elevateaxis font-semibold">
            Real Buyers
          </span>
          <div className="flex items-baseline gap-0.5 sm:gap-1">
            <span className="text-base sm:text-xl font-bold text-primary">60%+</span>
            <span className="text-[10px] sm:text-xs text-secondary-elevateaxis font-medium">min</span>
          </div>
        </div>
        <div className="flex flex-col gap-0.5 sm:gap-1">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-secondary-elevateaxis font-semibold">
            Guarantee
          </span>
          <div className="flex items-baseline gap-0.5 sm:gap-1">
            <span className="text-base sm:text-xl font-bold text-primary">100%</span>
            <span className="text-[10px] sm:text-xs text-secondary-elevateaxis font-medium">
              backed
            </span>
          </div>
        </div>
      </div>

      {/* Playback / Pipeline Controls */}
      <div className="flex items-center justify-between border-t border-black/5 pt-4 sm:pt-6">
        <div className="flex items-center gap-3 sm:gap-6">
          <button className="material-symbols-outlined text-xl sm:text-2xl text-primary/50 hover:text-primary transition-colors">
            support_agent
          </button>
          <button className="w-9 h-9 sm:w-12 sm:h-12 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <span className="material-symbols-outlined fill text-xl sm:text-2xl">
              check
            </span>
          </button>
          <button className="material-symbols-outlined text-xl sm:text-2xl text-primary/50 hover:text-primary transition-colors">
            verified_user
          </button>
        </div>
        <div className="flex flex-col items-end gap-0.5 sm:gap-1">
          <span className="text-[10px] sm:text-[12px] font-mono font-bold text-primary bg-white/50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg border border-white/60 shadow-sm">
            Guaranteed Client Delivery
          </span>
          <span className="text-[8px] sm:text-[9px] font-bold text-secondary-elevateaxis/60 uppercase tracking-tighter">
            Zero Risk For Your Business
          </span>
        </div>
      </div>
    </div>
  );
}
