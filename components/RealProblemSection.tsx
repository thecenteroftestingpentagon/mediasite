const PROBLEM_CARDS = [
  {
    icon: "campaign",
    title: 'The "we promise the world" agency',
    body: "They sell you cheap CPL, big dashboards, and a mountain of leads nobody can transact. When bookings do not happen, the blame quietly moves to your sales team.",
  },
  {
    icon: "web",
    title: "The property portals",
    body: "You buy the same lead four other brokers are already calling. Now your closers are stuck in a phone-dialing race instead of hosting serious buyers at the site.",
  },
];

export default function RealProblemSection() {
  return (
    <section className="bg-[#141316] text-white mb-[100px] sm:mb-[180px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-16 sm:py-24 lg:py-28">
        <div className="max-w-5xl">
          <span className="font-label-caps text-label-caps text-red-500">
            The Real Problem
          </span>
          <h2 className="font-h2 text-3xl sm:text-5xl lg:text-[56px] leading-tight mt-5 text-[#F8F5EA]">
            It was never your project.{" "}
            <span className="italic underline decoration-[#B9A84D] decoration-4 underline-offset-8">
              It was your leads.
            </span>
          </h2>
          <p className="font-body-lg text-base sm:text-lg text-white/66 max-w-2xl mt-5">
            You are not short on demand. You are drowning in the wrong kind.
            And two villains are bleeding your budget dry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-9">
          {PROBLEM_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-[#4B4431] bg-white/[0.04] p-6 sm:p-7"
            >
              <span className="material-symbols-outlined text-2xl text-[#D8C867]">
                {card.icon}
              </span>
              <h3 className="font-h3 text-xl sm:text-2xl text-[#F8F5EA] mt-3">
                {card.title}
              </h3>
              <p className="font-body-md text-sm sm:text-base text-white/66 leading-relaxed mt-3">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <p className="font-h3 text-xl sm:text-2xl text-[#F8F5EA] leading-snug mt-8 max-w-5xl">
          Both leave you with the same graveyard: junk leads, no-shows, and
          closers chasing ghosts.{" "}
          <span className="text-red-500">
            Elevateaxis kills all three.
          </span>
        </p>
      </div>
    </section>
  );
}
