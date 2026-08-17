export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-200/60 bg-[#F7F7F5]/80 backdrop-blur-md transition-all">
      <div className="max-w-[1280px] mx-auto px-8 flex justify-between items-center h-[72px]">
        <div className="flex items-center gap-12">
          <a
            className="text-lg font-bold tracking-tighter text-zinc-900 text-[20px] font-h1"
            href="#"
          >
            Elevateaxis
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a
              className="text-sm font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition-colors duration-200 font-body-md"
              href="#"
            >
              Elevateaxis Studio
            </a>
            <a
              className="text-sm font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition-colors duration-200 font-body-md"
              href="#"
            >
              Elevateaxis Agents
            </a>
            <a
              className="text-sm font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition-colors duration-200 font-body-md"
              href="#"
            >
              Elevateaxis API
            </a>
            <a
              className="text-sm font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition-colors duration-200 font-body-md"
              href="#"
            >
              Resources
            </a>
            <a
              className="text-sm font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition-colors duration-200 font-body-md"
              href="#"
            >
              Enterprise
            </a>
            <a
              className="text-sm font-medium tracking-tight text-zinc-500 hover:text-zinc-900 transition-colors duration-200 font-body-md"
              href="#"
            >
              Pricing
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <a
            className="bg-primary text-on-primary px-4 py-2 rounded-full font-medium transition-all scale-98 active:opacity-80 text-[14px] font-body-md"
            href="#"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}
