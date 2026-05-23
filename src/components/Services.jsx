// src/components/Services.jsx

import {
  FaPaintBrush,
  FaCode,
  FaBoxOpen,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    desc: "Designing intuitive and engaging user interfaces for web and mobile applications.",
  },
  {
    icon: <FaCode />,
    title: "Frontend Development",
    desc: "Building responsive and high-performance websites with modern technologies.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Product Design",
    desc: "Creating digital products that are functional, scalable and delightful.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="px-6 md:px-12 py-24 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">

        <div>
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            My Services
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            What I Can Do For You
          </h2>
        </div>

        <p className="text-slate-400 max-w-xl leading-relaxed">
          I help brands and businesses create modern digital
          experiences through creative design and clean frontend
          development.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((service) => (
          <div
            key={service.title}
            className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 group"
          >

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition duration-300">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-white text-2xl font-semibold mb-4">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 leading-relaxed mb-6">
              {service.desc}
            </p>

            {/* Link */}
            <a
              href="#contact"
              className="text-cyan-400 font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}