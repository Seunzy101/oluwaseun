// src/components/Navbar.jsx
import { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl text-white">
          <span className="text-cyan-400 text-2xl">A.</span>
          Oluwaseun.
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-slate-400 hover:text-cyan-400 transition duration-300 text-sm"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CV Button */}
        <a
          href="/cv.pdf"
          download
          className="hidden md:flex items-center gap-2 bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg text-sm hover:border-cyan-400 transition duration-300"
        >
          Download CV
          <FaDownload className="text-cyan-400" />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-6 flex flex-col gap-5">

          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-cyan-400 transition duration-300 text-sm"
            >
              {l}
            </a>
          ))}

          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm w-fit"
          >
            Download CV
            <FaDownload />
          </a>
        </div>
      )}
    </nav>
  );
}