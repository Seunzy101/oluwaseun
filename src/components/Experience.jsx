// src/components/Experience.jsx
const jobs = [
  { period: "2025 – Present", role: "Full Stack Web Developer", company: "New Horizon", desc: "Building scalable web applications using React, Next.js and modern tools." },
  { period: "2025 – 2026", role: "UI/UX Designer", company: "New Horizon", desc: "Designing user interfaces and improving user experiences for mobile & web." },
  { period: "2026", role: "Freelance Web Designer", company: "Self Employed", desc: "Worked with multiple clients to deliver modern and responsive websites." },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 py-20">
      <p className="text-primary-light text-sm font-semibold tracking-widest mb-1 font-body">Experience</p>
      <h2 className="font-sans font-bold text-3xl text-white mb-10">My Journey</h2>

      <div className="relative border-l-2 border-border pl-8 flex flex-col gap-8">
        {jobs.map((j) => (
          <div key={j.period} className="relative">
            <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-primary border-2 border-dark" />
            <span className="text-xs text-slate-500 font-body bg-card border border-border px-3 py-1 rounded-full">
              {j.period}
            </span>
            <h3 className="font-sans font-bold text-white mt-2">{j.role}</h3>
            <p className="text-primary-light text-sm font-body">{j.company}</p>
            <p className="text-slate-500 text-sm font-body mt-1 max-w-sm">{j.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}