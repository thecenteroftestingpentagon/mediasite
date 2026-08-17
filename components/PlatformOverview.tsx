import DashboardWidget from "./DashboardWidget";

export default function PlatformOverview() {
  return (
    <section className="max-w-[1280px] mx-auto px-8 mb-[180px]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-h2 text-h2 text-primary mb-6">
          Two systems, one shared intelligence layer
        </h2>
        <p className="font-body-lg text-body-lg text-secondary-elevateaxis">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Large Card 1 */}
        <div className="bg-card-elevateaxis rounded-2xl p-6 border border-elevateaxis h-[300px] flex flex-col justify-between relative overflow-hidden group hover:shadow-sm transition-shadow">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/30 opacity-60 group-hover:opacity-80 transition-opacity"></div>
          <div className="flex justify-between items-start z-10">
            <span className="material-symbols-outlined text-secondary-elevateaxis">
              edit_document
            </span>
          </div>
          <div className="z-10">
            <h4 className="font-h3 text-[20px] mb-2">Soft Editor UI</h4>
            <p className="text-sm text-secondary-elevateaxis">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Large Card 2 */}
        <div className="bg-card-elevateaxis rounded-2xl p-6 border border-elevateaxis h-[300px] flex flex-col justify-between relative overflow-hidden group hover:shadow-sm transition-shadow">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/30 opacity-60 group-hover:opacity-80 transition-opacity"></div>
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

      <div className="w-full aspect-[16/9] bg-panel-elevateaxis rounded-3xl border border-elevateaxis flex items-center justify-center overflow-hidden relative group">
        <img
          alt="Dashboard Preview"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          {/* Glowing Accent Backgrounds */}
          <div className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -translate-x-20 -translate-y-10"></div>
          <div className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] translate-x-20 translate-y-10"></div>
          {/* Glassmorphic Widget Container */}
          <DashboardWidget />
        </div>
      </div>
    </section>
  );
}
