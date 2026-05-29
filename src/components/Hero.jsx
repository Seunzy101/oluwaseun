// src/components/Hero.jsx
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const stats = [
  { value: "6", label: "Months Experience" },
  { value: "5+", label: "Projects Completed" },
  { value: "4+", label: "Happy Clients" },
  { value: "5★", label: "Client Rating" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 py-20 gap-16"
    >
      {/* LEFT CONTENT */}
      <div className="flex-1 max-w-xl text-center lg:text-left">

        {/* Badge */}
        <span className="inline-block bg-slate-800 border border-slate-700 text-cyan-400 text-xs px-4 py-2 rounded-full mb-6">
          + Available for Freelance
        </span>

        {/* Heading */}
        <h1 className="text-white font-bold text-4xl md:text-5xl mb-2">
          Hi, I'm
        </h1>

        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight mb-4">
          Oluwaseun
        </h1>

        {/* Subheading */}
        <h2 className="text-slate-300 text-lg md:text-xl mb-5">
          Full Stack Web Developer & UI/UX Designer
        </h2>

        {/* Description */}
        <p className="text-slate-500 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
          I design and build modern, responsive websites and digital
          experiences that help brands stand out and grow.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">

          <a
            href="#contact"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
          >
            Hire Me →
          </a>

          <a
            href="#projects"
            className="border border-slate-700 hover:border-cyan-400 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
          >
            View Projects ⊞
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start gap-4">
          {[FaFacebook, FaLinkedin, FaTwitter, FaGithub].map(
            (Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-11 h-11 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition duration-300"
              >
                <Icon size={18} />
              </a>
            )
          )}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 flex flex-col items-center gap-8">

        {/* Profile Image */}
        <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl">

          <img
            src="/profile.jpeg"
            alt="Oluwaseun"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />

          {/* Example image */}
          {/* 
          <img
            src="/your-photo.jpg"
            alt="Oluwaseun"
            className="w-full h-full object-cover"
          />
          */}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-center"
            >
              <span className="block text-2xl font-bold text-cyan-400 mb-1">
                {s.value}
              </span>

              <span className="text-slate-400 text-sm">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}