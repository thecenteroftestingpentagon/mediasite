const SMALL_CARDS = [
  { icon: "brush", label: "Custom Ad Creatives" },
  { icon: "target", label: "Target Customer Selection" },
  { icon: "chat", label: "Instant WhatsApp & Call Alerts" },
  { icon: "verified", label: "60% Qualified Lead Guarantee" },
];

export default function ElevateaxisStudioModule() {
  return (
    <section id="why-us" className="max-w-[1280px] mx-auto px-4 sm:px-8 mb-[100px] sm:mb-[180px]">
      <div className="flex items-center gap-4 mb-6 sm:mb-8">
        <span className="font-label-caps text-label-caps bg-surface-variant text-primary px-3 py-1 rounded-full text-xs">
          Full Done-For-You Lead Generation
        </span>
        <div className="h-px bg-elevateaxis flex-grow opacity-50"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-8 sm:mb-12">
        <div className="lg:col-span-5">
          <h2 className="font-h2 text-3xl sm:text-4xl md:text-[48px] text-primary leading-tight">
            What We Handle For You When You Hire Us
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 flex items-end">
          <p className="font-body-lg text-sm sm:text-body-lg text-secondary-elevateaxis">
            You don&apos;t need technical knowledge, complex software, or marketing experience. Our team takes care of all ad creation, page design, lead screening, and automated setup.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Large Card 1 */}
        <div className="bg-card-elevateaxis rounded-2xl border border-elevateaxis min-h-[260px] sm:h-[300px] flex flex-col justify-end relative overflow-hidden group hover:shadow-sm transition-shadow">
          <img
            alt="High-Ticket Luxury Property & Offer Engineering"
            className="absolute inset-0 w-full h-full object-cover group-hover:opacity-100 transition-opacity duration-500"
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop"
          />
          <div className="z-10 bg-white/20 backdrop-blur-xl border border-white/30 p-5 sm:p-6 rounded-b-2xl text-white">
            <h4 className="font-h3 text-lg sm:text-[20px] mb-2 text-white">1. Done-For-You Ad Creation &amp; Messaging</h4>
            <p className="text-xs sm:text-sm text-white/80">
              We write your ad copy, design eye-catching visuals, and build high-converting pages that attract buyers interested in your exact service.
            </p>
          </div>
        </div>
        {/* Large Card 2 */}
        <div className="bg-card-elevateaxis rounded-2xl p-5 sm:p-6 border border-elevateaxis min-h-[260px] sm:h-[300px] flex flex-col justify-between relative overflow-hidden group hover:shadow-sm transition-shadow">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-surface-variant/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex justify-between items-start z-10 mb-4">
            <span className="material-symbols-outlined text-secondary-elevateaxis text-3xl">
              screening
            </span>
          </div>
          <div className="z-10">
            <h4 className="font-h3 text-lg sm:text-[20px] mb-2">2. Strict Lead Screening &amp; Instant Delivery</h4>
            <p className="text-xs sm:text-sm text-secondary-elevateaxis">
              We ask budget and intent questions before leads reach you, so you only spend time talking to people who can actually afford your business.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {SMALL_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="bg-panel-elevateaxis rounded-xl p-4 sm:p-5 border border-elevateaxis flex flex-col gap-2 sm:gap-3 items-start hover:bg-surface-variant/50 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
              {card.icon}
            </span>
            <span className="font-medium text-xs sm:text-sm">{card.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
