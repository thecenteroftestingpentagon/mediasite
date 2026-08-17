import Image from "next/image";

export default function CareerSection() {
  return (
    <section id="careers" className="max-w-[1280px] mx-auto px-4 sm:px-8 mb-[100px] sm:mb-[180px]">
      <div className="bg-panel-elevateaxis rounded-3xl p-6 sm:p-12 border border-elevateaxis overflow-hidden relative group">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 flex flex-col gap-6 z-10">
            <div className="inline-flex items-center gap-2 bg-surface-container-low border border-elevateaxis px-3.5 py-1.5 rounded-full text-xs font-semibold text-primary w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Join Our Elite Team &middot; We&apos;re Hiring
            </div>

            <h2 className="font-h2 text-3xl sm:text-4xl lg:text-[44px] text-primary leading-tight">
              Exceptional service is our thing and our teams make it happen.
            </h2>

            <p className="font-body-lg text-sm sm:text-body-lg text-secondary-elevateaxis leading-relaxed">
              We&apos;re looking for ambitious individuals that thrive in a high-pressure, incentive driven environment and we provide such candidates with the opportunity to earn almost limitless amounts of tax-free money.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <span className="font-h3 text-xl sm:text-2xl text-primary font-bold">
                Are you ready?
              </span>
              <a
                className="bg-primary text-on-primary text-center px-6 py-3 rounded-full font-medium text-sm sm:text-base transition-all hover:bg-opacity-90 shadow-md"
                href="mailto:swagatobhattacharjee07@gmail.com?subject=Application%20for%20Elevateaxis%20Team"
              >
                Apply Now &mdash; Join Elevateaxis
              </a>
            </div>
          </div>

          {/* Right Image Showcase (estate.png) */}
          <div className="lg:col-span-6 z-10 relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/60 shadow-2xl bg-surface-variant/40 group">
              <Image
                src="/estate.png"
                alt="Exceptional Service & Elite Team Estate - Elevateaxis"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-md p-3.5 rounded-xl border border-white/40 text-white text-xs font-medium flex items-center justify-between">
                <span>High Performance &middot; Limitless Incentives</span>
                <span className="font-mono text-amber-300 font-bold">Join Us &rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
