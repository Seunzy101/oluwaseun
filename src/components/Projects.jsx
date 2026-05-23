// src/components/Projects.jsx
const projects = [
  { title: "Tulip Hospitality App", type: "Mobile App Design", tags: ["Figma", "UI/UX"], color: "from-orange-500/20" },
  { title: "Travel Landing Page", type: "Web Development", tags: ["React", "Tailwind CSS"], color: "from-green-500/20" },
  { title: "Portfolio Website", type: "Web Design", tags: ["Next.js", "Tailwind CSS"], color: "from-blue-500/20" },
  { title: "E-commerce UI", type: "UI/UX Design", tags: ["Figma", "UI Design"], color: "from-purple-500/20" },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-20">
      <p className="text-primary-light text-sm font-semibold tracking-widest text-center mb-2 font-body">Featured Projects</p>
      <h2 className="font-sans font-bold text-3xl text-white text-center mb-10">Some of My Recent Works</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {projects.map((p) => (
          <div key={p.title} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all group cursor-pointer">
            <div className={`w-full h-40 bg-gradient-to-br ${p.color} to-card`} />
            <div className="p-4">
              <h3 className="font-sans font-semibold text-white text-sm mb-1">{p.title}</h3>
              <p className="text-slate-500 text-xs mb-3 font-body">{p.type}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="bg-border text-slate-400 text-xs px-2 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}