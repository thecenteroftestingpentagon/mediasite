export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 mt-auto py-8 sm:py-12 bg-transparent">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-3 md:gap-8">
          <span className="text-lg font-bold tracking-tighter text-zinc-900 font-h3 text-[18px] sm:text-[20px]">
            Elevateaxis
          </span>
          <span className="text-xs sm:text-sm text-[#6B6B6B] font-body-md">
            © 2024 Elevateaxis &mdash; Where Strategy Becomes Scale. High-Converting Customer Acquisition Systems.
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center">
          <a
            className="text-xs sm:text-sm text-[#6B6B6B] hover:text-primary transition-colors font-body-md"
            href="mailto:swagatobhattacharjee07@gmail.com"
          >
            swagatobhattacharjee07@gmail.com
          </a>
          <a
            className="text-xs sm:text-sm text-[#6B6B6B] hover:text-primary transition-colors font-body-md"
            href="https://cal.com/om-choksi-whpxfw/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book 15-Min Strategy Call
          </a>
        </div>
      </div>
    </footer>
  );
}
