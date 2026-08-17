export default function HeroSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-8 mb-[140px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 flex flex-col gap-8">
          <h1 className="font-h1 text-h1 text-primary">
            Making digital experiences sound human
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              className="bg-primary text-on-primary px-6 py-3 rounded-full font-medium transition-all hover:bg-opacity-90"
              href="#"
            >
              Sign up
            </a>
            <a
              className="bg-transparent border border-outline text-primary px-6 py-3 rounded-full font-medium transition-all hover:bg-surface-variant"
              href="#"
            >
              Contact sales
            </a>
          </div>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 flex justify-end">
          <p className="font-body-lg text-body-lg text-secondary-elevateaxis max-w-sm text-right lg:text-left pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </section>
  );
}
