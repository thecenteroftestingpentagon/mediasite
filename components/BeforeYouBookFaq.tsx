const BEFORE_YOU_BOOK_FAQS = [
  {
    question: '"Everyone promised this. Why are you any different?"',
    answer:
      "We do not sell raw form fills or cheap database leads. We build the campaign, qualify every inquiry against your project, budget, timeline, and intent, then send only buyer-ready conversations to your team.",
  },
  {
    question: 'What counts as a "qualified" lead?',
    answer:
      "A qualified lead is someone with a real phone number, matching location or investment interest, clear budget range, relevant property requirement, and willingness to speak, visit, or book a consultation.",
  },
  {
    question: "We sell under-construction inventory. Does this still work?",
    answer:
      "Yes. Under-construction works when the positioning is sharp: payment plan, possession timeline, developer trust, location upside, and investor logic. We filter out people looking only for ready-to-move bargains.",
  },
  {
    question: "Do you work outside Gurgaon and Dubai?",
    answer:
      "Yes. Gurgaon and Dubai are strong fits, but the system can run for premium real estate markets across India, the Middle East, and other high-ticket locations where buyers research before they visit.",
  },
  {
    question: "What do we actually pay?",
    answer:
      "It depends on your market, ticket size, ad spend, and how aggressive the appointment target is. On the call, we map the numbers first so you know the campaign cost, management fee, and expected lead flow before committing.",
  },
  {
    question: "How fast do we see site visits?",
    answer:
      "Most campaigns start producing conversations in the first few days after launch. Site visits usually depend on your inventory, offer, sales follow-up speed, and local buyer demand, but we optimize for visits from day one.",
  },
];

export default function BeforeYouBookFaq() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-8 mb-[80px] sm:mb-[140px]">
      <div className="rounded-3xl border border-elevateaxis bg-card-elevateaxis p-4 sm:p-6 shadow-[0_24px_70px_-55px_rgba(0,0,0,0.7)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          <div className="lg:col-span-4">
            <span className="font-label-caps text-label-caps text-secondary-elevateaxis">
              Before You Book
            </span>
            <h2 className="font-h2 text-2xl sm:text-3xl text-primary leading-tight mt-3">
              The questions every developer throws at us.
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col divide-y divide-black/10">
            {BEFORE_YOU_BOOK_FAQS.map((item) => (
              <details
                key={item.question}
                className="group py-4 first:pt-0 last:pb-0"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left [&::-webkit-details-marker]:hidden">
                  <span className="font-semibold text-sm sm:text-base text-primary">
                    {item.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-xl leading-none text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="font-body-md text-sm text-secondary-elevateaxis leading-relaxed pr-10 pt-3">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
