export default function HeroSection() {
  return (
    <section className="relative isolate max-w-[1280px] mx-auto px-4 sm:px-8 mb-[80px] sm:mb-[140px] pt-8 sm:pt-4 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -inset-x-4 sm:-inset-x-8 top-0 bottom-0 -z-10 overflow-hidden rounded-[2rem] border border-white/70 bg-surface-container-low shadow-[0_30px_80px_-60px_rgba(0,0,0,0.65)]"
        >
          {/* Real estate background photo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2200')",
            }}
          />
          {/* Strong left-side overlay so text stays crisp */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F7F5]/95 via-[#F7F7F5]/75 to-[#F7F7F5]/10" />
          {/* Soft top/bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F7F7F5]/40 via-transparent to-[#F7F7F5]/60" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center py-16 sm:py-20 lg:py-24">
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
            <div className="inline-flex items-center gap-2 bg-surface-container-low border border-elevateaxis px-3.5 py-1.5 rounded-full text-xs font-semibold text-primary w-fit shadow-sm">
              Guaranteed Leads &middot; 60% Qualification Guarantee
            </div>
            <h1 className="font-h1 text-4xl sm:text-6xl lg:text-h1 text-primary leading-tight drop-shadow-[0_2px_12px_rgba(255,255,255,0.9)]">
              We Bring You Real Paying Customers — Guaranteed.
            </h1>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-2 sm:mt-4">
              <a
                className="bg-primary text-on-primary text-center px-6 py-3.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all hover:bg-opacity-90 shadow-md"
                href="https://cal.com/om-choksi-whpxfw/15min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Us — Book Free Strategy Call
              </a>
              <a
                className="bg-white/70 backdrop-blur-sm border border-outline text-primary text-center px-6 py-3.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all hover:bg-white/90"
                href="mailto:swagatobhattacharjee07@gmail.com"
              >
                Email Us Directly
              </a>
            </div>
            {/* WhatsApp Direct Chat below Email */}
            <div className="mt-1">
              <a
                className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 bg-emerald-50/90 hover:bg-emerald-100 border border-emerald-200/80 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm backdrop-blur-sm"
                href="https://wa.me/918582807895"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-base">💬</span>
                <span>+91 85828 07895 &middot; Let&apos;s chat on WhatsApp</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex justify-start lg:justify-end">
            <p className="font-body-lg text-sm sm:text-body-lg text-gray-900 max-w-sm text-left pt-2 lg:pt-4 bg-white/60 backdrop-blur-sm rounded-2xl px-4 py-3">
              Tired of agencies giving you fake phone numbers and junk leads? We create your ad campaigns, filter out tire-kickers, and send real buyers directly to your phone or calendar. <strong className="text-black">If 60% of your leads aren&apos;t qualified, you don&apos;t pay us.</strong>
            </p>
          </div>
        </div>
    </section>
  );
}
