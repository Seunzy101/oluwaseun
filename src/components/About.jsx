// src/components/About.jsx
export default function About() {
  const info = [
    { label: "Name:", value: "Oluwaseun Ashiru" },
    { label: "Email:", value: "ashiruseun17@gmail.com" },
    { label: "From:", value: "Lagos, Nigeria" },
    { label: "Availability:", value: "Available for Freelance", green: true },
  ];

  return (
    <section id="about" className="px-6 md:px-12 py-20 flex flex-col md:flex-row gap-12 items-center">
      {/* Image card */}
      <div className="flex-1 max-w-xs">
        <div className="bg-card border border-border rounded-2xl overflow-hidden p-6 text-center">
          <img
            src="/pic.jpeg"
            alt="Oluwaseun"
            className="w-full h-48 object-cover object-top rounded-xl mb-4"
          />
          <p className="font-sans font-bold text-white">Frontend Developer</p>
          <p className="text-slate-400 text-sm">& UI/UX Designer</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="text-primary-light text-sm font-semibold tracking-widest mb-2 font-body">About Me</p>
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-white mb-4">
          Crafting Digital Experiences That Inspire
        </h2>
        <p className="text-slate-400 font-body leading-relaxed mb-8">
          I'm a passionate Frontend Developer and UI/UX Designer with a strong eye
          for detail and a love for creating beautiful, functional and user-friendly
          digital products.
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 mb-8">
          {info.map((item) => (
            <div key={item.label} className="flex gap-2 text-sm font-body">
              <span className="text-slate-500">{item.label}</span>
              <span className={item.green ? "text-green-400" : "text-slate-200"}>
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-body font-medium transition-all">
          Read More →
        </button>
      </div>
    </section>
  );
}