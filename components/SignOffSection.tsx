export default function SignOffSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-8 mb-[140px] text-center flex flex-col items-center">
      <h2 className="font-h2 text-[48px] text-primary mb-8 max-w-3xl leading-tight">
        The future of voice starts here
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <a
          className="bg-primary text-on-primary px-6 py-3 rounded-full font-medium transition-all hover:bg-opacity-90"
          href="#"
        >
          Get started
        </a>
        <a
          className="bg-transparent border border-outline text-primary px-6 py-3 rounded-full font-medium transition-all hover:bg-surface-variant"
          href="#"
        >
          Talk to sales
        </a>
      </div>
    </section>
  );
}
