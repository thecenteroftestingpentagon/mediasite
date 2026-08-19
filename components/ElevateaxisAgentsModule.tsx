export default function ElevateaxisAgentsModule() {
  return (
    <section id="qualification" className="max-w-[1280px] mx-auto px-4 sm:px-8 mb-[100px] sm:mb-[140px]">
      <div className="flex items-center gap-4 mb-6 sm:mb-8">
        <span className="font-label-caps text-label-caps bg-surface-variant text-primary px-3 py-1 rounded-full text-xs">
          Dubai Real Estate Partners
        </span>
        <div className="h-px bg-elevateaxis flex-grow opacity-50"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-8 sm:mb-12">
        <div className="lg:col-span-5">
          <h2 className="font-h2 text-3xl sm:text-4xl md:text-[48px] text-primary leading-tight">
            Who We Scale In The UAE Real Estate Market
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 flex items-end">
          <p className="font-body-lg text-sm sm:text-body-lg text-secondary-elevateaxis">
            We partner with Dubai developers, brokerages, and sales directors who have AED-denominated inventory and sales capacity to handle 30+ verified viewings monthly.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Qualification Card 1 */}
        <div className="bg-card-elevateaxis rounded-3xl p-5 sm:p-8 border border-elevateaxis min-h-[400px] sm:h-[450px] flex flex-col relative overflow-hidden group">
          <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity duration-500">
            <div className="w-[180px] sm:w-[200px] h-[180px] sm:h-[200px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl absolute -ml-20 -mt-20"></div>
            <div className="w-[180px] sm:w-[200px] h-[180px] sm:h-[200px] rounded-full bg-gradient-to-r from-purple-400 to-pink-300 blur-2xl absolute ml-20 mt-20"></div>
          </div>
          <div className="z-10 bg-surface/80 backdrop-blur-sm self-start px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-elevateaxis text-xs sm:text-sm font-medium mb-auto">
            Partner Requirements
          </div>
          <div className="z-10 mt-auto bg-white/20 backdrop-blur-2xl p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] border border-white/40 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
            <div className="flex gap-3 sm:gap-4 items-center mb-3 sm:mb-4">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-primary rounded-full flex items-center justify-center shadow-sm shrink-0">
                <span className="material-symbols-outlined text-white text-xs sm:text-sm">
                  help_outline
                </span>
              </div>
              <div className="bg-white/40 backdrop-blur-md border border-white/50 px-3 sm:px-4 py-2 rounded-xl sm:rounded-2xl rounded-tl-sm text-xs sm:text-sm shadow-sm">
                Is your sales team ready to handle 30+ qualified buyer inquiries &amp; booked viewings every month?
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4 items-center flex-row-reverse">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/40 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-xs sm:text-sm">
                  thumb_up
                </span>
              </div>
              <div className="bg-primary/90 text-on-primary px-3 sm:px-4 py-2 rounded-xl sm:rounded-2xl rounded-tr-sm text-xs sm:text-sm shadow-lg">
                Yes! We have AED 1M+ inventory and brokers ready to close site visits.
              </div>
            </div>
          </div>
        </div>

        {/* Industries Card 2 */}
        <div id="industries" className="bg-card-elevateaxis rounded-3xl p-5 sm:p-8 border border-elevateaxis min-h-[400px] sm:h-[450px] flex flex-col relative overflow-hidden group">
          <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-50 group-hover:opacity-80 transition-opacity duration-500">
            {/* Abstract Chart Representation */}
            <div className="flex items-end gap-2 h-32 sm:h-40 w-full px-6 sm:px-8">
              <div className="w-full bg-surface-variant rounded-t-sm h-[30%]"></div>
              <div className="w-full bg-surface-variant rounded-t-sm h-[50%]"></div>
              <div className="w-full bg-primary/20 rounded-t-sm h-[80%] relative">
                <div className="absolute -top-3 -right-3 w-5 sm:w-6 h-5 sm:h-6 bg-primary rounded-full flex items-center justify-center border-2 border-surface">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-surface rounded-full"></div>
                </div>
              </div>
              <div className="w-full bg-surface-variant rounded-t-sm h-[60%]"></div>
              <div className="w-full bg-surface-variant rounded-t-sm h-[40%]"></div>
            </div>
          </div>
          <div className="z-10 bg-surface/80 backdrop-blur-sm self-start px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-elevateaxis text-xs sm:text-sm font-medium mb-auto">
            Dubai Real Estate Segments
          </div>
          <div className="z-10 mt-auto bg-white/30 backdrop-blur-2xl p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] border border-white/50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
            <h4 className="font-h3 text-lg sm:text-[20px] mb-2">Off-Plan Developers, Secondary Market Brokerages, Luxury Villas, Commercial, Holiday Homes</h4>
            <p className="text-xs sm:text-sm text-secondary-elevateaxis">
              Proven acquisition funnels for high-ticket property units where closing even one AED 2M+ unit covers your marketing investment multi-fold.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
