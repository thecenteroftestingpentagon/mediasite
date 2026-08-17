export default function SignOffSection() {
  return (
    <section id="strategy-call" className="max-w-[1280px] mx-auto px-4 sm:px-8 mb-[80px] sm:mb-[140px] text-center flex flex-col items-center">
      <h2 className="font-h2 text-3xl sm:text-4xl md:text-[48px] text-primary mb-4 sm:mb-6 max-w-3xl leading-tight">
        What Would 30 More Qualified Customers a Month Be Worth to You?
      </h2>
      <p className="font-body-lg text-sm sm:text-body-lg text-secondary-elevateaxis max-w-xl mb-6 sm:mb-8">
        Book a 15-minute strategy call to audit your current acquisition funnel or reach out to us directly via email.
      </p>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
        <a
          className="bg-primary text-on-primary text-center px-6 py-3.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all hover:bg-opacity-90 shadow-md"
          href="https://cal.com/om-choksi-whpxfw/15min"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Your Free Strategy Call
        </a>
        <a
          className="bg-transparent border border-outline text-primary text-center px-6 py-3.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all hover:bg-surface-variant truncate"
          href="mailto:swagatobhattacharjee07@gmail.com"
        >
          swagatobhattacharjee07@gmail.com
        </a>
      </div>
    </section>
  );
}
