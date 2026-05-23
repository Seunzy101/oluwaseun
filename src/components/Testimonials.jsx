// src/components/Testimonials.jsx
const testimonials = [
  { name: "Sarah Johnson", role: "Product Manager", text: "Oluwaseun is an exceptional developer. He delivered beyond my expectations and his attention to detail is amazing." },
  { name: "David Thompson", role: "CEO, TechNova", text: "Great experience working with him! He understood the project perfectly and delivered on time." },
  { name: "Michael Brown", role: "Marketing Director", text: "He has a strong eye for design and creates beautiful, functional websites. Highly recommended!" },
];

export default function Testimonials() {
  return (
    <section className="px-6 md:px-12 py-20">
      <p className="text-primary-light text-sm font-semibold tracking-widest mb-1 font-body">Testimonials</p>
      <h2 className="font-sans font-bold text-3xl text-white mb-10">What Clients Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all">
            <span className="text-primary-light text-4xl font-bold leading-none">"</span>
            <p className="text-slate-400 font-body text-sm mt-2 mb-6">{t.text}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-white font-bold text-sm">
                {t.name[0]}
              </div>
              <div>
                <p className="font-sans font-semibold text-white text-sm">{t.name}</p>
                <p className="text-slate-500 text-xs font-body">{t.role}</p>
              </div>
            </div>
            <div className="flex gap-1 mt-3">
              {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-xs">★</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}