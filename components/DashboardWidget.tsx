export default function DashboardWidget() {
  return (
    <div className="relative w-[440px] bg-white/25 backdrop-blur-3xl border border-white/40 rounded-[2rem] p-8 shadow-[0_48px_96px_-24px_rgba(0,0,0,0.25),inset_0_0_0_1px_rgba(255,255,255,0.4)] flex flex-col gap-8">
      {/* Header: Status & Identifier */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary/50 mb-1">
            Neural Engine v4.2 PRO
          </span>
          <span className="text-sm font-semibold text-primary tracking-tight">
            Real-time Synthesis Active
          </span>
        </div>
        <div className="flex items-center gap-2.5 bg-emerald-500/15 px-3 py-1.5 rounded-full border border-emerald-500/25">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">
            Studio Mode
          </span>
        </div>
      </div>

      {/* Enhanced Spectral Visualization */}
      <div className="flex items-end justify-between h-24 gap-1">
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
      <div className="grid grid-cols-3 gap-6 py-2">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-widest text-secondary-elevateaxis font-semibold">
            Latency
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-primary">24</span>
            <span className="text-xs text-secondary-elevateaxis font-medium">
              ms
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-widest text-secondary-elevateaxis font-semibold">
            Confidence
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-primary">99.8</span>
            <span className="text-xs text-secondary-elevateaxis font-medium">%</span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-widest text-secondary-elevateaxis font-semibold">
            Stability
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-primary">0.02</span>
            <span className="text-xs text-secondary-elevateaxis font-medium">
              jitter
            </span>
          </div>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex items-center justify-between border-t border-black/5 pt-6">
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-2xl text-primary/50 hover:text-primary transition-colors">
            skip_previous
          </button>
          <button className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <span className="material-symbols-outlined fill text-2xl">
              play_arrow
            </span>
          </button>
          <button className="material-symbols-outlined text-2xl text-primary/50 hover:text-primary transition-colors">
            skip_next
          </button>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-[12px] font-mono font-bold text-primary bg-white/50 px-3 py-1 rounded-lg border border-white/60 shadow-sm">
            00:42.12
          </span>
          <span className="text-[9px] font-bold text-secondary-elevateaxis/60 uppercase tracking-tighter">
            Total Length 04:20
          </span>
        </div>
      </div>
    </div>
  );
}
