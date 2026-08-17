export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 mt-auto py-12 bg-transparent">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
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
            href="mailto:swagatobhattacharjee07@gmail.com"
          >
            swagatobhattacharjee07@gmail.com
          </a>
          <a
            className="text-sm text-[#6B6B6B] hover:text-primary transition-colors font-body-md"
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
