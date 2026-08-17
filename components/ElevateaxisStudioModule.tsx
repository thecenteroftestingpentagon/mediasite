const SMALL_CARDS = [
  { icon: "music_note", label: "Music" },
  { icon: "graphic_eq", label: "SFX" },
  { icon: "record_voice_over", label: "Voices" },
  { icon: "movie", label: "Image & Video" },
];

export default function ElevateaxisStudioModule() {
  return (
    <section className="max-w-[1280px] mx-auto px-8 mb-[180px]">
      <div className="flex items-center gap-4 mb-8">
        <span className="font-label-caps text-label-caps bg-surface-variant text-primary px-3 py-1 rounded-full">
          Elevateaxis Studio
        </span>
        <div className="h-px bg-elevateaxis flex-grow opacity-50"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
        <div className="lg:col-span-5">
          <h2 className="font-h2 text-[48px] text-primary leading-tight">
            Create, refine, &amp; scale audio in one place
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 flex items-end">
          <p className="font-body-lg text-body-lg text-secondary-elevateaxis">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Large Card 1 */}
        <div className="bg-card-elevateaxis rounded-2xl border border-elevateaxis h-[300px] flex flex-col justify-end relative overflow-hidden group hover:shadow-sm transition-shadow">
          <img
            alt="Audio Timeline UI"
            className="absolute inset-0 w-full h-full object-cover group-hover:opacity-100 transition-opacity duration-500"
            src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="z-10 bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-b-2xl text-white">
            <h4 className="font-h3 text-[20px] mb-2 text-white">Soft Editor UI</h4>
            <p className="text-sm text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        {/* Large Card 2 */}
        <div className="bg-card-elevateaxis rounded-2xl p-6 border border-elevateaxis h-[300px] flex flex-col justify-between relative overflow-hidden group hover:shadow-sm transition-shadow">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-surface-variant/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex justify-between items-start z-10">
            <span className="material-symbols-outlined text-secondary-elevateaxis">
              closed_caption
            </span>
          </div>
          <div className="z-10">
            <h4 className="font-h3 text-[20px] mb-2">Transcript Panel</h4>
            <p className="text-sm text-secondary-elevateaxis">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {SMALL_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="bg-panel-elevateaxis rounded-xl p-5 border border-elevateaxis flex flex-col gap-3 items-start hover:bg-surface-variant/50 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-primary">
              {card.icon}
            </span>
            <span className="font-medium text-sm">{card.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
