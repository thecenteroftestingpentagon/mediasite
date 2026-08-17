export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 mt-auto py-12 bg-transparent">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-8">
          <span className="text-lg font-bold tracking-tighter text-zinc-900 font-h3 text-[20px]">
            Elevateaxis
          </span>
          <span className="text-sm text-[#6B6B6B] font-body-md">
            © 2024 Elevateaxis. High-Converting Customer Acquisition &amp; Revenue Systems.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <a
            className="text-sm text-[#6B6B6B] hover:text-primary transition-colors font-body-md"
            href="#growth-system"
          >
            Growth System
          </a>
          <a
            className="text-sm text-[#6B6B6B] hover:text-primary transition-colors font-body-md"
            href="#the-framework"
          >
            Framework
          </a>
          <a
            className="text-sm text-[#6B6B6B] hover:text-primary transition-colors font-body-md"
            href="#"
          >
            Terms
          </a>
          <a
            className="text-sm text-[#6B6B6B] hover:text-primary transition-colors font-body-md"
            href="#"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
