import DashboardWidget from "./DashboardWidget";

export default function PlatformOverview() {
  return (
    <section id="the-framework" className="max-w-[1280px] mx-auto px-4 sm:px-8 mb-[100px] sm:mb-[180px]">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
        <h2 className="font-h2 text-h2 text-primary mb-4 sm:mb-6">
          Stop Paying For 500 Lead Forms That Never Pick Up The Phone.
        </h2>
        <p className="font-body-lg text-body-lg text-secondary-elevateaxis">
          Your sales team shouldn&apos;t waste 40 hours a week calling fake numbers, tire-kickers, and people who &quot;don&apos;t remember opting in&quot;. We filter out the noise and put verified, high-budget buyers directly on your calendar.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {/* Large Card 1: Problem */}
        <div className="bg-card-elevateaxis rounded-2xl p-6 border border-elevateaxis min-h-[240px] sm:h-[300px] flex flex-col justify-between relative overflow-hidden group hover:shadow-sm transition-shadow">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/30 opacity-60 group-hover:opacity-80 transition-opacity"></div>
          <div className="flex justify-between items-start z-10 mb-6">
            <span className="material-symbols-outlined text-secondary-elevateaxis text-3xl">
              cancel
            </span>
          </div>
          <div className="z-10">
            <h4 className="font-h3 text-[18px] sm:text-[20px] mb-2">The Old Way: Wasted Time &amp; Burnt Out Sales Teams</h4>
            <p className="text-xs sm:text-sm text-secondary-elevateaxis">
              Agencies hand you spreadsheets of 500 cheap leads. Your team dials all day, hits disconnected numbers, and gets yelled at by people who never meant to fill out a form.
            </p>
          </div>
        </div>

        {/* Large Card 2: Solution */}
        <div className="bg-card-elevateaxis rounded-2xl p-6 border border-elevateaxis min-h-[240px] sm:h-[300px] flex flex-col justify-between relative overflow-hidden group hover:shadow-sm transition-shadow">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/30 opacity-60 group-hover:opacity-80 transition-opacity"></div>
          <div className="flex justify-between items-start z-10 mb-6">
            <span className="material-symbols-outlined text-secondary-elevateaxis text-3xl">
              check_circle
            </span>
          </div>
          <div className="z-10">
            <h4 className="font-h3 text-[18px] sm:text-[20px] mb-2">The Elevatexis Way: Pre-Screened Motivated Buyers</h4>
            <p className="text-xs sm:text-sm text-secondary-elevateaxis">
              Every lead answers qualification questions about their budget and purchase timeline before you speak with them. If 60% aren&apos;t qualified, you don&apos;t pay.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[460px] sm:min-h-[560px] bg-panel-elevateaxis rounded-3xl border border-elevateaxis flex items-center justify-center overflow-hidden relative group p-4 sm:p-8">
        <img
          alt="Luxury Real Estate & High-Ticket Asset Pipeline"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0"
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
        />
        <div className="relative flex items-center justify-center z-20 w-full">
          {/* Glowing Accent Backgrounds */}
          <div className="absolute w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/20 rounded-full blur-[80px] -translate-x-20 -translate-y-10"></div>
          <div className="absolute w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/20 rounded-full blur-[80px] translate-x-20 translate-y-10"></div>
          {/* Glassmorphic Widget Container */}
          <DashboardWidget />
        </div>
      </div>
    </section>
  );
}
