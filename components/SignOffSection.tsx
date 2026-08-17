export default function SignOffSection() {
  return (
    <section id="strategy-call" className="max-w-[1280px] mx-auto px-4 sm:px-8 mb-[80px] sm:mb-[140px] text-center flex flex-col items-center">
      <h2 className="font-h2 text-3xl sm:text-4xl md:text-[48px] text-primary mb-4 sm:mb-6 max-w-3xl leading-tight">
        Want Us To Handle Your Lead Generation &amp; Deliver Guaranteed Customers?
      </h2>
      <p className="font-body-lg text-sm sm:text-body-lg text-secondary-elevateaxis max-w-xl mb-6 sm:mb-8">
        Book a quick 15-minute strategy call with our team. We&apos;ll explain how we bring real paying customers to your business with our 60% lead qualification guarantee.
      </p>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-4">
        <a
          className="bg-primary text-on-primary text-center px-6 py-3.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all hover:bg-opacity-90 shadow-md"
          href="https://cal.com/om-choksi-whpxfw/15min"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire Us — Book Free 15-Min Call
        </a>
        <a
          className="bg-transparent border border-outline text-primary text-center px-6 py-3.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all hover:bg-surface-variant truncate"
          href="mailto:swagatobhattacharjee07@gmail.com"
        >
          swagatobhattacharjee07@gmail.com
        </a>
      </div>
      {/* WhatsApp Direct Chat below Email */}
      <div>
        <a
          className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm"
          href="https://wa.me/918582807895"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-base">💬</span>
          <span>+91 85828 07895 &middot; Let&apos;s chat on WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
