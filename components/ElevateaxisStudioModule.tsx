import Image from "next/image";

const SMALL_CARDS = [
  { icon: "brush", label: "Custom Property Creatives" },
  { icon: "target", label: "Target Investor Selection" },
  { icon: "chat", label: "Instant WhatsApp & Call Alerts" },
  { icon: "verified", label: "60% Qualified Buyer Guarantee" },
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
            What We Handle For Dubai Developers &amp; Brokerages
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 flex items-end">
          <p className="font-body-lg text-sm sm:text-body-lg text-secondary-elevateaxis">
            You don&apos;t need in-house media buyers, tech teams, or marketing experience. We handle property ad creative, landing pages, buyer screening, and automated WhatsApp delivery.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Large Card 1 */}
        <div className="bg-card-elevateaxis rounded-2xl border border-elevateaxis min-h-[260px] sm:h-[300px] flex flex-col justify-end relative overflow-hidden group hover:shadow-sm transition-shadow">
          <Image
            alt="Done-For-You Property Ad Creation & Lead Campaigns - Elevatexis"
            src="/addImage.png"
            width={1200}
            height={675}
            className="absolute inset-0 w-full h-full object-cover group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="z-10 bg-white/20 backdrop-blur-xl border border-white/30 p-5 sm:p-6 rounded-b-2xl text-white">
            <h4 className="font-h3 text-lg sm:text-[20px] mb-2 text-white">1. Done-For-You Property Ad Creative &amp; Funnels</h4>
            <p className="text-xs sm:text-sm text-white/80">
              We produce luxury property ad creative, write compelling investor copy, and build high-converting landers targeting off-plan investors, expats, and Golden Visa seekers.
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
            <h4 className="font-h3 text-lg sm:text-[20px] mb-2">2. Strict Buyer Qualification &amp; Instant Delivery</h4>
            <p className="text-xs sm:text-sm text-secondary-elevateaxis">
              We screen for AED budget bands, purchase timeline, and buyer type (investor vs end-user) before routing leads straight to your brokers on WhatsApp.
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
