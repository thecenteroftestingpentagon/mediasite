export default function SignOffSection() {
  return (
    <section id="strategy-call" className="max-w-[1280px] mx-auto px-8 mb-[140px] text-center flex flex-col items-center">
      <h2 className="font-h2 text-[48px] text-primary mb-8 max-w-3xl leading-tight">
        What Would 30 More Qualified Customers a Month Be Worth to You?
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <a
          className="bg-primary text-on-primary px-6 py-3 rounded-full font-medium transition-all hover:bg-opacity-90"
          href="#"
        >
          Book Your Free Strategy Call
        </a>
        <a
          className="bg-transparent border border-outline text-primary px-6 py-3 rounded-full font-medium transition-all hover:bg-surface-variant"
          href="#qualification"
        >
          Review Growth Criteria
        </a>
      </div>
    </section>
  );
}
