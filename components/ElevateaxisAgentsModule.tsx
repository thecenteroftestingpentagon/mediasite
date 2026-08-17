export default function ElevateaxisAgentsModule() {
  return (
    <section id="qualification" className="max-w-[1280px] mx-auto px-8 mb-[140px]">
      <div className="flex items-center gap-4 mb-8">
        <span className="font-label-caps text-label-caps bg-surface-variant text-primary px-3 py-1 rounded-full">
          We're Not For Everyone
        </span>
        <div className="h-px bg-elevateaxis flex-grow opacity-50"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
        <div className="lg:col-span-5">
          <h2 className="font-h2 text-[48px] text-primary leading-tight">
            Stop Buying Leads. Start Building Pipeline.
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 flex items-end">
          <p className="font-body-lg text-body-lg text-secondary-elevateaxis">
            We partner exclusively with growth-focused businesses that have a proven offer and the operational capacity to close high-volume sales opportunities.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Qualification Card 1 */}
        <div className="bg-card-elevateaxis rounded-3xl p-8 border border-elevateaxis h-[450px] flex flex-col relative overflow-hidden group">
          <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity duration-500">
            <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl absolute -ml-20 -mt-20"></div>
            <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-r from-purple-400 to-pink-300 blur-2xl absolute ml-20 mt-20"></div>
          </div>
          <div className="z-10 bg-surface/80 backdrop-blur-sm self-start px-4 py-2 rounded-full border border-elevateaxis text-sm font-medium mb-auto">
            Growth Partner Criteria
          </div>
          <div className="z-10 mt-auto bg-white/20 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/40 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
            <div className="flex gap-4 items-center mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-white text-sm">
                  check_circle
                </span>
              </div>
              <div className="bg-white/40 backdrop-blur-md border border-white/50 px-4 py-2 rounded-2xl rounded-tl-sm text-sm shadow-sm">
                Are you equipped to handle 30+ new qualified customer conversations per month?
              </div>
            </div>
            <div className="flex gap-4 items-center flex-row-reverse">
              <div className="w-10 h-10 bg-white/40 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-sm">
                  business
                </span>
              </div>
              <div className="bg-primary/90 text-on-primary px-4 py-2 rounded-2xl rounded-tr-sm text-sm shadow-lg">
                Yes, we have a validated offer and sales team ready for pipeline scale.
              </div>
            </div>
          </div>
        </div>

        {/* Industries Card 2 */}
        <div id="industries" className="bg-card-elevateaxis rounded-3xl p-8 border border-elevateaxis h-[450px] flex flex-col relative overflow-hidden group">
          <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-50 group-hover:opacity-80 transition-opacity duration-500">
            {/* Abstract Chart Representation */}
            <div className="flex items-end gap-2 h-40 w-full px-8">
              <div className="w-full bg-surface-variant rounded-t-sm h-[30%]"></div>
              <div className="w-full bg-surface-variant rounded-t-sm h-[50%]"></div>
              <div className="w-full bg-primary/20 rounded-t-sm h-[80%] relative">
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-surface">
                  <div className="w-2 h-2 bg-surface rounded-full"></div>
                </div>
              </div>
              <div className="w-full bg-surface-variant rounded-t-sm h-[60%]"></div>
              <div className="w-full bg-surface-variant rounded-t-sm h-[40%]"></div>
            </div>
          </div>
          <div className="z-10 bg-surface/80 backdrop-blur-sm self-start px-4 py-2 rounded-full border border-elevateaxis text-sm font-medium mb-auto">
            Industries We Scale
          </div>
          <div className="z-10 mt-auto bg-white/30 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
            <h4 className="font-h3 text-[20px] mb-2">Real Estate, Healthcare, Construction, Fitness, Professional Services</h4>
            <p className="text-sm text-secondary-elevateaxis">
              Customized acquisition architecture engineered specifically around your unit economics, lifetime value, and sales cycle duration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
