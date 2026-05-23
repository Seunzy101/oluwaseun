// src/components/Skills.jsx
const skills = [
  { name: "React", icon: "⚛️", level: 95 },
  { name: "JavaScript", icon: "JS", level: 90 },
  { name: "Tailwind CSS", icon: "🌊", level: 96 },
  { name: "TypeScript", icon: "TS", level: 80 },
  { name: "Figma", icon: "🎨", level: 95 },
  { name: "Git & GitHub", icon: "🐙", level: 90 },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-20">
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-primary-light text-sm font-semibold tracking-widest mb-1 font-body">My Skills</p>
          <h2 className="font-sans font-bold text-3xl text-white">Technologies I Work With</h2>
        </div>
        <a href="#" className="text-primary-light text-sm hover:underline hidden md:block">View All Skills →</a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {skills.map((s) => (
          <div key={s.name} className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary transition-all group">
            <div className="text-3xl mb-3">{s.icon}</div>
            <p className="font-sans font-semibold text-white text-sm mb-2">{s.name}</p>
            <div className="w-full bg-border rounded-full h-1.5 mb-2">
              <div
                className="bg-primary h-1.5 rounded-full transition-all"
                style={{ width: `${s.level}%` }}
              />
            </div>
            <p className="text-primary-light text-xs">{s.level}%</p>
          </div>
        ))}
      </div>
    </section>
  );
}