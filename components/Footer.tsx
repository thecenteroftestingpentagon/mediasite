import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 mt-auto py-8 sm:py-12 bg-transparent">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-3 md:gap-8">
          <span className="text-lg font-bold tracking-tighter text-zinc-900 font-h3 text-[18px] sm:text-[20px]">
            Elevateaxis
          </span>
          <span className="text-xs sm:text-sm text-[#6B6B6B] font-body-md">
            © 2026 Elevateaxis. High-Converting Customer Acquisition Systems.
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <a
              className="text-xs sm:text-sm text-[#6B6B6B] hover:text-primary transition-colors font-body-md"
              href="mailto:elevatexisdigital@gmail.com"
            >
              elevatexisdigital@gmail.com
            </a>
            <a
              className="text-xs sm:text-sm text-emerald-700 hover:text-emerald-800 transition-colors font-medium flex items-center gap-1"
              href="https://wa.me/918582807895"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 +91 85828 07895 &middot; WhatsApp Us
            </a>
          </div>
          <a
            className="text-xs sm:text-sm text-[#6B6B6B] hover:text-primary transition-colors font-body-md"
            href="https://cal.com/om-choksi-whpxfw/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book 15-Min Strategy Call
          </a>

          {/* Built by Ace Intelligence */}
          <a
            href="https://aceintelligence.systems"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-[#6B6B6B] hover:text-primary transition-opacity hover:opacity-100 group border-t sm:border-t-0 sm:border-l border-zinc-200 pt-3 sm:pt-0 sm:pl-6"
          >
            <span className="font-medium">Built by</span>
            <Image
              src="/aceintelligence.png"
              alt="Ace Intelligence"
              width={120}
              height={30}
              className="h-6 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
