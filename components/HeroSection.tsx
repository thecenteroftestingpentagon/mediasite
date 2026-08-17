export default function HeroSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-8 mb-[80px] sm:mb-[140px] pt-4 sm:pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
          <h1 className="font-h1 text-4xl sm:text-6xl lg:text-h1 text-primary leading-tight">
            We Don’t Generate Leads. We Generate Customers.
          </h1>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-2 sm:mt-4">
            <a
              className="bg-primary text-on-primary text-center px-6 py-3.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all hover:bg-opacity-90 shadow-md"
              href="https://cal.com/om-choksi-whpxfw/15min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Free Strategy Call
            </a>
            <a
              className="bg-transparent border border-outline text-primary text-center px-6 py-3.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all hover:bg-surface-variant"
              href="mailto:swagatobhattacharjee07@gmail.com"
            >
              Email Us Directly
            </a>
          </div>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 flex justify-start lg:justify-end">
          <p className="font-body-lg text-sm sm:text-body-lg text-secondary-elevateaxis max-w-sm text-left pt-2 lg:pt-4">
            Stop wasting ad spend on cheap clicks and un-contactable leads. We
            engineer complete customer acquisition systems that combine market
            research, offer engineering, precision ad strategy, and automated
            qualification to deliver booked pipeline and attributed revenue.
          </p>
        </div>
      </div>
    </section>
  );
}
